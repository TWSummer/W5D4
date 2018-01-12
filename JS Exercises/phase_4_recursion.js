// Remember the base case

function range(start, end) {
  if (start === end) {
    return [end];
  }
  return [start].concat(range(start + 1, end));
}

// console.log(range(1, 4));


function sumRec(arr) {
  if (arr.lenth === 0) {
    return 0;
  } else if (arr.length === 1) {
    return arr[0];
  } else {
    return arr[0] + sumRec(arr.slice(1));
  }
}

// console.log(sumRec([1, 2, 3, 4, 5]));

function exponent(base, exp) {
  if (exp === 0) {
    return 1;
  } else if (exp < 0) {
    return 1.0/exponent(base, -exp);
  } else {
    return base * exponent(base, exp - 1);
  }
}

// console.log(exponent(2,-3));

function exponent2(base, exp) {
  if (exp === 0) {
    return 1;
  } else if (exp === 1) {
    return base;
  } else if (exp < 0) {
    return 1.0/exponent2(base, -exp);
  } else if (exp % 2 === 0) {
    return exponent2(base, exp/2) ** 2;
  } else {
    return base * (exponent2(base, (exp-1)/2) ** 2);
  }
}

// console.log(exponent2(3,6));


function fibonacci(n) {
  if (n <= 2) {
    return [0, 1].slice(0, n);
  } else {
    let fibs = fibonacci(n - 1);
    fibs.push(fibs[fibs.length - 1] + fibs[fibs.length -2]);
    return fibs;
  }
}

// console.log(fibonacci(5));


function deepDup(arr) {
  if (!(arr instanceof Array)) {
    return arr;
  } else {
    let dupArray = [];
    for (let i=0; i<arr.length; i++) {
      dupArray.push(deepDup(arr[i]));
    }
    return dupArray;
  }
}

// let someArray = [1, [1, 2, [3, 4]], [5]];
// let dupedArray = deepDup(someArray);
// someArray.push(4);
// console.log(someArray);
// console.log(dupedArray);

// console.log(deepDup([1, [1, 2, 3]]));

function bSearch(arr, target) {
  if (arr.length === 1) {
    if (arr[0] === target) {
      return target;
    } else {
      return null;
    }
  } else if (arr.length === 0) {
    return null;
  } else {
    let midpoint = Math.floor(arr.length / 2);
    if (arr[midpoint] === target) {
      return target;
    } else if (arr[midpoint] < target) {
      return bSearch(arr.slice(midpoint + 1, arr.length), target);
    } else {
      return bSearch(arr.slice(0, midpoint - 1), target);
    }
  }

}

console.log(bSearch([0,2,3,6,8,9,12], 12));
