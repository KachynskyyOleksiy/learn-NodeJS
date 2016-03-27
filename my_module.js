// public method
var foo = function() {
  console.log('foo');
};

// public method
var bar = function() {
  console.log('bar');
};

// private method
var baz = function() {
  console.log('baz');
};
 
exports.foo = foo;
exports.bar = bar;