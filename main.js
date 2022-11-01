function twoSmallest(array){
if(array.length < 2){
  return "undefined";
}

let smallest = array[0];
let secondSmallest = array[1];
for(let i = 0; i < array.length; i++){
  if(array[i] < smallest){
    secondSmallest = smallest;
    smallest = array[i];
  }else if(i >= 1 && array[i] < secondSmallest){
    secondSmallest = array[i];
  }
}
return [smallest,secondSmallest]
}
//NPM RUN TEST WAS NOT WORKING FOR ME, TESTED WITH FOLLOWING ARRAY INPUTS
//tested with positive numbers only
console.log(twoSmallest([4,2,9,8,3,6,0]));//logs [0, 2]
//tested with positive AND negative numbers
console.log(twoSmallest([10,-10,46,42,-1]));//logs [-10, -1]
//tested with repeated number as smallest/secondSmallest
console.log(twoSmallest([0,0,1,2,3,4]));//logs [0, 0]
//tested with decimals and whole numbers
console.log(twoSmallest([14,90,.2,.3,1,2]));//logs [0.2, 0.3]
//tested for undefined (array.length < 2)
console.log(twoSmallest([6]));//logs undefined


//NOT SURE WHAT THIS IS, WAS IN EXISTING MAIN.JS FILE
 if (typeof twoSmallest === 'undefined') {
    twoSmallest = undefined
  }


 module.exports = {
    twoSmallest,
  }
