import add from './calculator';

describe('Calculator', () => {
    test("If input is string or empty return 0!", () => {
        expect(add('')).toBe(0);
    });

    test("If input is single string or number return as it is!", () => {
        expect(add(1)).toBe(1);
        expect(add('2')).toBe(2);
    });

    test("Handle Multiple numbers!", () => {
        expect(add('1,3,2,5')).toBe(11);
    });

    test("Handle new lines using delimeters!", () => {
        expect(add('1\n2,5')).toBe(8);
    });

    test("Handle custom delimeters!", () => {
        expect(add('//;\n1;2;5')).toBe(8);
    });
});