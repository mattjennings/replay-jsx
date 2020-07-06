import { makeSprite } from "@replay/core";
import { WebInputs } from "@replay/web";
import { iOSInputs } from "@replay/swift";
import { isWebInput } from "./utils";

type MenuProps = {
  start: () => void;
  highScore: number;
};

export default makeSprite<MenuProps, undefined, WebInputs | iOSInputs>({
  render({ props, device }) {
    const { inputs } = device;

    if (
      inputs.pointer.justReleased ||
      (isWebInput(inputs) && inputs.keysJustPressed[" "])
    ) {
      props.start();
    }

    return (
      <>
        <text
          text={
            isWebInput(inputs) ? "Click or Space Bar to Start" : "Tap to Start"
          }
          color="white"
          y={100}
        />
        <text
          text={`High score: ${props.highScore}`}
          color="white"
          y={150}
          font={{ name: "Courier", size: 24 }}
        />
      </>
    );
  },
});
