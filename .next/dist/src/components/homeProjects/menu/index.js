'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _menu = require('../../pictos/menu');

var _menu2 = _interopRequireDefault(_menu);

var _close = require('../../pictos/close');

var _close2 = _interopRequireDefault(_close);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Menu = function (_React$Component) {
  (0, _inherits3.default)(Menu, _React$Component);

  function Menu(props) {
    (0, _classCallCheck3.default)(this, Menu);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Menu.__proto__ || (0, _getPrototypeOf2.default)(Menu)).call(this, props));

    _this.state = {
      open: false
    };
    return _this;
  }

  (0, _createClass3.default)(Menu, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var open = this.state.open;

      return _react2.default.createElement('div', { onClick: function onClick() {
          return _this2.toggleMenu();
        }, className: 'jsx-2070656226' + ' ' + 'Menu_radius clickable'
      }, _react2.default.createElement(_style2.default, {
        styleId: '2070656226',
        css: ['.Menu_radius.jsx-2070656226{position:absolute;top:40px;right:30px;border-radius:50%;width:40px;height:40px;border:1px solid white;z-index:10;}']
      }), open ? _react2.default.createElement(_close2.default, { key: 'open' }) : _react2.default.createElement(_menu2.default, { key: 'close' }));
    }
  }, {
    key: 'toggleMenu',
    value: function toggleMenu() {
      this.setState({ open: !this.state.open });
    }
  }]);

  return Menu;
}(_react2.default.Component);
// src/componentqs/about/index.js
exports.default = Menu;