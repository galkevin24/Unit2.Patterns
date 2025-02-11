import { describe, it, expect } from "vitest";
import {
  isSongInPlaylist,
  isAllEven,
  haveEnoughFood,
} from "../patterns/timing";

describe("isSongInPlaylist", () => {
  it("returns false for an empty playlist", () => {
    expect(isSongInPlaylist([], "song")).toBe(false);
  });
  it("returns false if song is not in the playlist", () => {
    expect(isSongInPlaylist(["song1", "song2"], "song3")).toBe(false);
  });
  it("returns true if song is in the playlist", () => {
    expect(isSongInPlaylist(["song1", "song2"], "song1")).toBe(true);
  });
  it("returns true if song is in the playlist", () => {
    expect(isSongInPlaylist(["song2", "song1"], "song1")).toBe(true);
  });
});

describe("isAllEven", () => {
  it("returns undefined for an empty array", () => {
    expect(isAllEven([])).toBeUndefined();
  });
  it("returns true if all numbers are even", () => {
    expect(isAllEven([2, 4, 6])).toBe(true);
  });
  it("returns true if all numbers, including negatives, are even", () => {
    expect(isAllEven([2, 4, 6, -8, -10])).toBe(true);
  });
  it("returns false if any number is odd", () => {
    expect(isAllEven([2, 3, 4])).toBe(false);
  });
  it("returns false if any number is odd", () => {
    expect(isAllEven([3, 2, 4])).toBe(false);
  });
});

describe("haveEnoughFood", () => {
  it("returns true if there are no people", () => {
    expect(haveEnoughFood([{ category: "food" }], 0)).toBe(true);
  });
  it("returns true if there are no people, even when backpack is empty", () => {
    expect(haveEnoughFood([], 0)).toBe(true);
  });
  it("returns false if backpack is empty", () => {
    expect(haveEnoughFood([], 1)).toBe(false);
  });
  it("returns true if there is enough food", () => {
    expect(
      haveEnoughFood(
        [
          { category: "food" },
          { category: "equipment" },
          { category: "clothes" },
        ],
        1
      )
    ).toBe(true);
  });
  it("returns false if there is not enough food", () => {
    expect(
      haveEnoughFood(
        [
          { category: "food" },
          { category: "equipment" },
          { category: "clothes" },
        ],
        2
      )
    ).toBe(false);
  });
});
