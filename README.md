## limited-parallel-loop

Limited parallel async loop. See also: [parallel-loop](http://github.com/azer/parallel-loop), [serial-loop](http://github.com/azer/serial-loop)

```js
var loop = require('limited-parallel-loop')

// loop(length, limit, each fn, end fn)
loop(10, 3, each, function () {
  console.log('end')
});

function each (done, i) {
  setTimeout(function () {
    console.log(i);
    done();
  }, 250 - (i * 10));
}
```

Would output:

```
2
1
0
5
4
3
7
8
6
9
end
```

## Install

```bash
$ npm install limited-parallel-loop
```
