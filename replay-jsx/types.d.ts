import { Texture } from '@replay/core'

export type RC<P = {}> = P & { children?: Texture | Texture[] }

declare global {
  type TextureFont = {
    /**
     * Font name
     */
    name: string
    /**
     * Size of font in relation to game size
     */
    size: number
  }

  namespace JSX {
    type ReplayComponent<P = ReplayComponentProps> = P | ((props: P) => Texture)

    interface ReplayComponentProps {
      testId?: string | undefined
    }

    interface TextureProps extends ReplayComponentProps {
      opacity?: number | undefined
      scaleX?: number | undefined
      scaleY?: number | undefined
      anchorX?: number | undefined
      anchorY?: number | undefined
      x?: number | undefined
      y?: number | undefined
      rotation?: number | undefined
    }

    interface TextProps extends TextureProps {
      color: string
      font?: TextureFont | undefined
      text: string
      /**
       * Alignment of text around x position. `"left"` will put the left edge of
       * the text at the x position.
       *
       * @default "center"
       */
      align?: 'left' | 'center' | 'right' | undefined
      /**
       * An RGB hex value (e.g. `#ff0000`) or CSS Level 1 keyword (e.g. `green`)
       */
    }

    interface CircleProps extends TextureProps {
      color: string
      radius: number
    }

    interface RectangleProps extends TextureProps {
      color: string
      width: number
      height: number
    }

    interface LineProps extends TextureProps {
      color: string
      /**
       * Thickness of line.
       * @default 1
       */
      thickness?: number | undefined
      /**
       * Coordinates of [x, y] to draw line, first coordinate is where the line
       * starts
       */
      path: [number, number][]
    }

    interface ImageProps extends TextureProps {
      /**
       * Check each platform for supported file types. PNG is preferred on iOS
       */
      fileName: string
      width: number
      height: number
    }

    interface SpriteSheetProps extends TextureProps {
      /**
       * Check each platform for supported file types. PNG is preferred on iOS
       */
      fileName: string
      columns: number
      rows: number
      index: number
      width: number
      height: number
    }

    interface IntrinsicElements {
      text: ReplayComponent<TextProps>
      circle: ReplayComponent<CircleProps>
      rectangle: ReplayComponent<RectangleProps>
      line: ReplayComponent<LineProps>
      image: ReplayComponent<ImageProps>
      spriteSheet: ReplayComponent<SpriteSheetProps>
    }
  }
}
