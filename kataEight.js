



const repeatNumbers = function(data) {
    let giveBack;
    for (let bit in data) {
        giveBack += (data[bit][0]) * (data[bit][1]);
    }
    return giveBack;
};
  




  console.log(repeatNumbers([[1, 10]]));
  console.log(repeatNumbers([[1, 2], [2, 3]]));
  console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));