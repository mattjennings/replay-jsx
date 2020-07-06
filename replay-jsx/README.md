# replay-jsx

Use JSX syntax with [Replay](https://github.com/edbentley/replay)

## Installation

`yarn add -D replay-jsx`

## Setup

### Babel

Create a .babelrc

```json
{
  "plugins": ["replay-jsx/babel"]
}
```

If you're using webpack make sure you have `babel-loader` setup. If you're using `ts-loader`, you can view an
example of how to configure it [here](../example/web/webpack.config.js)

### Typescript

Update your tsconfig to have the following:

```json
{
  "compilerOptions": {
    "target": "es6",
    "jsx": "preserve"
  }
}
```

To get the types for JSX properly working you just need to import `replay-jsx` anywhere in your project (such as your `index.tsx` file)

```ts
import "replay-jsx";
```

## Usage

```jsx
import { makeSprite } from "@replay/core";

const Player = makeSprite({
  render({ props }) {
    return (
      <>
        <circle radius={10} color={props.color} />
      </>
    );
  },
});

const Game = makeSprite({
  render() {
    return (
      <>
        <Player color="#ff0000" />
      </>
    );
  },
});
```
