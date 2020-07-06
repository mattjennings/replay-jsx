import { transformSync } from "@babel/core";

const plugins = [
  [
    "@babel/plugin-transform-react-jsx",
    {
      pragma: "ReplayJSX.create",
      pragmaFrag: "ReplayJSX.Fragment",
    },
  ],
  require("./babel-plugin"),
];

it("injects ReplayJSX", () => {
  const { code } = transformSync(
    `
    import { makeSprite } from "@replay/core";

    export const birdWidth = 50;
    export const birdHeight = 40;

    export const Bird = makeSprite({
      render() {
        return (
          <>
            <image fileName="bird.png" width={birdWidth} height={birdHeight} />
          </>
        );
      },
    });
`,
    {
      plugins,
    }
  );

  console.log(code);
  expect(code).toMatchSnapshot();
});
