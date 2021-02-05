const { isActive, tags, description, name } = require("./index");

test("Se pueden validar los elementos activos e inactivos", () => {
  expect(isActive(true)).toBe("Active");
  expect(isActive(false)).toBe("Inactive");
});

test("Los nombres se obtendrán en diferentes formatos", () => {
  expect(name("Pedro Lopez")).toBe("Pedro Lopez");
  expect(name({ firstName: "Pedro", lastName: "Lopez" })).toBe("Pedro Lopez");
});

test("Se mostrarán correctamente las etiquetas", () => {
  expect(tags(["lets", "to", "play", "a", "game"])).toBe(
    "lets, to, play, a, game"
  );
});

test("Las Descripciones se truncarán", () => {
  expect(description("11112222333344443333222211112233332123454")).toBe(
    "1111222233334444333322221111223333212345..."
  );
});
