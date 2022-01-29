import { sum } from "./sum";

it("summing 5 and 2 will return 7", () => {
  // const a: string = 5; // this will not fail if we used jest, but ts-jest will.
  // expect(a).toBe(5);
  expect(sum(5, 2)).toBe(7);
});
