function numberPyramid(num) {
  let line = '';

  for (let i = 1; i <= num; i++) {
    console.log(line += i);
  }
}

numberPyramid(5);
numberPyramid(8);