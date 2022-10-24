import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    emailAddress: "worgles99@gmail.com",
  },
});

export default app;
