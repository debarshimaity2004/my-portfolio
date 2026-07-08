import { ImageResponse } from "next/og";
import { profile } from "@/data/portfolio";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#05070a",
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(57,217,138,0.18), transparent 45%)",
          color: "#e6edf3",
          fontFamily: "monospace",
        }}
      >
        <div style={{ display: "flex", color: "#39d98a", fontSize: 28, marginBottom: 24 }}>
          {"~/portfolio $"}
        </div>
        <div style={{ display: "flex", fontSize: 64, fontWeight: 700, marginBottom: 20 }}>
          {profile.name}
        </div>
        <div style={{ display: "flex", fontSize: 32, color: "#8b949e" }}>
          {profile.role}
        </div>
      </div>
    ),
    { ...size }
  );
}
