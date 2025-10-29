"use client";
import { useEffect, useRef, useState } from "react";
import { ethers } from "ethers";
import { useRouter } from "next/navigation";
import { GraffitiChainABI } from "@/abi/GraffitiChainABI";
import { GraffitiChainAddresses } from "@/abi/GraffitiChainAddresses";
import { createFhevmInstance } from "@/fhevm/internal/fhevm";
import Navbar from "@/components/Navbar";
import { uploadDataUrlToPinata } from "@/lib/ipfs";

export default function CreatePage() {
  const router = useRouter();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [provider, setProvider] = useState<ethers.BrowserProvider | null>(null);
  const [signer, setSigner] = useState<ethers.JsonRpcSigner | null>(null);
  const [chainId, setChainId] = useState<number | null>(null);
  const [instance, setInstance] = useState<any>(null);
  const [address, setAddress] = useState<string>("");
  const [fhevmStatus, setFhevmStatus] = useState<"idle" | "loading" | "ready" | "error">("idle");
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState("#06ffa5");
  const [brushSize, setBrushSize] = useState(5);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [minting, setMinting] = useState(false);

  useEffect(() => {
    const p = new ethers.BrowserProvider((window as any).ethereum);
    setProvider(p);
    p.getNetwork().then(n => setChainId(Number(n.chainId)));
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.fillStyle = "#0f0f0f";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  const target = chainId ? GraffitiChainAddresses[String(chainId) as keyof typeof GraffitiChainAddresses] : undefined;

  const connect = async () => {
    if (!provider) return;
    setFhevmStatus("loading");
    await provider.send("eth_requestAccounts", []);
    const s = await provider.getSigner();
    setSigner(s);
    setAddress(await s.getAddress());
    try {
      const inst = await createFhevmInstance({ provider: (window as any).ethereum });
      setInstance(inst);
      setFhevmStatus("ready");
    } catch (e) { console.error(e); setFhevmStatus("error"); }
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => { setIsDrawing(true); draw(e); };
  const stopDrawing = () => { setIsDrawing(false); };
  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing && e.type !== "mousedown") return;
    const canvas = canvasRef.current; if (!canvas) return;
    const ctx = canvas.getContext("2d"); if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left; const y = e.clientY - rect.top;
    ctx.fillStyle = color; ctx.beginPath(); ctx.arc(x, y, brushSize, 0, Math.PI * 2); ctx.fill();
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current; if (!canvas) return;
    const ctx = canvas.getContext("2d"); if (!ctx) return;
    ctx.fillStyle = "#0f0f0f"; ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  const mintNFT = async () => {
    if (!signer || !target?.address || !canvasRef.current) return;
    setMinting(true);
    try {
      const canvas = canvasRef.current;
      const dataUrl = canvas.toDataURL("image/png");

      // Use Pinata JWT from env if provided; for demo it may be undefined
      const jwt = process.env.NEXT_PUBLIC_PINATA_JWT || "";
      let uri = "";
      try {
        if (jwt) {
          const { uri: ipfsUri } = await uploadDataUrlToPinata(dataUrl, jwt);
          uri = ipfsUri;
        } else {
          // fallback to data URI (not recommended for production)
          uri = dataUrl;
        }
      } catch (e) {
        console.error("Pinata upload failed, fallback to data URI", e);
        uri = dataUrl;
      }

      const c = new ethers.Contract(target.address, GraffitiChainABI.abi, signer);
      const tx = await c.mintGraffitiNFT(uri, title || "Untitled");
      await tx.wait();
      router.push("/");
    } catch (e) { console.error(e); alert("❌ Mint failed"); } finally { setMinting(false); }
  };

  return (
    <>
      <Navbar address={address} onConnect={connect} fhevmStatus={fhevmStatus} chainId={chainId} />
      <main style={{ padding: "40px", minHeight: "calc(100vh - 80px)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h1 style={{ textAlign: "center", marginBottom: "32px" }}>✏️ CREATE GRAFFITI</h1>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "32px" }}>
            <div className="card">
              <h3 style={{ marginBottom: "16px" }}>Canvas</h3>
              <canvas ref={canvasRef} width={800} height={600} onMouseDown={startDrawing} onMouseUp={stopDrawing} onMouseMove={draw} onMouseLeave={stopDrawing} style={{ width: "100%", height: "auto" }} />
              <div style={{ marginTop: "16px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
                {["#06ffa5", "#ff006e", "#8338ec", "#3a86ff", "#ffbe0b", "#ffffff"].map(c => (
                  <button key={c} onClick={() => setColor(c)} style={{ width: "40px", height: "40px", background: c, border: color === c ? "3px solid #fff" : "2px solid #555", borderRadius: "50%", padding: 0 }} />
                ))}
              </div>
              <div style={{ marginTop: "16px" }}>
                <label style={{ display: "block", marginBottom: "8px" }}>Brush Size: {brushSize}px</label>
                <input type="range" min="1" max="30" value={brushSize} onChange={(e) => setBrushSize(Number(e.target.value))} style={{ width: "100%" }} />
              </div>
              <button onClick={clearCanvas} style={{ marginTop: "16px", width: "100%" }}>🗑 Clear Canvas</button>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: "16px" }}>Metadata</h3>
              <div style={{ marginBottom: "16px" }}>
                <label style={{ display: "block", marginBottom: "8px" }}>Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="My Graffiti" />
              </div>
              <div style={{ marginBottom: "24px" }}>
                <label style={{ display: "block", marginBottom: "8px" }}>Description</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="A cool graffiti art..." rows={4} />
              </div>
              <button onClick={mintNFT} disabled={!signer || !target?.address || minting} style={{ width: "100%", marginBottom: "12px" }}>{minting ? "⏳ Minting..." : "🚀 Mint NFT"}</button>
              <button onClick={() => router.push("/")} style={{ width: "100%" }}>← Back to Wall</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

