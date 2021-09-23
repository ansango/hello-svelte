import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    name: "world",
    img: "https://picsum.photos/200/300",
  },
});

export default app;
