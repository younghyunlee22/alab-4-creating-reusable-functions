/*
write functions that accomplish the following:
Take an array of numbers and return the sum.
Take an array of numbers and return the average.
Take an array of strings and return the longest string.
Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
Take a number, n, and print every number between 1 and n without using loops. Use recursion. */

function sumOfNumArray(arr) {
  let sum = 0;
  arr.forEach(function (num) {
    sum += num;
  });
  return sum;
}

console.log(sumOfNumArray([1, 2, 3, 4])); // 10

function averageOfNumArray(arr) {
  let sum = 0;
  arr.forEach(function (num) {
    sum += num;
  });
  return sum / arr.length;
}

console.log(averageOfNumArray([1, 2, 3, 4]));

function longestStringOfStrArray(arr) {
  let longestStr = "";
  let numLongestStr = arr[0].length;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > numLongestStr) {
      longestStr = arr[i];
    }
    return longestStr;
  }
}

console.log(longestStringOfStrArray(["a", "aaa", "aa"]));

let arrResult = [];
function stringsLongerThan(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > num) {
      arrResult.push(arr[i]);
    }
  }
  return arrResult;
}

console.log(stringsLongerThan(["say", "hello", "in", "the", "morning"], 3));

function printNumRecursion(n) {
  if (n >= 1) {
    printNumRecursion(n - 1);
    console.log(n);
  }
}

printNumRecursion(4);
