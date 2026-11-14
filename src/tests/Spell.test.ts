import { expect, test } from "vitest";
import Spell from "../domain/Spell";

const lumos = new Spell("Lumos", "Ilumina la punta de la varita", "book");

test("A spell from a book is original", () => {
  expect(lumos.isOriginal()).toBeTruthy();
});

test("Name isn't empty", () => {
  expect(lumos.Name.length > 0).toBe(true);
});

test("Name is empty", () => {
  expect(lumos.Name.length === 0).not.toBe(true);
});

test("Desc isn't empty", () => {
  expect(lumos.descripcion.length > 0).toBe(true);
});

test("Desc isn't empty", () => {
  expect(lumos.descripcion.length === 0).not.toBe(true);
});

test("Desc isn't too long", () => {
  expect(lumos.descripcion.length <= 120).toBe(true);
});

test("Desc isn't too long", () => {
  expect(lumos.descripcion.length > 120).not.toBe(true);
});

test("Indicate first appearance", () => {
  expect(lumos.firstAppearance).toBe("book");
  expect(lumos.getOriginLabel()).toBe("Libro");
});

test("describe", () => {
  expect(lumos.describe()).toBe("Lumos (Libro): Ilumina la punta de la varita");
});

/////////////////////////////////////(contras)

test("Rejects an empty name", () => {
  expect(() => new Spell("", "Descripción", "book")).toThrow(
    "El nombre del hechizo no puede ser vacío",
  );
});

test("Rejects a empty description", () => {
  expect(() => new Spell("Lumos", "   ", "book")).toThrow(
    "La descripción del hechizo no puede ser vacía",
  );
});

test("Rejects descriptions over 120 characters", () => {
  expect(() => new Spell("Lumos", "a".repeat(121), "book")).toThrow(
    "La descripción no puede superar los 120 caracteres",
  );
});

test("Rejects an invalid first appearance", () => {
  expect(() => new Spell("Lumos", "Descripción", "unknown" as never)).toThrow(
    "Debe indicar la primera aparición del hechizo",
  );
});

test("A movie spell is not original", () => {
  const spell = new Spell("Lumos", "Descripción", "movie");
  expect(spell.isOriginal()).toBe(false);
  expect(spell.getOriginLabel()).toBe("Película");
});
