import { fetchTest } from "./api/test.api";

test("fetch a test", async () => {
  const test = await fetchTest();
  expect(test[0]).toEqual({
    completed: false,
    id: 1,
    title: "delectus aut autem",
    userId: 1,
  });
});
