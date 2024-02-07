import { describe, expect, it } from "vitest";

////// REMOVE SUM FUNCTION FROM INDEX.TSX //////
import { sum } from "../index.tsx";

describe("SideNavigation", () => {
  it("should return 3", () => {
    expect(sum([1, 2])).toBe(3);
  });
});
