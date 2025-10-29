"use client";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar({
  address,
  onConnect,
  fhevmStatus,
  chainId,
}: {
  address: string;
  onConnect: () => void;
  fhevmStatus: "idle" | "loading" | "ready" | "error";
  chainId: number | null;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const getStatusClass = () => {
    if (fhevmStatus === "ready") return "status-ready";
    if (fhevmStatus === "loading") return "status-loading";
    if (fhevmStatus === "error") return "status-error";
    return "";
  };

  const getChainName = () => {
    if (chainId === 11155111) return "Sepolia";
    if (chainId === 31337) return "Localhost";
    return chainId ? `Chain ${chainId}` : "Unknown";
  };

  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "20px 40px",
      borderBottom: "2px solid rgba(131, 56, 236, 0.3)",
      backdropFilter: "blur(10px)",
      background: "rgba(22, 33, 62, 0.7)",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
        <h2 style={{
          fontSize: "1.5rem",
          background: "linear-gradient(90deg, #ff006e, #8338ec)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}>
          🎨 GRAFFITI CHAIN
        </h2>
        <div style={{ display: "flex", gap: "16px" }}>
          <button
            onClick={() => router.push("/")}
            style={{
              background: pathname === "/" ? "rgba(6, 255, 165, 0.2)" : "transparent",
              border: pathname === "/" ? "2px solid #06ffa5" : "2px solid rgba(255, 255, 255, 0.2)",
              color: pathname === "/" ? "#06ffa5" : "#e0e0e0",
            }}
          >
            🏠 Wall
          </button>
          <button
            onClick={() => router.push("/create")}
            style={{
              background: pathname === "/create" ? "rgba(255, 0, 110, 0.2)" : "transparent",
              border: pathname === "/create" ? "2px solid #ff006e" : "2px solid rgba(255, 255, 255, 0.2)",
              color: pathname === "/create" ? "#ff006e" : "#e0e0e0",
            }}
          >
            ✏️ Create
          </button>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        {chainId && (
          <div style={{
            padding: "8px 16px",
            background: "rgba(58, 134, 255, 0.2)",
            border: "1px solid #3a86ff",
            borderRadius: "20px",
            color: "#3a86ff",
            fontSize: "0.85rem",
            fontWeight: "bold",
          }}>
            {getChainName()}
          </div>
        )}
        <div className={`status-badge ${getStatusClass()}`}>
          FHEVM: {fhevmStatus.toUpperCase()}
        </div>
        {address ? (
          <div style={{
            padding: "10px 20px",
            background: "rgba(6, 255, 165, 0.1)",
            border: "2px solid #06ffa5",
            borderRadius: "8px",
            color: "#06ffa5",
            fontFamily: "monospace",
          }}>
            {address.slice(0, 6)}...{address.slice(-4)}
          </div>
        ) : (
          <button onClick={onConnect}>Connect Wallet</button>
        )}
      </div>
    </nav>
  );
}


