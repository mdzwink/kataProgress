//const whereCanIPark = function (spots, vehicle) {
//  let parkingSpot = false;
//  let parkingType1;
//  let parkingType2;
//  let parkingType3;
//  
//  switch (vehicle) {
//    case 'regular':
//      parkingType1 = 'R';
//      break;
//    case 'small':
//      parkingType1 = 'R';
//      parkingType2 = 'S';
//      break;
//    case 'motorcycle':
//      parkingType1 = 'R';
//      parkingType2 = 'S';
//      parkingType3 = 'M';
//      break;
//  }
//
//  for (let y = 0; y < spots.length; y++) {
//    for (let x = 0; x < spots.length; x++) {
//      console.log(y)
//      console.log(x)
//      if(spots[x][y] === parkingType1 || spots[x][y] === parkingType2 || spots[x][y] === parkingType3) {
//        parkingSpot = [x, y];
//        break;
//      }
//    }
//  }
//  return parkingSpot;
//};


const whereCanIPark = function (spots, vehicle) {
  for (let y = 0; y < spots.length; y++) {
    for (let x = 0; x < spots[y].length; x++) {
      let spot = spots[x][y];
      if(vehicle === 'regular' && spot === 'R') { // 3X if vihicle === '...' && spots[x][y] === '..', return [x , y]
        return [x, y];
      } else if(vehicle === 'small' && (spot === 'S' || spot === 'R')) {
        return [x, y];
      } else if(vehicle === 'motorcycle' && (spot === 'S' || spot === 'R' || spot === 'M')) {
        return [x, y];
      }
    }
  }
  return false
};

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))
