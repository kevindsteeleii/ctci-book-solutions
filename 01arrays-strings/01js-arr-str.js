/* 
1.1 Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?
*/

function isUnique(str) {
  const rec = {};
  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    rec[ch] = rec[ch] ? rec[ch] + 1 : 1;
    if (rec[ch] && rec[ch] > 1) return false;
  }
  return true;
}

function isUniqueNoDS(str) {
  for (let i = 0; i < str.length - 1; i++) {
    for (let j = i + 1; j < str.length; j++) {
      let chA = str[i];
      let chB = str[j];
      if (chA === chB) return false;
    }
  }
  return true;
}
// TESTING...
// console.log(isUnique('helloworld'));
// console.log(isUniqueNoDS('helloworld'));

/* 1.2 Check Permutation: Given two strings,write a method to decide if one is a permutation of the
other. */

const checkPerm = (str, other) => {
  let rec = {};
  if (str.length !== other.length) return false;
  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    rec[ch] = rec[ch] ? rec[ch] + 1 : 1;
  }
  for (let j = 0; j < str.length; j++) {
    let chB = other[j];
    rec[chB] = rec[chB] ? rec[chB] + 1 : 1;
    if (!rec[chB]) return false;
  }

  for (const k in rec) {
    if (rec[k] % 2 === 1) return false;
  }

  return true;
}
// TESTING...
// console.log(checkPerm('hello', 'olelhl'));

/* 1.3 URLify: Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end to hold the additional characters,and that you are given the "true" length of the string. (Note: If implementing in Java,please use a character array so that you can perform this operation in place.) */

const urlify = str => {
  // could use js' built-in string.replace() method but for my own edification I'm just gonna write it myself
  let url = '';
  for (let i = 0; i < str.length; i++) {
    let chr = str[i];
    if (chr === ' ') {
      chr = '%20';
    }
    url += chr;
  }
  return url;
}
// TESTING...
// console.log(urlify('I am here'))

/* 1.4 Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palin­ drome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words. */

function palindromePerm(str) {
  const rec = {};
  for (const ch of str) {
    rec[ch] = rec[ch] ? rec[ch] + 1 : 1;
  }
  let oddCount = 0;
  for (const k in rec) {
    let v = Number.parseInt(rec[k]);
    if (v % 2 === 1) {
      oddCount += 1;
    }
    if (oddCount > 1) return false;
  }
  return true;
}
// TESTING ...
// console.log(palindromePerm('hhhool')); // false

/* 1.5 One Away: There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away. */

const oneAway = (str, other) => {
  if (str.length === other.length) {
    return str === other;
  }
  let
    longer = '',
    shorter = '',
    changes = 0;
  if (str.length > other.length) {
    longer = str;
    shorter = other;
  }
  else {
    longer = other;
    shorter = str;
  }

  let j = 0;
  for (let i = 0; i < shorter.length; i++) {
    let shortCh = shorter[i];
    let longCh = longer[j];
    if (shortCh !== longCh) {
      changes += 1;
      j += 1;
    }
    if (changes > 1) return false;
    j += 1;
  }
  return true;
  // apple aple
}
// TESTING ...
// console.log(oneAway('app', 'appl'))

/* 1.6 String Compression: Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa would become a2blc5a3. If the "compressed" string would not become smaller than the original string, your method should return
the original string. You can assume the string has only uppercase and lowercase letters (a - z). */
const truncateStr = str => {
  let rec = {};
  let zip = '';
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    rec[ch] = rec[ch] ? rec[ch] += 1 : 1;
  }
  for (const k in rec) {
    zip += (k + rec[k])
  }
  return zip;
}
// TESTING ...
// console.log(truncateStr('helloworld'));

/* 1.7 Rotate Matrix: Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees. Can you do this in place? */

const rotMatrix = arr => {
  let w = arr.length;
  let val = [];
  for (let i = 0; i < arr.length; i++) {
    let temp = [];
    for (let j = 0; j < arr.length; j++) {
      temp.push(arr[w - j - 1][i])
    }
    val.push(temp);
  }
  return val;
}

const rotCounterMatrix = arr => {
  let w = arr.length;
  let val = [];
  for (let i = 0; i < arr.length; i++) {
    let temp = [];
    for (let j = 0; j < arr.length; j++) {
      temp.push(arr[j][w - i - 1])
    }
    val.push(temp);
  }
  return val;
}

// NOTE did not implement the in-place rotation...
// function rotMatrixVariant(arr) {
//   let n = arr.length;

// }

// TESTING ...
// console.log(rotCounterMatrix([[1,2,3], [4,5,6], [7,8,9]]));
// console.log(rotMatrix([[1,2,3], [4,5,6], [7,8,9]]));
// console.log(rotMatrixVariant([[1,2,3], [4,5,6], [7,8,9]]));

/* 1.8 Zero Matrix: Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0. */
const zeroMatrix = arr => {

  let
    rows = [],
    cols = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      let cell = arr[i][j];
      if (cell === 0) {
        rows[i] = true;
        cols[j] = true;
      }
    }
  }

  for(let i = 0; i < arr.length; i++) {
    if(rows[i]) {
      arr = nullRow(arr, i);
    }
  }

  for(let i = 0; i < arr[0].length; i++) {
    if(cols[i]) {
      arr = nullCol(arr, i);
    }
  }
  return arr;
}

const nullRow = (matrix, idx) => {
  for (let i = 0; i < matrix.length; i++) {
    matrix[idx][i] = 0;
  }
  return matrix;
}

const nullCol = (matrix, idx) => {
  for (let i = 0; i < matrix[0].length; i++) {
    matrix[i][idx] = 0;
  }
  return matrix;
}

// TESTING ...
// console.log(zeroMatrix([[1, 2, 3], [4, 1, 0], [0, 2, 1], [1, 2, 0]]));

/* 1.9 
String Rotation:Assume you have a method isSubstring which checks if one word is a substring of another. Given two strings, sl and s2, write code to check if s2 is a rotation of sl using only one call to isSubstring (e.g.,"waterbottle" is a rotation of"erbottlewat"). 
*/

function isSubstring(s1, s2) {
  if (s1.length !== s2.length) return false;
  let 
    start = s2[0],
    substr = [];

  for(let i = 0; i < s1.length; i++) {
    let temp = s1[i];
    if(start === temp) {
      substr.push(i);
    }
  }

  for(let i = 0; i < substr.length; i++) {
    let idx = substr[i];
  }

  return true;
}
