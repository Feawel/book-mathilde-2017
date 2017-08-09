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

var _jsxFileName = '/Users/feawel/Dev/book-mathilde-2017/src/components/homeProjects/menu/index.js';
// src/componentqs/about/index.js


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
        }, className: 'Menu_radius clickable', 'data-jsx': 1362771990,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, _react2.default.createElement(_style2.default, {
        styleId: 1362771990,
        css: '.Menu_radius[data-jsx="1362771990"]{position:absolute;top:40px;right:30px;border-radius:50%;width:40px;height:40px;border:1px solid white;z-index:10}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL2hvbWVQcm9qZWN0cy9tZW51L2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWVrQixBQUc2QixrQkFDVCxTQUNFLFdBQ08sa0JBQ1AsV0FDQyxZQUNXLHVCQUNaLFdBQ2IiLCJmaWxlIjoic3JjL2NvbXBvbmVudHMvaG9tZVByb2plY3RzL21lbnUvaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2ZlYXdlbC9EZXYvYm9vay1tYXRoaWxkZS0yMDE3Iiwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL2NvbXBvbmVudHFzL2Fib3V0L2luZGV4LmpzXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgU1ZHTWVudUljb24gZnJvbSAnLi4vLi4vcGljdG9zL21lbnUnXG5pbXBvcnQgU1ZHQ2xvc2VJY29uIGZyb20gJy4uLy4uL3BpY3Rvcy9jbG9zZSdcblxuY2xhc3MgTWVudSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBvcGVuOiBmYWxzZVxuICAgIH1cbiAgfVxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHvCoG9wZW4gfSA9IHRoaXMuc3RhdGVcbiAgICByZXR1cm4gPGRpdiBvbkNsaWNrPXsoKSA9PiB0aGlzLnRvZ2dsZU1lbnUoKX0gY2xhc3NOYW1lPSdNZW51X3JhZGl1cyBjbGlja2FibGUnPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuTWVudV9yYWRpdXMge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDQwcHg7XG4gICAgICAgICAgcmlnaHQ6IDMwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgICB7wqBvcGVuID8gPFNWR0Nsb3NlSWNvbiBrZXk9J29wZW4nIC8+IDogPFNWR01lbnVJY29uIGtleT0nY2xvc2UnIC8+IH1cbiAgICA8L2Rpdj5cbiAgfVxuICB0b2dnbGVNZW51KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuOiAhdGhpcy5zdGF0ZS5vcGVuIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnVcbiJdfQ== */\n/*@ sourceURL=src/components/homeProjects/menu/index.js */'
      }), open ? _react2.default.createElement(_close2.default, { key: 'open', __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }) : _react2.default.createElement(_menu2.default, { key: 'close', __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }));
    }
  }, {
    key: 'toggleMenu',
    value: function toggleMenu() {
      this.setState({ open: !this.state.open });
    }
  }]);

  return Menu;
}(_react2.default.Component);

exports.default = Menu;