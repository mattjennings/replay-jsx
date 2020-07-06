# Replay with JSX

This is a proof-of-concept for using JSX with [Replay](https://github.com/edbentley/replay)

Things to note:

- It uses `@babel/plugin-transform-react-jsx` with a custom pragma to use `Replay.create` instead of `React.createElement`
- `Replay.create` is not a real function from Replay. It is defined in `./replay.js` and provided globally from webpack so it's available in all scopes. I just used the convenience of webpack to do this, ideally this would all be done in a babel config
- Fragments translate to arrays, but you can also just wrap in arrays too. i.e

```jsx
render() {
  return (
    <>
      <text {...props}>
      <text {...props}>
    </>
  )
}
```

is equivalent to

```jsx
render() {
  return [
      <text {...props}>,
      <text {...props}>
    ]
}
```

is equivalent to

```js

render() {
  return [
    t.text({...props}),
    t.text({...props}),
  ]
}
```
