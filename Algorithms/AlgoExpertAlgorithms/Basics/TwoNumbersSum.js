class TwoNumbersSum {
  // Solution 1 - With O(n^2) and constant space
  twoNumbersSumWithConstantSpace(array, targetSum) {
    let result = [];
    array.every((currentNum, j) => {
      array.forEach((e, i) => {
        if (currentNum + e === targetSum && i !== j) {
          result = [currentNum, e];
          return false;
        }
      });
      return true;
    });
    return result;
  }

  // Solution 2 - With O(nlog(n)) and constant space
  twoNumbersSumWithLognTime(nums, targetSum) {
    const array = JSON.parse(JSON.stringify(nums));    
    array.sort((a, b) => a - b);
    let l = 0;
    let r = array.length - 1;
    let output = [];
    while (l < r) {
      if (array[l] + array[r] === targetSum) {
        output = [array[l], array[r]];
        break;
      } else if (array[l] + array[r] > targetSum) {
        r--;
      } else if (array[l] + array[r] < targetSum) {
        l++;
      }
    }
    return [nums.indexOf(output[0]), nums.indexOf(output[1])];
  }

  // Solution 3 - With O(n) and space O(n)
  twoNumbersSumWithHashMap(array, targetSum) {
    const matchingObject = {};
    let result = [];
    array.every((currentNum, index) => {
      const requiredNumber = targetSum - currentNum;
      if (!matchingObject[requiredNumber]) {
        matchingObject[currentNum] = true;
        return true;
      } else {
        result = [requiredNumber, currentNum];
        return false;
      }
    });
    return result;
  }
}

const algo = new TwoNumbersSum();

// console.log(algo.twoNumbersSumWithConstantSpace([3, 5, -4, 8, 11, 1, -1, 6], 10));

console.log(algo.twoNumbersSumWithLognTime([3, 2, 4], 6));

// console.log(algo.twoNumbersSumWithHashMap([3, 5, -4, 8, 11, 1, -1, 6], 10));
