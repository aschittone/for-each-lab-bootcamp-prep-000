function iterativeLog(array) {
  array.forEach((ele, index, ary) => {
    console.log(index + ": " + ele);
  })
}

function iterate(cb) {
  var ary = ['red', 'blue', 'green'];
  ary.forEach(cb);
  return ary;
}

function doToArray(array, cb) {
  array.forEach(cb);
}
