// Reverse a string
export function reverse(str:String): String {
    let reversed = '';
    for (let char of str) {
        reversed = char + reversed;
    }

    return reversed;
}

// Reverse a number
export function reverseInt(num:number): number {
    let reversed = num.toString().split('').reverse().join('');

    return parseInt(reversed) * Math.sign(num);
}

// Palindrome
export function isPalindrome(str:String): boolean {
    return str === reverse(str);
}

// Most common char
export function mostCommonChar(str:String): String {
    const charMap = {}
    for (const char of str) {
        charMap[char] = ++charMap[char] || 1;
    }

    let max: number = 0;
    let maxChar: String = '';
    for (const key in charMap) {
        if (charMap[key] > max) {
            max = charMap[key];
            maxChar = key;
        }
    }

    return maxChar;
}

// Most repeated word
export function maxRepeatedWord(str) {
    const wordMap = {}
    const words = str.split(" ");

    for (const word of words) {
        wordMap[word] = ++wordMap[word] || 1;
    }

    console.log(wordMap);

    let max: number = 0;
    let maxWords = [];
    for (const word in wordMap) {
        if (wordMap[word] > max) {
            maxWords = [];
            max = wordMap[word];
            maxWords.push({ [word]: wordMap[word] });
        } else if (wordMap[word] === max) {
            maxWords.push({ [word]: wordMap[word] });
        }
    }

    return maxWords;
}

// Array chunks
export function chunk(array, size) {
    const result = [];
    let index = 0;
    while (index < array.length) {
        result.push(array.slice(index, index + size));
        index += size;
    }
    
    return result;
}

// Capitalize a string
export function capitalize(str) {
    const words: Array<string> = str.split(' ');
    const result = [];
    for (let word of words) {
        result.push(word[0].toUpperCase() + word.slice(1));
    }
    return result.join(' ');
    // alt: return words.map(word => word[0].toUpperCase() + word.slice(1).join(' '););
}

// Anagram
export function isAnagram(str1:string, str2:string) {
    const charMap1 = charMap(str1);
    const charMap2 = charMap(str2);
   
    if (Object.keys(charMap1).length !== Object.keys(charMap2).length) return false;

    for (let key in charMap1) {
        if (charMap1[key] !== charMap2[key]) return false;
    }

    return true;
}

function charMap(str: string) {
    const charMap = {};
    str = str.toLowerCase().replace(/[\W]/g, ''); // remove special characters
    for (let char of str) {
        charMap[char] = ++charMap[char] || 1;
    }
    return charMap;
}

// Count vowels
export function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    
    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;

    /**
     * alt:
     * const matches = str.match(/[aeiou]/gi);
     * return matches ? matches.length : 0;
     */
}

// Fizz Buzz
// log numbers from 1 to n. on multiples of 3 print fizz, on multiples of 5 print buzz.
export function fizzbuzz(n) { // implemented with array instead of console.log
    const result: (number | string)[] = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(i);
        }
    }
    return result;
}

// Steps string pattern
export function steps(n) {
    const result = [];
    for (let row = 1; row <= n; row++) {
        let line = '';
        for (let col = 1; col <= n; col++) {
            if (col <= row) {
                line += '#';
            } else {
                line += ' ';
            }
        }
        result.push(line);
    }
    return result;
}

// Pyramid string pattern
export function pyramid(n) {
    const result = [];
    const mid = Math.floor((2 * n - 1) / 2);
    for (let row = 0; row < n; row++) {
        let line = '';
        for (let col = 0; col < 2 * n - 1; col++) {
            if (col >= mid - row && col <= mid + row) {
                line += '#';
            } else {
                line += ' ';
            }
        }
        result.push(line);
    }
    return result;
}

// Spiral matrix
// a function that accepts an integer n and returns a nxn spiral matrix.
export function spiralMatrix(n) {
    const result = [];
    let counter = 1;
    let startRow = 0;
    let endRow = n - 1;
    let startCol = 0;
    let endCol = n - 1;

    for (let i = 0; i < n; i++) {
        result.push([]); // add empty rows
    }

    while (startRow <= endRow && startCol <= endCol) {
      for(let i = startCol; i <= endCol; i++) {
        result[startRow][i] = counter;
        counter++;
      }
      startRow++;
    
      for(let i = startRow; i <= endRow; i++) {
        result[i][endCol] = counter;
        counter++;
      }
      endCol--;
    
      for(let i = endCol; i >= startCol; i--) {
        result[endRow][i] = counter;
        counter++;
      }
      endRow--;

      for(let i = endRow; i >= startRow; i--) {
        result[i][startCol] = counter;
        counter++;
      }
      startCol++;
    }
    
    return result;
}

console.log(spiralMatrix(4));

// Fibonacci
export function fibonacci(n) {
    const array = [];
    for (let i = 0; i < n; i++) {
        if (i === 0) {
            array.push(0);
        } else if (i === 1) {
            array.push(1);
        } else { array.push(array[i-1] + array[i-2]); }
    }
    return array;

    /** alt:
      Array.from({ length: n }).reduce(
       (prevValue: Array<number>, currentValue: number, i: number) => 
           prevValue.concat(i > 1 ? prevValue[i - 1] + prevValue[i - 2] : i),
       []
      );
     */
}