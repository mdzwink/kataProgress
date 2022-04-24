const sumLargestNumbers = function(data) {
  let largest = 0;
  let secondLargest = 0;
  for (let number in data) {
    let check = data[number];
    //console.log(largest, secondLargest)
    if (check > largest) {//compares each number in array with value of 'largest', then replaces it with any larger number
      largest = check;
    };
  }
  for (let number in data) {
    let check = data[number];
    if (check > secondLargest && check !== largest) {//does the same comparison as above but skips the already determened largest number
      secondLargest = check;
    };
  }
  return (largest + secondLargest);//adds the 'largest' and 'secondLargest' values and returns the sum.
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
