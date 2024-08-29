// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num2 > num1) {
    return num2;
  } else {
    return num1;
  }
}

console.log(maxOfTwoNumbers(15, 56));

// Iteration 2 | Find the Longest Word
const words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
];

function findLongestWord(arry) {
  if (arry.length === 0) {
    return null;
  }
  console.log(arry);
  let palabraMasGrande = arry[0];
  for (let i = 0; i < arry.length; i++) {
    if (arry[i].length > palabraMasGrande.length) {
      palabraMasGrande = arry[i];
    }
  }
  return palabraMasGrande;
}
findLongestWord(words);

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrayNum) {
  let sum = 0;
  for (let i = 0; i < arrayNum.length; i++) {
    sum += arrayNum[i];
  }
  return sum;
}
sumNumbers(numbers);

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arrayNum2) {
  if (arrayNum2.length === 0) {
    return 0;
  }
  let resuultSum = sumNumbers(arrayNum2);
  return resuultSum / arrayNum2.length;
}

// Iteration 5 | Find Elements
const words2 = [
  'machine',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'truth',
  'disobedience',
];

function doesWordExist(array2, word) {
  if (array2.length === 0) {
    return null;
  }
  for (let i = 0; i < array2.length; i++) {
    if (array2[i] === word) {
      return true;
    }
  }
  return false;
}
doesWordExist(words2, 'machine');
doesWordExist(words2, 'cosa');
