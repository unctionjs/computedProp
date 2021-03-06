
import computedProp from "./index";

test("works", () => {
  expect(computedProp(
    ({id, attributes: {username}}) => `${username}#${id}`
  )(
    ["tag"]
  )(
    {
      id: "1",
      attributes: {username: "krainboltgreene"},
    }
  )).toEqual({
    id: "1",
    tag: "krainboltgreene#1",
    attributes: {username: "krainboltgreene"},
  });
});

test("works", () => {
  expect(computedProp(
    ({id, attributes: {username}}) => `${username}#${id}`
  )(
    ["attributes", "tag"]
  )(
    {
      id: "1",
      attributes: {username: "krainboltgreene"},
    }
  )).toEqual({
    id: "1",
    attributes: {
      username: "krainboltgreene",
      tag: "krainboltgreene#1",
    },
  });
});
