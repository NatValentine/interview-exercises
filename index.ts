// Reverse a string
// reverse("hello world") => "dlrow olleh"
function reverse(str:String): String {
    let reversed = '';
    for (let char of str) {
        reversed = char + reversed;
    }

    return reversed;
}

// console.log(reverse("hello world"));


// Reverse an int
// reverseInt(123) => 321
function reverseInt(num:number): number {
    let reversed = num.toString().split('').reverse().join('');

    return parseInt(reversed) * Math.sign(num);
}

// console.log(reverseInt(-123));


// Palindrome
// isPalindrome("hello world") => false
// isPalindrome("kayak") => true
function isPalindrome(str:String): boolean {
    return str === reverse(str);
}

// console.log(isPalindrome("girafarig"));
// console.log(isPalindrome("a cavar a caravaca"));

// Most common char
// mostCommonChar("aaabbbcccc") => 'c'
function mostCommonChar(str:String): String {
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

// console.log(mostCommonChar("abbcccdddd"));


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

console.log(spiralMatrix(4));