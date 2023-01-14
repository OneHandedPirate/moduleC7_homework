import { multiply, sum } from "../index"

describe('multiply test', () => {
    it("multiply 1 * 2 to equal 2", () => {
    expect(multiply(1, 2)).toBe(2);
    }),
       it("multiply 1 * 0 to equal 0", () => {
        expect(multiply(1, 0)).toBe(0);
    })
});

describe('sum test', () => {
    it("sum 1 + 2 to equal 3", () => {
        expect(sum(1, 2)).toBe(3);
    }),
        it("sum 1 + 0 to equal 1", () => {
            expect(sum(1, 0)).toBe(1);
        })
});