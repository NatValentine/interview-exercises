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
// maxRepeatedWord("hola caracola hola cara hola cola") => {'hola': 3}
// maxRepeatedWord("hola hola caracola cola cola cara hola cola") => [{'hola': 3}, {'cola', 3}]
function maxRepeatedWord(str) {
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

//console.log(maxRepeatedWord("hola hola caracola cola cola cara hola cola"));



// Array chunks
// chunk([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]
function chunk(array, size) {
    const result = [];
    let index = 0;
    while (index < array.length) {
        result.push(array.slice(index, index + size));
        index += size;
    }
    
    return result;
}

// console.log(chunk([1, 2, 3, 4, 5], 2));


// Capitalize a string
// capitalize("hello, world") => "Hello, World"
function capitalize(str) {
    const words: Array<string> = str.split(' ');
    const result = [];
    for (let word of words) {
        result.push(word[0].toUpperCase() + word.slice(1));
    }
    return result.join(' ');
    // alt: return words.map(word => word[0].toUpperCase() + word.slice(1).join(' '););
}

// console.log(capitalize("hello, world"));



// Anagram
// isAnagram("hello world", "world hello") => true
function isAnagram(str1:string, str2:string) {
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

// console.log(isAnagram("hello world", "world hello"));



// Count vowels
// countVowels("Hello World") => 3
function countVowels(str) {
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

// console.log(countVowels("Hello World"));



// Fizz Buzz
// log numbers from 1 to n. on multiples of 3 print fizz, on multiples of 5 print buzz.
function fizzbuzz(n) {
    for (let i = 1; i < n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("fizzbuzz");
        } else if (i % 3 === 0) {
            console.log("fizz");
        } else if (i % 5 === 0) {
            console.log("buzz");
        } else {
            console.log(i);
        }
    }
}

// fizzbuzz(20);



// Steps string pattern
function steps(n) {
    for (let row = 1; row <= n; row++) {
        let line = '';
        for (let col = 1; col <= n; col++) {
            if (col <= row) {
                line += '#';
            } else {
                line += ' ';
            }
        }
        console.log(line);
    }
}

// steps(4);



// Pyramid string pattern
function pyramid(n) {
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
        console.log(line);
    }
}

// pyramid(5);



// Spiral matrix
// a function that accepts an integer n and returns a nxn spiral matrix.
function spiralMatrix(n) {
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

// console.log(spiralMatrix(4));



// Fibonacci
// first n numbers of fibonacci sequence
// fibonacci(9) => 0 1 1 2 3 5 8 13 21
function fibonacci(n) {
    const array = [];
    for (let i = 0; i < n; i++) {
        if (i === 0) {
            array.push(0);
        } else if (i === 1) {
            array.push(1);
        } else { array.push(array[i-1] + array[i-2]); }
    }
    return array;
}

const altFibonacci = (n) =>
  Array.from({ length: n }).reduce(
    (prevValue: Array<number>, currentValue: number, i: number) => 
        prevValue.concat(i > 1 ? prevValue[i - 1] + prevValue[i - 2] : i),
    []
  );

//console.log(fibonacci(9));
//console.log(altFibonacci(9));