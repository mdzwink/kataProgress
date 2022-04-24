

//const instructorWithLongestName = function(instructors) {
//  let longestName = [];
//  let leadingCompetitorCount = 0;
//  for (let instructor in instructors) {
//    let competitorLetterCount = 0;
//    console.log(competitorLetterCount);
//    let competitor = instructors[instructor];
//    //console.log(competitor);
//    let competitorName = competitor;
//    //console.log(competitorName)
//    for (let letter in competitor.name) {
//      console.log(competitor[letter]);
//      competitorLetterCount++;
//    }
//    if (competitorLetterCount > leadingCompetitorCount) {
//      longestName = competitor;
//    }
//  }
//  return longestName;
//};

                              //!reset to instructors
//const instructorWithLongestName = function(arrays) {
//  let longestName;                                      //let to hold object with longest name
//  let secondLongestName;                                //let to hold second longest name
//  for (let object in arrays) {
//    let competitorLetterCount = 0;
//    let nameForCount = object.name;
//    console.log(nameForCount);
//    //for (let letter in)
//  } 
//  
//  //for loop to go through arrays
//  //-stores count and name
//  //-to be replaced only if next count is higher
//  //nested for loop to access and count letters in name
//  //..property of each object
//  //
//  return longestName
//};

//
//let instructorWithLongestName = function (instructors) {
//  let longestName;
//  let longestNameLetterCount = 0;
//  for (let instructor in instructors) {//itirates through objects in given array
//    const contender = instructors[instructor];
//    let letterCounter = 0;
//    let name = instructors[instructor].name;
//    for (let letters in name) {//letter counter
//      letterCounter++;
//    }
//    if (letterCounter > longestNameLetterCount) {//compares the length of incoming names
//      longestName = contender;//if new name is longer then sets 'longestName' to current 'contender' object
//      longestNameLetterCount = letterCounter;//if new name is longer then sets 'longestNameLetterCount' to current 'contender' letter count
//    }
//  }
//  return longestName;
//}
//
// Can I use .length to simplify this code??-->YES! is the answer<-----------

const instructorWithLongestName = function (instructors) {
  let longestName;
  let longestNameLetterCount = 0;
  for (let instructor in instructors) {//itirates through objects in given array
    const contender = instructors[instructor];
    let name = instructors[instructor].name;
    if (name.length > longestNameLetterCount) {//if I want the last longest name to be returned instead then I change the conditional opperator to '>='
      longestName = contender;
      longestNameLetterCount = name.length;
    }
  }
  return longestName;
}

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));


//MAYBE RE-WRITE THIS FOR FLUENCY??<-----------------