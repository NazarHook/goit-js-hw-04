'use strict';
function isEnoughCapacity(products, containerSize) {
  const total = Object.values(products);
  let result = 0;
  for (let i = 0; i < total.length; i++) {
    result += total[i];
  }
  if (result <= containerSize) {
    return true;
  } else {
    return false;
  }
}
console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8));
console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12));
console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14));
console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7));
