const rainDrops = (num) => {
// First of all check for invalid input
  if(typeof num !== 'number') {
    return 'Invalid Input Type'
  }
/*
* Initialize an object to look up information
*/
  let outputDict = {3: "Pling", 5: "Plang", 7: "Plong"};
  let rainDropSpeak = '';
  if (num % 3 === 0){
    rainDropSpeak += outputDict[3];
  }
  if (num % 5 === 0){
    rainDropSpeak += outputDict[5];
  }
  if (num % 7 === 0) {
    rainDropSpeak += outputDict[7];
  }
  if(rainDropSpeak === ''){
    return num
  }
  return rainDropSpeak;
}

module.exports = rainDrops;