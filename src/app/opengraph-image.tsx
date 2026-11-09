import { ImageResponse } from "next/og";

export const alt = "Che Bagels — Bagels neoyorquinos en Paraguay";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Generated at build time, so the social image lives inside this deployment
 * instead of pointing at an asset hosted by the site this app will replace.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#6e1d2b",
          padding: "64px 72px",
          color: "#f6efe3",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 22,
            letterSpacing: 8,
          }}
        >
          <div style={{ width: 48, height: 2, backgroundColor: "#e3d2b4" }} />
          <div>ASUNCIÓN · PARAGUAY</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 116, lineHeight: 0.92, fontWeight: 700 }}>
            Bagels
          </div>
          <div
            style={{
              fontSize: 116,
              lineHeight: 0.92,
              fontStyle: "italic",
              color: "#e3d2b4",
            }}
          >
            neoyorquinos
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 24,
            paddingTop: 26,
            borderTop: "1px solid rgba(246,239,227,0.35)",
          }}
        >
          <div>Che Bagels</div>
          <div>Hecho a mano, todos los días</div>
        </div>
      </div>
    ),
    size,
  );
}
