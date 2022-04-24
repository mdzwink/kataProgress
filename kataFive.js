

//const urlEncode = function(text) {
//  let encoded = ''
//  for(let charactor of text) {
//    if(charactor === ' ') {
//      encoded += '%20';
//    }else {
//      encoded += charactor;
//    }
//  }
//  return encoded;
//};
//now exclude '%20' if present at beggining and/or end

const urlEncode = function(text) {
  let encoded = ''
  let currenttext = text;
  //console.log(currenttext[0])
  console.log((currenttext.length))
  if (currenttext[0] = ' '){console.log('start: there be a space where it don\'t belong')}
  if (currenttext[(currenttext.length)] = ' '){console.log('end: there be a space where it don\'t belong')}
  if(currenttext[0] === ' ' && currenttext[(currenttext.length)] === ' ') {
    currenttext[0] = '';
    currenttext[(currenttext.length)] = '';
  }else if (currenttext[0] === ' ') {
    currenttext[0] = '';
  }else if(currenttext[(currenttext.length)]) {
    currenttext[(currenttext.length)] = '';
    console.log((currenttext.length))
  }
  for(let charactor of currenttext) {
    if(charactor === ' ') {
      encoded += '%20';
    }else {
      encoded += charactor;
    }
  }
  return encoded;
};


//
//const urlEncode = function(text) {
//  let cleanedText = '';
//  let encoded = ''
//  for (let charactor in text) {
//    if(text[0] === ' ') {
//      text[0] = '';
//    }else {
//      
//    }
//  }
//  for(let charactor of text) {
//    if(charactor === ' ') {
//      encoded += '%20';
//    }else {
//      encoded += charactor;
//    }
//  }
//  return encoded;
//};





console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
