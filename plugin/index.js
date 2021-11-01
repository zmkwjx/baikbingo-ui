import * as components from "./components";
export * from "./components";

export const install = (app) => {
  Object.keys(components).forEach((key) => {
    const component = components[key];
    if (component.install) {
      app.use(component);
    }
  });
};
export default { install };
