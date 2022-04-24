
const conditionalSum = function(values, condition) {
  let sum = 0;
  for (let value in values) {
    let arrayValue = values[value];
    let valueIs;
    if (arrayValue % 2 === 0) {
       valueIs = "even"
    }else {
      valueIs = "odd"
    }
    if (valueIs === condition) {
      sum += arrayValue;
    }
  }
  return sum;
};

//This is me trying to overcomplicate things (but also curious if
//..I can make the function work no matter what data type the condition is)
//const conditionalSum = function(values, condition) {
//  let sum = 0;
//  for (let value in values) {
//      let arrayValue = values[value];
//      let comparisonValue;
//      if(condition === 'even' || condition === 'odd') {
//        if(arrayValue % 2 === 0) {
//          //console.log('is even')
//          comparisonValue = 'even';
//        }else if(arrayValue % 2 !== 0) {
//          comparisonValue = 'odd';
//          //console.log('is odd')
//        }else {
//          comparisonValue = arrayValue
//        }
//      }
//      if(comparisonValue === condition) {
//        sum += arrayValue;
//      }
//  }
//  return sum;
//}

console.log(conditionalSum([1, 3, 5, 7, 9], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
