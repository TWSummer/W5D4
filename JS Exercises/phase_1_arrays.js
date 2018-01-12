Array.prototype.myuniq = function() {
  let returnArr = [];
  for (let i=0; i<this.length; i++) {
    if (!returnArr.includes(this[i])) {
      returnArr.push(this[i]);
    }
  }
  return returnArr;
};

// const myuniq = (arr) => {
//   let returnArr = [];
//   for (let i=0; i<arr.length; i++) {
//     if (!returnArr.includes(arr[i])) {
//       returnArr.push(arr[i]);
//     }
//   }
//   return returnArr;
// };

// console.log(myuniq([1,1,1,3,3,5,1]));
// console.log([3,3,7,7,2,1,2,6].myuniq());


Array.prototype.twoSum = function() {
  let returnArr = [];
  for (let i = 0; i < this.length - 1; i++) {
    for (let j = i+1; j < this.length; j++) {
      if (this[i] === -this[j]) {
        returnArr.push([i, j]);
      }
    }
  }

  return returnArr;
};

Array.prototype.transpose = function() {
  let returnArr = [];
  for (let i = 0; i < this.length; i++) {
    const row = [];
    for (let j = 0; j < this[i].length; j++) {
      row.push(this[j][i]);
    }
    returnArr.push(row);
  }

  return returnArr;
};
