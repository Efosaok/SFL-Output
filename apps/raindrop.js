const rainDrops = (number) => {
  let outputDict = {3: "Pling", 5: "Plang", 7: "Plong"};
  let rainDropSpeak = '';
  if (number % 3 === 0){
    rainDropSpeak += outputDict[3];
  }
  if (number % 5 === 0){
    rainDropSpeak += outputDict[5];
  }
  if (number % 7 === 0) {
    rainDropSpeak += outputDict[7];
  }
  if(rainDropSpeak === ''){
    return number
  }
  return rainDropSpeak;
}

module.exports = rainDrops;