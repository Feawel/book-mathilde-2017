'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _down_arrow = require('../pictos/down_arrow');

var _down_arrow2 = _interopRequireDefault(_down_arrow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/feawel/Dev/book-mathilde-2017/src/components/homeProjects/scrollDown.js';
// src/componentqs/homeProjects/scrollDown.js


var ScrollDown = function ScrollDown(_ref) {
  var onClick = _ref.onClick;
  return _react2.default.createElement('div', { onClick: onClick, className: 'jsx-1475611962' + ' ' + 'Scroll_down clickable',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement(_style2.default, {
    styleId: '1475611962',
    css: '.Scroll_down.jsx-1475611962{position:absolute;bottom:45px;left:34px;font-size:10px;font-family:Futura;font-weight:bold;z-index:10}.Scroll_down_text.jsx-1475611962{text-orientation:upright}.Scroll_down_letter.jsx-1475611962{display:block;color:white;position:relative}@media screen and (max-width:1023px){.Scroll_down.jsx-1475611962{width:100%;bottom:35px;left:6px;text-align:center}.Scroll_down_text.jsx-1475611962{display:none}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL2hvbWVQcm9qZWN0cy9zY3JvbGxEb3duLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtnQixBQUcyQixBQVNPLEFBR1osQUFNQSxBQU1FLFdBTEQsRUFNZCxDQVpZLElBWkEsS0FtQkQsRUFWYixDQUlvQixJQVpSLEVBbUJVLFFBbEJMLElBWWpCLE1BT0UsS0FsQm1CLG1CQUNGLGlCQUNOLFdBQ2IiLCJmaWxlIjoic3JjL2NvbXBvbmVudHMvaG9tZVByb2plY3RzL3Njcm9sbERvd24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2ZlYXdlbC9EZXYvYm9vay1tYXRoaWxkZS0yMDE3Iiwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL2NvbXBvbmVudHFzL2hvbWVQcm9qZWN0cy9zY3JvbGxEb3duLmpzXG5pbXBvcnQgRG93bl9hcnJvdyBmcm9tICcuLi9waWN0b3MvZG93bl9hcnJvdydcblxuY29uc3QgU2Nyb2xsRG93biA9ICh7IG9uQ2xpY2sgfSkgPT4gKFxuICA8ZGl2IG9uQ2xpY2s9e29uQ2xpY2t9IGNsYXNzTmFtZT0nU2Nyb2xsX2Rvd24gY2xpY2thYmxlJz5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuU2Nyb2xsX2Rvd24ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogNDVweDtcbiAgICAgICAgbGVmdDogMzRweDtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICBmb250LWZhbWlseTogRnV0dXJhO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgei1pbmRleDogMTA7XG4gICAgICB9XG4gICAgICAuU2Nyb2xsX2Rvd25fdGV4dCB7XG4gICAgICAgIHRleHQtb3JpZW50YXRpb246IHVwcmlnaHQ7XG4gICAgICB9XG4gICAgICAuU2Nyb2xsX2Rvd25fbGV0dGVyIHtcbiAgICAgICAgZGlzcGxheTpibG9jaztcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgICAgICAgLlNjcm9sbF9kb3duIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBib3R0b206IDM1cHg7XG4gICAgICAgICAgbGVmdDogNnB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuU2Nyb2xsX2Rvd25fdGV4dCB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICA8ZGl2IGNsYXNzTmFtZT0nU2Nyb2xsX2Rvd25fdGV4dCc+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9J1Njcm9sbF9kb3duX2xldHRlcic+Uzwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT0nU2Nyb2xsX2Rvd25fbGV0dGVyJz5DPC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPSdTY3JvbGxfZG93bl9sZXR0ZXInPlI8L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9J1Njcm9sbF9kb3duX2xldHRlcic+Tzwvc3Bhbj5cbiAgICAgIDxzcGFuIHN0eWxlPXt7bGVmdDogMn19IGNsYXNzTmFtZT0nU2Nyb2xsX2Rvd25fbGV0dGVyJz5MPC9zcGFuPlxuICAgICAgPHNwYW4gc3R5bGU9e3tsZWZ0OiAyfX0gY2xhc3NOYW1lPSdTY3JvbGxfZG93bl9sZXR0ZXInPkw8L3NwYW4+XG4gICAgPC9kaXY+XG4gICAgPERvd25fYXJyb3cgLz5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IFNjcm9sbERvd25cbiJdfQ== */\n/*@ sourceURL=src/components/homeProjects/scrollDown.js */'
  }), _react2.default.createElement('div', {
    className: 'jsx-1475611962' + ' ' + 'Scroll_down_text',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, _react2.default.createElement('span', {
    className: 'jsx-1475611962' + ' ' + 'Scroll_down_letter',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, 'S'), _react2.default.createElement('span', {
    className: 'jsx-1475611962' + ' ' + 'Scroll_down_letter',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, 'C'), _react2.default.createElement('span', {
    className: 'jsx-1475611962' + ' ' + 'Scroll_down_letter',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, 'R'), _react2.default.createElement('span', {
    className: 'jsx-1475611962' + ' ' + 'Scroll_down_letter',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, 'O'), _react2.default.createElement('span', { style: { left: 2 }, className: 'jsx-1475611962' + ' ' + 'Scroll_down_letter',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, 'L'), _react2.default.createElement('span', { style: { left: 2 }, className: 'jsx-1475611962' + ' ' + 'Scroll_down_letter',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, 'L')), _react2.default.createElement(_down_arrow2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }));
};

exports.default = ScrollDown;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL2hvbWVQcm9qZWN0cy9zY3JvbGxEb3duLmpzIl0sIm5hbWVzIjpbIkRvd25fYXJyb3ciLCJTY3JvbGxEb3duIiwib25DbGljayIsImxlZnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsQUFBTyxBQUFnQjs7Ozs7OztBQUR2Qjs7O0FBR0EsSUFBTSxhQUFhLFNBQWIsQUFBYSxpQkFBQTtNQUFBLEFBQUcsZUFBSCxBQUFHO3lCQUNwQixjQUFBLFNBQUssU0FBTCxBQUFjLDZDQUFkLEFBQWlDOztnQkFBakM7a0JBQUE7QUFBQTtHQUFBO2FBQUE7U0FBQSxBQStCRTtBQS9CRixzQkErQkUsY0FBQTt3Q0FBQSxBQUFlOztnQkFBZjtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRSxjQUFBO3dDQUFBLEFBQWdCOztnQkFBaEI7a0JBQUE7QUFBQTtBQUFBLEtBREYsQUFDRSxBQUNBLHNCQUFBLGNBQUE7d0NBQUEsQUFBZ0I7O2dCQUFoQjtrQkFBQTtBQUFBO0FBQUEsS0FGRixBQUVFLEFBQ0Esc0JBQUEsY0FBQTt3Q0FBQSxBQUFnQjs7Z0JBQWhCO2tCQUFBO0FBQUE7QUFBQSxLQUhGLEFBR0UsQUFDQSxzQkFBQSxjQUFBO3dDQUFBLEFBQWdCOztnQkFBaEI7a0JBQUE7QUFBQTtBQUFBLEtBSkYsQUFJRSxBQUNBLHNCQUFBLGNBQUEsVUFBTSxPQUFPLEVBQUMsTUFBZCxBQUFhLEFBQU8seUNBQXBCLEFBQWtDOztnQkFBbEM7a0JBQUE7QUFBQTtLQUxGLEFBS0UsQUFDQSxzQkFBQSxjQUFBLFVBQU0sT0FBTyxFQUFDLE1BQWQsQUFBYSxBQUFPLHlDQUFwQixBQUFrQzs7Z0JBQWxDO2tCQUFBO0FBQUE7S0FyQ0osQUErQkUsQUFNRSxBQUVGLHVCQUFBLEFBQUM7O2dCQUFEO2tCQXhDZSxBQUNqQixBQXVDRTtBQUFBO0FBQUE7QUF4Q0osQUE0Q0E7O2tCQUFBLEFBQWUiLCJmaWxlIjoic2Nyb2xsRG93bi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZmVhd2VsL0Rldi9ib29rLW1hdGhpbGRlLTIwMTcifQ==