import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";

export const FadeIn = () => {
  const frame = useCurrentFrame();

  // const opacity = Math.min(1, frame / 60);
  const opacity = interpolate(frame, [0, 60], [0, 1], {
    /*                        ^^^^^   ^^^^^    ^^^^
    Variable to interpolate ----|       |       |
    Input range ------------------------|       |
    Output range -------------------------------|  */
    extrapolateRight: "clamp",
  });

  console.log(opacity);

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        fontSize: 80,
      }}
    >
      <div style={{ opacity: opacity }}>Hello World!</div>
    </AbsoluteFill>
  );
};