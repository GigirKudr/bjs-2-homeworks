function getArrayParams(...arr) {
  let min = arr[0]
  let max = 0
  let avg = 0
  if (arr.length === 0){
    return 0
  }
  else {
    for (let i = 0; i < arr.length; i++){
      if (arr[i] < min){
        min = arr[i]
      }
      else if (arr[i] > max){
        max = arr[i]
      }
      avg += Number((arr[i]/arr.length).toFixed(2))
    }
    return { min: min, max: max, avg: avg }
  }
}


function summElementsWorker(...arr) {
  let summ = 0
  if (arr.length === 0){
    return 0
  }
  else {
    for (let i =0; i < arr.length; i++){
      summ += arr[i]
    }
    return summ
  }
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0){
    return 0
  }
  else {
    let different = Math.max.apply(0, arr)-Math.min.apply(0, arr)
  return different
  }
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0
  let sumOddElement = 0
  if (arr.length === 0){
    return 0
  }
  else{
    for (let i = 0; i < arr.length; i++){
      if (arr[i]%2 === 0){
        sumEvenElement += arr[i]
      }
      else{
        sumOddElement += arr[i]
      }
    }
    return sumEvenElement-sumOddElement
  }
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0
  let countEvenElement = 0
  if (arr.length === 0){
    return 0
  }
  else{
    for (let i = 0; i < arr.length; i++){
      if (arr[i]%2 === 0){
        sumEvenElement += arr[i]
        countEvenElement += 1
      }
    } 
    return sumEvenElement/countEvenElement
  }
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = arrOfArr[0][0]
  for (let i = 0; i < arrOfArr.length; i++){
      let result = func(...arrOfArr[i])
      if (result > maxWorkerResult){
          maxWorkerResult = result
      }
    }
    return maxWorkerResult
}
