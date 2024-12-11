import { Composition } from "remotion";
// import { FadeIn } from "./components/FadeIn";
// import { Spring } from "./components/Spring";
// import { MyComposition } from "./components/MyComposition";
import { MySequence } from "./components/Sequence";

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="MyComposition"
      durationInFrames={150}
      fps={30}
      width={1920}
      height={1080}
      component={MySequence}
    />
  );
};