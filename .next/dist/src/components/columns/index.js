'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _line = require('./line');

var _line2 = _interopRequireDefault(_line);

var _data = require('../../../data');

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/feawel/Dev/book-mathilde-2017/src/components/columns/index.js';


var Columns = function Columns(_ref) {
  var width = _ref.width,
      opacity = _ref.opacity;
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement(_line2.default, { left: '0%', width: width, opacity: opacity, __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), _react2.default.createElement(_line2.default, { left: '20%', width: width, opacity: opacity, __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), _react2.default.createElement(_line2.default, { left: '40%', width: width, opacity: opacity, __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), _react2.default.createElement(_line2.default, { left: '60%', width: width, opacity: opacity, __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), _react2.default.createElement(_line2.default, { left: '80%', width: width, opacity: opacity, __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }));
};

exports.default = Columns;