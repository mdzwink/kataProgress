
const camelCase = function(input) {
    let camelCased = '';
    for (let i = 0; i < input.length; i++) {
        if (input[i] === ' ') {
            i++;
            camelCased += input[i].toUpperCase();
        }else {
            camelCased += input[i];
        }
    }
    return camelCased;
  };
  
  console.log(camelCase("this is a string"));
  console.log(camelCase("loopy lighthouse"));
  console.log(camelCase("supercalifragalisticexpialidocious"));