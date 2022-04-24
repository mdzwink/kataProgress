const numberOfVowels = function(data) {
  let vowelCount = 0;
  for (let bit of data) {
    if (bit === 'a' || bit === 'e' || bit === 'i' || bit === 'o' || bit === 'u') {
      vowelCount++
    };
  }
  return vowelCount;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
