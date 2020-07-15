import { makeSprite } from '@replay/core'

export const birdWidth = 50
export const birdHeight = 40

export const Bird = makeSprite({
  render() {
    return (
      <>
        <image
          testId="bird"
          fileName="bird.png"
          width={birdWidth}
          height={birdHeight}
        />
      </>
    )
  },
})
