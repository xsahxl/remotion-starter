import { Composition } from "remotion";
// import { FadeIn } from "./components/FadeIn";
// import { Spring } from "./components/Spring";
// import { MyComposition } from "./components/MyComposition";
// import { MySequence } from "./components/Sequence";
import { HelloWorld, myCompSchema } from "./components/HelloWorld";

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="MyComposition"
      durationInFrames={150}
      fps={30}
      width={1920}
      height={1080}
      component={HelloWorld}
      schema={myCompSchema}
      defaultProps={{
        titleText: "Welcome to Remotion",
        titleColor: "#000000",
        logoColor1: "#91EAE4",
        logoColor2: "#86A8E7",
      }}
    />
  );
};