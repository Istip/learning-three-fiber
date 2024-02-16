### Box example

This is a simple example where you can modify color of the rotating boxes and by clicking them, you can scale up and down.

It also uses the `useFrame` hook to access delta value and statically rotate the cubes on the x axis.

For this, we have the following snippet I wrote:

```typescript
useFrame((_, delta) => {
  ref.current!.rotation.x += delta;
});
```

The original link can be found here: https://codesandbox.io/p/sandbox/basic-demo-rrppl0y8l4?file=%2Fsrc%2FApp.js%3A31%2C1-33%2C78
