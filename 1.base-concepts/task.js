"use strict"
function solveEquation(a, b, c) {
  let arr = []
  let d =  (b**2)-(4*a*c)
  if (d < 0){
    arr = []
  }
  else if (d === 0){
     arr.push(-b/(2*a))
  }
  else{
    arr.push((-b + Math.sqrt(d) )/(2*a))
    arr.push((-b - Math.sqrt(d) )/(2*a))
  }
  
  return arr
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let p = (percent/100)*(1/12)
  let body = amount - contribution
  let monthPayment = body * (p+(p/(((1+p)**countMonths)-1)))
  let allPrice = monthPayment*countMonths
  return Number(allPrice.toFixed(2))
}