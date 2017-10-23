const rainDrops = (num) => {
  if(typeof num !== 'number') {
    return 'Invalid Input Type'
  }
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