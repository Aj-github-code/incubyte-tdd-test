import add from './calculator';

describe('Calculator', () => {
    test("If input is string or empty return 0!", () => {
        expect(add('')).toBe(0);
    })
})