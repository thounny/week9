function testMe(a, b) {
  return a + b;
}

// console.log(testMe(1, 2)); // expected output: 3
testData = [
  { inputs: [6, 7], output: 13 },
  { inputs: [12, 14], output: 25 },
  { inputs: [12, 13], output: 24 },
];

function runner(fn, ioList) {
  ioList.forEach((test, i) => {
    result = fn(...test.inputs); //... spread ,
    success = result === test.output; // match expected output
    if (success) {
      console.log("PASS", i);
    } else {
      console.log("FAIL", i);
    }
  });
}

runner(testMe, testData);
