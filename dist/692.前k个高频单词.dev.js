"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
function Heap() {
  var _this = this;

  var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var isLess = arguments.length > 1 ? arguments[1] : undefined;
  this.data = [];

  this.comprator = function (a, b) {
    if (isLess) {
      return a - b > 0;
    } else {
      return b - a > 0;
    }
  };

  arr.map(function (item) {
    return _this.push(item);
  });
}

Heap.prototype.top = function () {
  return this.data[0];
};

Heap.prototype.size = function () {
  return this.data.length;
};

Heap.prototype.push = function (val) {
  this.data[this.size()] = val;
  var data = this.data,
      cIndex = this.size() - 1;

  while (cIndex > 0) {
    var pIndex = parseInt((cIndex - 1) / 2);

    if (this.comprator(data[pIndex], val)) {
      this.swap(cIndex, pIndex);
      cIndex = pIndex;
    } else {
      break;
    }
  }
};

Heap.prototype.pop = function () {
  var ret = this.data[0];
  if (ret === undefined) return null;
  this.data[0] = this.data[this.size() - 1];
  this.data.splice(this.size() - 1, 1);
  var cIndex = 0,
      data = this.data;

  while (cIndex * 2 + 1 <= this.size()) {
    var findIndex = cIndex,
        lIndex = cIndex * 2 + 1,
        rIndex = cIndex * 2 + 2;
    if (lIndex < this.size() && this.comprator(data[findIndex], data[lIndex])) findIndex = lIndex;
    if (rIndex < this.size() && this.comprator(data[findIndex], data[rIndex])) findIndex = rIndex;
    if (findIndex === cIndex) break;
    this.swap(findIndex, cIndex);
    cIndex = findIndex;
  }

  return ret;
};

Heap.prototype.swap = function (index1, index2) {
  var temp = this.data[index1];
  this.data[index1] = this.data[index2];
  this.data[index2] = temp;
};

var topKFrequent = function topKFrequent(words, k) {
  var freq = new Map();
  words.forEach(function (word) {
    freq.has(word) ? freq.set(word, freq.get(word) + 1) : freq.set(word, 1);
  });
  var heap = new Heap([]);

  heap.comprator = function (a, b) {
    if (freq.get(a) - freq.get(b)) {
      return freq.get(a) > freq.get(b);
    }

    return a < b;
  };

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = freq[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _step$value = _slicedToArray(_step.value, 1),
          key = _step$value[0];

      heap.push(key);
      if (heap.size() > k) heap.pop();
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  console.log(heap);
  heap.data.sort(function (a, b) {
    if (freq.get(b) - freq.get(a)) return freq.get(b) - freq.get(a);
    return a > b ? 1 : -1;
  });
  console.log(heap.data);
  return heap.data;
};

var words = ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"];
word2 = ["i", "love", "leetcode", "i", "love", "coding"];
word3 = ['a', 'aa', 'aaa'];
topKFrequent(word2, 2);