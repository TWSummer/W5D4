Array.prototype.myEach = function(callback) {
  for (let i=0; i<this.length; i++) {
    callback(this[i]);
  }
};

// const callback = function(num) {
//   console.log(num);
// };

function printNum(num) {
  console.log(num);
}

// [2,4,6].myEach(printNum);


Array.prototype.mymap = function(callback) {
  let returnArr = [];
  const helperFunction = function(num) {
    returnArr.push(callback(num));
  };

  this.myEach(helperFunction);

  return returnArr;
};


function timesTwo(num) {
  return num * 2;
}

// console.log([2, 4, 6].mymap(timesTwo));

Array.prototype.myReduce = function(callback, initialValue) {
  let acc = initialValue;
  let newArr = this.slice(0);
  if (!acc) {
    acc = this[0];
    newArr = this.slice(1);
  }
  const helperFunction = function(num) {
    acc = callback(acc, num);
  };
  newArr.myEach(helperFunction);

  return acc;
};

function addNums(acc,num) {
  return acc + num;
}

console.log([1,2,3,4].myReduce(addNums))
