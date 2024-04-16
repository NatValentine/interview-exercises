import { capitalize, chunk, countVowels, fibonacci, fizzbuzz, isAnagram, isPalindrome, maxRepeatedWord, mostCommonChar, pyramid, reverse, reverseInt, spiralMatrix, steps } from ".";

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

describe('Most repeated word', () => {
    test('in hola caracola hola cara hola cola, hola appears 3 times', () => {
        expect(maxRepeatedWord('hola caracola hola cara hola cola')).toEqual([{'hola': 3}]);
    }),
    test('in hola hola caracola cola cola cara hola cola, hola and cola appear each 3 times', () => {
        expect(maxRepeatedWord('hola hola caracola cola cola cara hola cola')).toEqual([{'hola': 3}, {'cola': 3}]);
    })
});

describe('Array chunks', () => {
    test('given an array and a chunk size, it is separated into chunks', () => {
        expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    })
});

describe('Capitalize a string', () => {
    test('hello world capitalized is Hello World', () => {
        expect(capitalize('hello world')).toBe('Hello World');
    })
});

describe('Anagram', () => {
    test('world hello is an anagram of hello world', () => {
        expect(isAnagram('world hello', 'hello world')).toBe(true);
    })
});

describe('Counting vowels', () => {
    test('hello world has 3 vowels', () => {
        expect(countVowels('hello world')).toBe(3);
    })
});

describe('FizzBuzz', () => {
    test('from 1 to n: on multiples of 3 print fizz, on multiples of 5 print buzz', () => {
        expect(fizzbuzz(15)).toEqual(
            [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']);
    })
});

describe('Steps', () => {
    test('generate a steps pattern with n levels', () => {
        expect(steps(4)).toEqual(
            ['#   ', '##  ', '### ', '####']);
    })
});

describe('Pyramid', () => {
    test('generate a pyramid pattern with n levels', () => {
        expect(pyramid(3)).toEqual(
            ['  #  ', ' ### ', '#####']);
    })
});

describe('Spiral matrix', () => {
    test('generate a nxn spiral matrix', () => {
        expect(spiralMatrix(4)).toEqual(
            [
              [  1,  2,  3, 4 ],
              [ 12, 13, 14, 5 ],
              [ 11, 16, 15, 6 ],
              [ 10,  9,  8, 7 ]
            ]
        )
    })
});

describe('Fibonacci', () => {
    test('returns first 9 elements of the Fibonacci sequence', () => {
        expect(fibonacci(9)).toEqual(
            [0, 1, 1, 2, 3, 5, 8, 13, 21]
        )
    })
})