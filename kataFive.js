

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
  let encoded = '';
  let starti = 0;
  let endi = text.length;
  
  if(text[0] === ' ') {
    starti = 1;
  }
  if(text[text.length - 1] === ' ') {
    endi = (text.length - 1);
  }
  for(let i = starti; i < endi; i++) {
    if(text[i] === ' ') {
      encoded += '%20';
    }else {
      encoded += text[i];
    }
  }
  return encoded;
}



console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
