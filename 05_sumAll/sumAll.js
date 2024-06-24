const sumAll = function(a, b) {
  if (a < 0 || b < 0){
    return "ERROR"
  }
  else if (!Number.isInteger(a) || !Number.isInteger(b)){
    return "ERROR"
  }
  else if (a > b){
    let totalA = 0
    let resultsA = []
    for (let i = b; i <= a; i++){
      totalA += i
      resultsA.push(totalA)
    }
    return resultsA.slice(-1).pop()
  }
  else {
    let total = 0
    let results = []
    for (let i = a; i <= b; i++){
      total += i
      results.push(total)
  
    }
    return results.slice(-1).pop()
  }

};  


// Do not edit below this line
module.exports = sumAll;
