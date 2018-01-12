Array.prototype.bubbleSort = function() {
  let simpleDup = this;
  let isSorted = false;

  while (!isSorted) {
    isSorted = true;

    for (let i = 0; i < simpleDup.length - 1; i++) {
      if (simpleDup[i] > simpleDup[i + 1]) {
        isSorted = false;
        [simpleDup[i], simpleDup[i+1]] = [simpleDup[i+1], simpleDup[i]];
      }
    }
  }

  return simpleDup;
};

String.prototype.substrings = function() {
  let returnArr = [];
  for (let i = 0; i < this.length; i++) {
    for (let j = i; j < this.length; j++) {
      returnArr.push(this.slice(i,j+1));
    }
  }
  return returnArr;
};

console.log("The morning".substrings());
