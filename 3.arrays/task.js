function compareArrays(arr1, arr2) {
  let result = false;

  // Ваш код
  if (arr1.length !== arr2.length) {
    return result
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return result
    }
  }
  result = true
  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr = [];

  // Ваш код
  resultArr = arr.filter(a => a > 0 && a % 3 == 0).map(a => a * 10)

  return resultArr; // array
}
