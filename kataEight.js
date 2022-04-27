



const repeatNumbers = function(data) {
    let giveBack = '';
    for (let i = 0; i < data.length; i++) {// itirate through provided arrays
        if(i > 0) { // if past first array then insert ', ' before next entry
            giveBack += ', ';
        }
        for (let j = data[i][1]; j > 0; j--) { // this adds the repeat number to 'giveBack' for the number of repatitions stored in the second array value
            giveBack += data[i][0];
        }
    }
    return giveBack;
};



  console.log(repeatNumbers(
      [[1, 10]]));
  console.log(repeatNumbers(
      [[1, 2], [2, 3]]));
  console.log(repeatNumbers(
      [[10, 4], [34, 6], [92, 2]]));