export {};

declare global {
  type TextureFont = {
    /**
     * Font name
     */
    name: string;
    /**
     * Size of font in relation to game size
     */
    size: number;
  };

  namespace JSX {
    interface IntrinsicElements {
      text: {
        font?: TextureFont | undefined;
        text: string;
        /**
         * Alignment of text around x position. `"left"` will put the left edge of
         * the text at the x position.
         *
         * @default "center"
         */
        align?: "left" | "center" | "right" | undefined;
        /**
         * An RGB hex value (e.g. `#ff0000`) or CSS Level 1 keyword (e.g. `green`)
         */
        color: string;
        opacity?: number | undefined;
        scaleX?: number | undefined;
        scaleY?: number | undefined;
        anchorX?: number | undefined;
        anchorY?: number | undefined;
        x?: number | undefined;
        y?: number | undefined;
        rotation?: number | undefined;
        testId?: string | undefined;
      };
      circle: {
        radius: number;
        /**
         * An RGB hex value (e.g. `#ff0000`) or CSS Level 1 keyword (e.g. `green`)
         */
        color: string;
        opacity?: number | undefined;
        scaleX?: number | undefined;
        scaleY?: number | undefined;
        anchorX?: number | undefined;
        anchorY?: number | undefined;
        x?: number | undefined;
        y?: number | undefined;
        rotation?: number | undefined;
        testId?: string | undefined;
      };
      rectangle: {
        width: number;
        height: number;
        /**
         * An RGB hex value (e.g. `#ff0000`) or CSS Level 1 keyword (e.g. `green`)
         */
        color: string;
        opacity?: number | undefined;
        scaleX?: number | undefined;
        scaleY?: number | undefined;
        anchorX?: number | undefined;
        anchorY?: number | undefined;
        x?: number | undefined;
        y?: number | undefined;
        rotation?: number | undefined;
        testId?: string | undefined;
      };
      line: {
        /**
         * An RGB hex value (e.g. `#ff0000`) or CSS Level 1 keyword (e.g. `green`)
         */
        color: string;
        opacity?: number | undefined;
        scaleX?: number | undefined;
        scaleY?: number | undefined;
        anchorX?: number | undefined;
        anchorY?: number | undefined;
        /**
         * Thickness of line.
         * @default 1
         */
        thickness?: number | undefined;
        /**
         * Coordinates of [x, y] to draw line, first coordinate is where the line
         * starts
         */
        path: [number, number][];
        x?: number | undefined;
        y?: number | undefined;
        rotation?: number | undefined;
        testId?: string | undefined;
      };
      image: {
        /**
         * Check each platform for supported file types. PNG is preferred on iOS
         */
        fileName: string;
        width: number;
        height: number;
        opacity?: number | undefined;
        scaleX?: number | undefined;
        scaleY?: number | undefined;
        anchorX?: number | undefined;
        anchorY?: number | undefined;
        x?: number | undefined;
        y?: number | undefined;
        rotation?: number | undefined;
        testId?: string | undefined;
      };
      spriteSheet: {
        /**
         * Check each platform for supported file types. PNG is preferred on iOS
         */
        fileName: string;
        columns: number;
        rows: number;
        index: number;
        width: number;
        height: number;
        opacity?: number | undefined;
        scaleX?: number | undefined;
        scaleY?: number | undefined;
        anchorX?: number | undefined;
        anchorY?: number | undefined;
        x?: number | undefined;
        y?: number | undefined;
        rotation?: number | undefined;
        testId?: string | undefined;
      };
    }
  }
}
