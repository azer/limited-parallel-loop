module.exports = parallel;

function parallel (n, limit, each, done) {
  var counter = 0;
  var running = 0;
  var stopped;
  var i = -1;

  cont();

  function call (i) {
    var unlock = true;

    each(function () {
      if (!unlock) return;
      unlock = undefined;

      if (++counter == n) {
        done();
        return;
      }

      if (stopped && --running < limit) cont();
    }, i);
  }

  function cont () {
    stopped = false;

    while (++i < n) {
      running++;

      if (running == limit) {
        stopped = true;
        call(i);
        break;
      }

      call(i);
    }
  }

}
