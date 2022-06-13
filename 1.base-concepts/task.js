function solveEquation(a, b, c) {
  let arr = [];
  // код для задачи №1 писать здесь
  let d = b * b - 4 * a * c;
  if (d < 0) {
    return arr

  } else if (d == 0) {
    let x1 = b * (-1) / (2 * a)
    arr.push(x1);

  } else {
    var x1 = (b * (-1) + Math.sqrt(d)) / (2 * a)
    var x2 = (b * (-1) - Math.sqrt(d)) / (2 * a)
    arr.push(x1);
    arr.push(x2);
  }
  return arr; // array
}
