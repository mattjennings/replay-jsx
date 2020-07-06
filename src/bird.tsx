import { makeSprite, t } from "@replay/core";

export const birdWidth = 50;
export const birdHeight = 40;

export const Bird = makeSprite({
  render() {
    return (
      // fragments could be used to wrap JSX instead of arrays? just an idea
      // but wrapping in an array works too
      <>
        <image fileName="bird.png" width={birdWidth} height={birdHeight} />
      </>
    );
  },
});
