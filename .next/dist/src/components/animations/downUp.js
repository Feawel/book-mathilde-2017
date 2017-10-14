'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DownUp = function DownUp(_ref) {
  var children = _ref.children,
      _ref$top = _ref.top,
      top = _ref$top === undefined ? 0 : _ref$top;
  return _react2.default.createElement('div', {
    className: 'jsx-2547319586' + ' ' + 'Down_up_wrapper'
  }, _react2.default.createElement(_style2.default, {
    styleId: '2547319586',
    css: ['.Down_up_wrapper.jsx-2547319586{width:100%;height:100%;overflow:hidden;}', '.Down_up.jsx-2547319586{position:relative;-webkit-transition :all 1s;-moz-transition :all 1s;-ms-transition :all 1s;-o-transition :all 1s;-webkit-transition :all 1s;transition :all 1s;}']
  }), _react2.default.createElement('div', { style: { top: top }, className: 'jsx-2547319586' + ' ' + 'Down_up transitions'
  }, children));
};

exports.default = DownUp;