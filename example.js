var loop = require("./");

loop(process.argv[2], process.argv[3], each, function () {
  console.log('end');
});

function each (done, i) {
  setTimeout(function () {
    console.log(i);
    done();
  }, 250 - (i * 10));
}
