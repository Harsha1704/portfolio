import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          backgroundColor: "#0f172a",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              backgroundColor: "#2563eb",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              fontSize: "20px",
              fontFamily: "monospace",
            }}
          >
            SH
          </div>
          <span style={{ fontSize: "24px", color: "#94a3b8", fontWeight: 600 }}>
            Sri Harsha • Engineering Portfolio
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h1
            style={{
              fontSize: "56px",
              fontWeight: 800,
              lineHeight: 1.15,
              color: "#ffffff",
              margin: 0,
            }}
          >
            Aspiring Machine Learning Engineer & Full-Stack Developer
          </h1>
          <p style={{ fontSize: "26px", color: "#94a3b8", margin: 0 }}>
            B.Tech CSE (AI & ML) @ Lovely Professional University • 8.51 CGPA
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #1e293b",
            paddingTop: "24px",
            fontSize: "18px",
            color: "#60a5fa",
            fontFamily: "monospace",
          }}
        >
          <span>SatQuery AI • ResumeMatch AI • 3D Bharat • MoodMate • TrafficShield</span>
          <span>{process.env.NEXT_PUBLIC_SITE_URL ? new URL(process.env.NEXT_PUBLIC_SITE_URL).hostname : "Engineering Portfolio"}</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
