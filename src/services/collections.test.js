const collections = require("./collections");

test("Probando que las collecciones existan", () => {
  expect(collections.default).toBeTruthy();
});
