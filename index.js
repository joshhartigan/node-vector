var validTypes = ['number', 'string', 'boolean', 'function', 'object'];

function Vector(type, elements) {

  elements = elements || [];

  if ( validTypes.indexOf(type) < 0 ) {
    throw new Error('incorrect type argument to Vector: ' + type);
  }

  for (var i = 0; i < elements.length; i++) {
    if ( typeof elements[i] !== type ) {
      throw new Error( 'element does not match Vector type: ' + elements[i] );
    }
  }

  var checkType = function(value) {
    if ( typeof value !== type ) {
      throw new Error( 'value does not match Vector type: ' + value );
    }
  }

  /**
   * In C++, elements would be retrieved from the
   * vector through square bracket [] notation, but
   * JavaScript will not support this (since the vector
   * 'type' for us is really just a function). Thus,
   * this function is created:
   */
  var elementFromPos= function(pos) {
    return elements[pos];
  }
  this.get = elementFromPos;
  this.at = elementFromPos;

  this.empty = function() {
    return elements.length === 0;
  }

  this.size = function() {
    return elements.length;
  }

  this.clear = function() {
    elements = [];
  }

  this.insert = function(pos, value) {
    checkType(value);
    elements.splice(pos, 0, value);
  }

  this.erase = function(pos) {
    elements.splice(pos, 1);
  }

  this.push_back = function(value) {
    checkType(value);
    elements.push(value);
  }

  this.pop_back = function() {
    elements.splice(elements.length - 1, 1);
  }

}

module.exports = Vector;

