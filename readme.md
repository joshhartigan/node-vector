# node-vector

[![NPM](https://nodei.co/npm/node-vector.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/node-vector/)

An implementation of the C++ `<vector>` type in JavaScript.

### usage

#### `var Vector = require('node-vector');`
#### `var myVector = new Vector('number', [5, 6, 2, 6]);`

`myVector` can now have most of the usual vector methods from C++ applied to it.

#### example method usage

`myVector.empty() // boolean - is vector empty?`
`myVector.size() // number - length of vector`
`myVector.clear() // void - empty the vector`

Obviously these are not all of the methods available. The full list can be seen
in `index.js`, with explanations on [cppreference](http://en.cppreference.com/w/cpp/container/vector)

### notes

* i plan to write a test suite for this project.
* as mentioned previously, **not all vector methods are/can be implemented
  yet**.


