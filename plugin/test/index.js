import main from "./index.vue";

main.install = (app) => {
  app.component(main.name, main);
};

export default main;
