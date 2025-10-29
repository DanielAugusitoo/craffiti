"use client";
import { useEffect, useMemo, useState } from "react";
import { ethers } from "ethers";
import { GraffitiChainABI } from "@/abi/GraffitiChainABI";
import { GraffitiChainAddresses } from "@/abi/GraffitiChainAddresses";
import { createFhevmInstance } from "@/fhevm/internal/fhevm";
import Navbar from "@/components/Navbar";
import { resolveUriToHttp } from "@/lib/ipfs";

type GraffitiItem = {
  tokenId: number;
  uri: string;
  author: string;
  owner: string;
  likesHandle: string;
};

type ReactionsDecrypted = { heart?: number; fire?: number; thumbs?: number; party?: number };

enum ReactionKind { Heart = 0, Fire = 1, Thumbs = 2, Party = 3 }

export default function Home() {
  const [provider, setProvider] = useState<ethers.BrowserProvider | null>(null);
  const [signer, setSigner] = useState<ethers.JsonRpcSigner | null>(null);
  const [chainId, setChainId] = useState<number | null>(null);
  const [instance, setInstance] = useState<any>(null);
  const [address, setAddress] = useState<string>("");
  const [fhevmStatus, setFhevmStatus] = useState<"idle" | "loading" | "ready" | "error">("idle");
  const [graffitis, setGraffitis] = useState<GraffitiItem[]>([]);
  const [selectedGraffiti, setSelectedGraffiti] = useState<GraffitiItem | null>(null);
  const [decryptedLikes, setDecryptedLikes] = useState<Record<number, number>>({});
  const [reactionsMap, setReactionsMap] = useState<Record<number, ReactionsDecrypted>>({});
  const [loading, setLoading] = useState(false);
  const [tipValue, setTipValue] = useState<string>("0.001");
  const [commentInput, setCommentInput] = useState<string>("");
  const [comments, setComments] = useState<Record<number, { author: string; uri: string; encrypted: boolean; ts: number }[]>>({});

  useEffect(() => {
    const p = new ethers.BrowserProvider((window as any).ethereum);
    setProvider(p);
    p.getNetwork().then(n => setChainId(Number(n.chainId)));

    const autoConnect = async () => {
      const eth = (window as any).ethereum;
      if (!eth) return;
      const last = localStorage.getItem("gc:lastChainId");
      if (last === "31337") {
        try { await eth.request({ method: "wallet_switchEthereumChain", params: [{ chainId: "0x7A69" }] }); } catch {}
      }
      try {
        const accs: string[] = await eth.request({ method: "eth_accounts" });
        if (accs && accs.length > 0) {
          setFhevmStatus("loading");
          const _provider = new ethers.BrowserProvider(eth);
          setProvider(_provider);
          const s = await _provider.getSigner();
          setSigner(s);
          setAddress(await s.getAddress());
          const inst = await createFhevmInstance({ provider: eth });
          setInstance(inst);
          const net = await _provider.getNetwork();
          setChainId(Number(net.chainId));
          setFhevmStatus("ready");
        }
      } catch {}

      eth.on?.("accountsChanged", async (accs: string[]) => {
        if (accs && accs.length > 0) {
          const _provider = new ethers.BrowserProvider(eth);
          setProvider(_provider);
          const s = await _provider.getSigner();
          setSigner(s);
          setAddress(await s.getAddress());
        } else {
          setSigner(null); setAddress("");
        }
      });
      eth.on?.("chainChanged", async () => {
        const _provider = new ethers.BrowserProvider(eth);
        setProvider(_provider);
        const net = await _provider.getNetwork();
        setChainId(Number(net.chainId));
        try { const inst = await createFhevmInstance({ provider: eth }); setInstance(inst); setFhevmStatus("ready"); } catch { setFhevmStatus("error"); }
      });
    };
    autoConnect();
  }, []);

  const target = useMemo(() => {
    if (!chainId) return undefined;
    return GraffitiChainAddresses[String(chainId) as keyof typeof GraffitiChainAddresses];
  }, [chainId]);
  const isDeployed = !!target?.address && target.address !== ethers.ZeroAddress;

  const connect = async () => {
    if (!provider) return;
    setFhevmStatus("loading");
    try {
      const currentChainHex = await (window as any).ethereum.request({ method: "eth_chainId" });
      const currentChain = parseInt(currentChainHex, 16);
      if (currentChain !== 31337) {
        try {
          await (window as any).ethereum.request({ method: "wallet_switchEthereumChain", params: [{ chainId: "0x7A69" }] });
        } catch (switchError: any) {
          if (switchError?.code === 4902) {
            await (window as any).ethereum.request({ method: "wallet_addEthereumChain", params: [{ chainId: "0x7A69", chainName: "Localhost 8545", nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18 }, rpcUrls: ["http://127.0.0.1:8545"] }] });
            await (window as any).ethereum.request({ method: "wallet_switchEthereumChain", params: [{ chainId: "0x7A69" }] });
          }
        }
      }
      localStorage.setItem("gc:lastChainId", "31337");
    } catch {}

    await provider.send("eth_requestAccounts", []);
    const s = await provider.getSigner();
    setSigner(s);
    setAddress(await s.getAddress());
    try {
      const inst = await createFhevmInstance({ provider: (window as any).ethereum });
      setInstance(inst);
      setFhevmStatus("ready");
      const n = await provider.getNetwork();
      setChainId(Number(n.chainId));
    } catch (e) { console.error(e); setFhevmStatus("error"); }
  };

  const loadGraffitis = async () => {
    if (!provider || !target?.address || !isDeployed) return;
    setLoading(true);
    try {
      const code = await provider.send("eth_getCode", [target.address, "latest"]);
      if (!code || code === "0x") { setGraffitis([]); return; }
      const c = new ethers.Contract(target.address, GraffitiChainABI.abi, provider);
      const total = await c.totalSupply();
      const items: GraffitiItem[] = [];
      for (let i = 1; i <= Number(total); i++) {
        try {
          const [uri, owner, author] = await c.graffitiInfo(i);
          const likesHandle = await c.getEncryptedLikes(i);
          items.push({ tokenId: i, uri, author, owner, likesHandle });
        } catch (e) { console.error(`Failed to load token ${i}`, e); }
      }
      setGraffitis(items);
    } catch (e) { console.error(e); } finally { setLoading(false); }
  };

  const likeGraffiti = async (tokenId: number) => {
    if (!signer || !target?.address || !instance) return;
    const net = await signer.provider!.getNetwork();
    const currentChainId = Number(net.chainId);
    if (currentChainId !== (target.chainId ?? currentChainId)) return;
    const code = await signer.provider!.send("eth_getCode", [target.address, "latest"]);
    if (!code || code === "0x") return;

    const c = new ethers.Contract(target.address, GraffitiChainABI.abi, signer);
    const input = instance.createEncryptedInput(target.address, await signer.getAddress());
    input.add32(1);
    const enc = await input.encrypt();
    const tx = await c.likeGraffiti(enc.handles[0], enc.inputProof, tokenId);
    await tx.wait();
    loadGraffitis();
  };

  const react = async (tokenId: number, kind: ReactionKind) => {
    if (!signer || !target?.address || !instance) return;
    const c = new ethers.Contract(target.address, GraffitiChainABI.abi, signer);
    const input = instance.createEncryptedInput(target.address, await signer.getAddress());
    input.add32(1);
    const enc = await input.encrypt();
    const tx = await c.react(enc.handles[0], enc.inputProof, tokenId, kind);
    await tx.wait();
  };

  const decryptReactions = async (tokenId: number) => {
    if (!instance || !target?.address || !provider) return;
    const c = new ethers.Contract(target.address, GraffitiChainABI.abi, provider);
    const arr: string[] = await c.getEncryptedReactions(tokenId);

    if (typeof instance.userDecrypt === "function" && signer) {
      const userAddress = await signer.getAddress();
      const { publicKey, privateKey } = instance.generateKeypair ? instance.generateKeypair() : { publicKey: undefined, privateKey: undefined };
      const startTimestamp = Math.floor(Date.now() / 1000);
      const durationDays = 365;
      const eip712 = instance.createEIP712(publicKey, [target.address], startTimestamp, durationDays);
      const signature = await signer.signTypedData(
        eip712.domain,
        { UserDecryptRequestVerification: eip712.types.UserDecryptRequestVerification },
        eip712.message
      );
      const inputs = arr.map((h) => ({ handle: h, contractAddress: target.address }));
      const res = await instance.userDecrypt(inputs, privateKey, publicKey, signature, [target.address], userAddress, startTimestamp, durationDays);
      const vals = arr.map(h => Number(res[h]));
      setReactionsMap(prev => ({ ...prev, [tokenId]: { heart: vals[0], fire: vals[1], thumbs: vals[2], party: vals[3] } }));
    }
  };

  const addComment = async (tokenId: number, text: string) => {
    if (!signer || !target?.address) return;
    // 简化：先把明文注入到 data: URL 模式，正式版会走 Pinata 上传
    const dataUri = `data:text/plain;base64,${btoa(unescape(encodeURIComponent(text)))}`;
    const c = new ethers.Contract(target.address, GraffitiChainABI.abi, signer);
    const tx = await c.addComment(tokenId, dataUri, false);
    await tx.wait();
    await loadComments(tokenId);
    setCommentInput("");
  };

  const loadComments = async (tokenId: number) => {
    if (!provider || !target?.address) return;
    const c = new ethers.Contract(target.address, GraffitiChainABI.abi, provider);
    const count: bigint = await c.getCommentsCount(tokenId);
    const arr: { author: string; uri: string; encrypted: boolean; ts: number }[] = [];
    for (let i = 0; i < Number(count); i++) {
      const [author, uri, encrypted, ts] = await c.getComment(tokenId, i);
      arr.push({ author, uri, encrypted, ts: Number(ts) });
    }
    setComments(prev => ({ ...prev, [tokenId]: arr }));
  };

  const tip = async (tokenId: number) => {
    if (!signer || !target?.address) return;
    const c = new ethers.Contract(target.address, GraffitiChainABI.abi, signer);
    const value = ethers.parseEther(tipValue || "0.001");
    const tx = await c.tip(tokenId, { value });
    await tx.wait();
  };

  const decryptLikes = async (tokenId: number, handle: string) => {
    if (!instance || !target?.address) return;
    try {
      if (typeof instance.userDecrypt === "function" && signer) {
        const userAddress = await signer.getAddress();
        const { publicKey, privateKey } = instance.generateKeypair ? instance.generateKeypair() : { publicKey: undefined, privateKey: undefined };
        const startTimestamp = Math.floor(Date.now() / 1000);
        const durationDays = 365;
        const eip712 = instance.createEIP712(publicKey, [target.address], startTimestamp, durationDays);
        const signature = await signer.signTypedData(
          eip712.domain,
          { UserDecryptRequestVerification: eip712.types.UserDecryptRequestVerification },
          eip712.message
        );
        const res = await instance.userDecrypt(
          [{ handle, contractAddress: target.address }],
          privateKey,
          publicKey,
          signature,
          [target.address],
          userAddress,
          startTimestamp,
          durationDays
        );
        const clear = res[handle];
        setDecryptedLikes(prev => ({ ...prev, [tokenId]: Number(clear) }));
        return;
      }
      if (typeof instance.decryptPublic === "function") {
        const clear = await instance.decryptPublic(target.address, handle);
        setDecryptedLikes(prev => ({ ...prev, [tokenId]: Number(clear) }));
        return;
      }
    } catch (e) { console.error("Decrypt failed", e); }
  };

  useEffect(() => { if (provider && isDeployed) { loadGraffitis(); } }, [provider, isDeployed]);

  return (
    <>
      <Navbar address={address} onConnect={connect} fhevmStatus={fhevmStatus} chainId={chainId} />
      <main style={{ padding: "40px", minHeight: "calc(100vh - 80px)" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ marginBottom: "32px", textAlign: "center" }}>
            <h1 style={{ marginBottom: "16px" }}>🧱 GRAFFITI WALL</h1>
            <p style={{ color: "#8338ec", fontSize: "1.1rem" }}>Explore on-chain digital art with encrypted reactions powered by FHEVM</p>
          </div>

          {loading && (
            <div style={{ textAlign: "center", padding: "60px", color: "#ffb300", fontSize: "1.2rem" }}>⏳ Loading graffitis from chain...</div>
          )}

          {!loading && !isDeployed && (
            <div className="card" style={{ textAlign: "center", padding: "60px" }}>
              <h3 style={{ marginBottom: "12px" }}>Contract not deployed on this network</h3>
              <p style={{ color: "#999", marginBottom: "24px" }}>Please switch your wallet to <span className="neon-text">Sepolia</span> or click Connect to switch to <span className="neon-text">Localhost 31337</span>.</p>
            </div>
          )}

          {!loading && isDeployed && graffitis.length === 0 && (
            <div className="card" style={{ textAlign: "center", padding: "60px" }}>
              <div style={{ fontSize: "4rem", marginBottom: "20px" }}>🎨</div>
              <h3 style={{ marginBottom: "16px" }}>No graffitis yet!</h3>
              <p style={{ color: "#999", marginBottom: "24px" }}>Be the first to create some digital art on-chain</p>
              <button onClick={() => { const u = typeof window !== "undefined" ? window.location : null; if (u) { u.href = "create"; } }}>✏️ Create First Graffiti</button>
            </div>
          )}

          <div className="graffiti-grid">
            {graffitis.map(g => (
              <div key={g.tokenId} className="graffiti-card" onClick={() => { setSelectedGraffiti(g); loadComments(g.tokenId); }}>
                <div style={{ width: "100%", height: "220px", background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "4rem", borderBottom: "2px solid rgba(58, 134, 255, 0.3)" }}>
                  {g.uri ? (
                    <img src={resolveUriToHttp(g.uri)} alt={`Graffiti ${g.tokenId}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  ) : (
                    <>🎨</>
                  )}
                </div>
                <div className="graffiti-info">
                  <h3 style={{ marginBottom: "8px", fontSize: "1.1rem" }}>Graffiti #{g.tokenId}</h3>
                  <p style={{ fontSize: "0.85rem", color: "#999", marginBottom: "12px" }}>by {g.author.slice(0, 6)}...{g.author.slice(-4)}</p>
                  <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
                    <button className="like-btn" onClick={(e) => { e.stopPropagation(); react(g.tokenId, ReactionKind.Heart); }}>❤️</button>
                    <button className="like-btn" onClick={(e) => { e.stopPropagation(); react(g.tokenId, ReactionKind.Fire); }}>🔥</button>
                    <button className="like-btn" onClick={(e) => { e.stopPropagation(); react(g.tokenId, ReactionKind.Thumbs); }}>👍</button>
                    <button className="like-btn" onClick={(e) => { e.stopPropagation(); react(g.tokenId, ReactionKind.Party); }}>🎉</button>
                    <button style={{ fontSize: "0.85rem", padding: "6px 12px" }} onClick={(e) => { e.stopPropagation(); decryptReactions(g.tokenId); }}>🔓 Reactions</button>
                    <span style={{ fontSize: "0.85rem", color: "#ccc" }}>
                      {reactionsMap[g.tokenId]?.heart ?? "?"} ❤️ · {reactionsMap[g.tokenId]?.fire ?? "?"} 🔥 · {reactionsMap[g.tokenId]?.thumbs ?? "?"} 👍 · {reactionsMap[g.tokenId]?.party ?? "?"} 🎉
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {selectedGraffiti && (
        <div className="modal-overlay" onClick={() => setSelectedGraffiti(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: "900px" }}>
            <h2 style={{ marginBottom: "20px", color: "#06ffa5" }}>Graffiti #{selectedGraffiti.tokenId}</h2>
            <div style={{ width: "100%", height: "320px", background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", borderRadius: "12px", marginBottom: "24px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "6rem" }}>
              {selectedGraffiti.uri ? (
                <img src={resolveUriToHttp(selectedGraffiti.uri)} alt={`Graffiti ${selectedGraffiti.tokenId}`} style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "12px" }} />
              ) : (
                <>🎨</>
              )}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
              <div className="card">
                <h3 style={{ marginBottom: "12px" }}>Reactions</h3>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "12px" }}>
                  <button className="like-btn" onClick={() => react(selectedGraffiti.tokenId, ReactionKind.Heart)}>❤️</button>
                  <button className="like-btn" onClick={() => react(selectedGraffiti.tokenId, ReactionKind.Fire)}>🔥</button>
                  <button className="like-btn" onClick={() => react(selectedGraffiti.tokenId, ReactionKind.Thumbs)}>👍</button>
                  <button className="like-btn" onClick={() => react(selectedGraffiti.tokenId, ReactionKind.Party)}>🎉</button>
                  <button onClick={() => decryptReactions(selectedGraffiti.tokenId)}>🔓 Decrypt</button>
                </div>
                <div style={{ color: "#ccc" }}>
                  {reactionsMap[selectedGraffiti.tokenId]?.heart ?? "?"} ❤️ · {reactionsMap[selectedGraffiti.tokenId]?.fire ?? "?"} 🔥 · {reactionsMap[selectedGraffiti.tokenId]?.thumbs ?? "?"} 👍 · {reactionsMap[selectedGraffiti.tokenId]?.party ?? "?"} 🎉
                </div>
              </div>
              <div className="card">
                <h3 style={{ marginBottom: "12px" }}>Tip the artist</h3>
                <div style={{ display: "flex", gap: "8px" }}>
                  <input type="text" value={tipValue} onChange={(e) => setTipValue(e.target.value)} placeholder="0.001" />
                  <button onClick={() => tip(selectedGraffiti.tokenId)}>💸 Tip</button>
                </div>
                <p style={{ color: "#999", marginTop: "8px" }}>Amount in ETH</p>
              </div>
              <div className="card" style={{ gridColumn: "1 / span 2" }}>
                <h3 style={{ marginBottom: "12px" }}>Comments</h3>
                <div style={{ display: "flex", gap: "8px", marginBottom: "12px" }}>
                  <input type="text" value={commentInput} onChange={(e) => setCommentInput(e.target.value)} placeholder="Write a comment..." />
                  <button onClick={() => addComment(selectedGraffiti.tokenId, commentInput)} disabled={!commentInput.trim()}>Send</button>
                </div>
                <div style={{ display: "grid", gap: "8px" }}>
                  {(comments[selectedGraffiti.tokenId] ?? []).map((c, idx) => (
                    <div key={idx} className="card" style={{ padding: "12px" }}>
                      <div style={{ fontSize: "0.85rem", color: "#999", marginBottom: "6px" }}>{c.author.slice(0, 6)}...{c.author.slice(-4)} · {new Date(c.ts * 1000).toLocaleString()}</div>
                      <div style={{ wordBreak: "break-all" }}>{c.uri.startsWith("data:") ? decodeURIComponent(escape(atob(c.uri.split(",")[1]))) : c.uri}</div>
                      {c.encrypted && <div style={{ color: "#ffb300", fontSize: "0.85rem" }}>Encrypted off-chain</div>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div style={{ marginTop: "16px" }}>
              <button onClick={() => setSelectedGraffiti(null)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
