import { definePrime } from "../definePrime"

describe("тесты для функции definePrime", () => {
    it("Вывод для простого числа", () => {
        expect(definePrime(7)).toBe('Число 7 - простое число');
    }),
        it("Вывод для составного числа", () => {
            expect(definePrime(15)).toBe('Число 15 - составное число');
        }),
        it("Вывод для некорректного ввода", () => {
            expect(definePrime(1001)).toBe('Данные неверны');
        })
})