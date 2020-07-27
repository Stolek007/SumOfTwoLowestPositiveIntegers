function sumTwoSmallestNumbers(numbers) {  
  let res = numbers.sort(function(a,b){return a-b;}); // Sorting from smallest to largest
  let result = 0;
  
  for(let i = 0; i < res.length; i++) {
    if(i == 0) {
      result += res[0]; // first smallest num
    }
    if(i == 1) {
      result += res[1]; // second smallest num
    }
  }
  return result;
}
