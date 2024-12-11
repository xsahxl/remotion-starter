import { AbsoluteFill, Audio, staticFile } from "remotion";

export const MyAudio = () => {
  return (
    <AbsoluteFill>
      <Audio src={staticFile("audio.mp3")} />
    </AbsoluteFill>
  );
};
