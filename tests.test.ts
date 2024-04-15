import { isPalindrome, mostCommonChar, reverse, reverseInt } from ".";

describe('Reverse a string', () => {
    test('hello world reversed is dlrow olleh', () => {
        expect(reverse('hello world')).toBe('dlrow olleh');
    })
});

describe('Reverse a number', () => {
    test('123 reversed is 321', () => {
        expect(reverseInt(123)).toBe(321);
    }),
    test('-123 reversed is -321', () => {
        expect(reverseInt(-123)).toBe(-321);
    })
});

describe('Palindromes', () => {
    test('hello world is not a palindrome', () => {
        expect(isPalindrome('hello world')).toBe(false);
    }),
    test('kayak is a palindrome', () => {
        expect(isPalindrome('kayak')).toBe(true);
    })
});

describe('Most common char', () => {
    test('c is the most common char in aaabbbcccc', () => {
        expect(mostCommonChar('aaabbbcccc')).toBe('c');
    }),
    test('a is the most common char in aaaaabbbcccc', () => {
        expect(mostCommonChar('aaaaabbbcccc')).toBe('a');
    })
});