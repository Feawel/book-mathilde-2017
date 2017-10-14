'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _background = require('../homeProjects/background');

var _background2 = _interopRequireDefault(_background);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BackgroundMask = function BackgroundMask(_ref) {
  var hide = _ref.hide,
      picture1 = _ref.picture1,
      picture2 = _ref.picture2,
      width = _ref.width;
  return _react2.default.createElement('div', {
    className: 'jsx-247033640' + ' ' + 'Down_up_wrapper'
  }, _react2.default.createElement(_style2.default, {
    styleId: '247033640',
    css: []
  }), _react2.default.createElement(_background2.default, (0, _extends3.default)({ width: '100%' }, picture1, { zIndex: 1 })), _react2.default.createElement(_background2.default, (0, _extends3.default)({ width: typeof width === 'string' ? width.split('%')[0] * 2 + '%' : width }, picture2, { zIndex: 2 })));
};

exports.default = BackgroundMask;