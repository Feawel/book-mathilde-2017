'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _homeProjects = require('../src/components/homeProjects');

var _homeProjects2 = _interopRequireDefault(_homeProjects);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/feawel/Dev/book-mathilde-2017/pages/index.js?entry';

exports.default = function () {
  return _react2.default.createElement('div', {
    className: 'jsx-1382119984',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement('title', {
    className: 'jsx-1382119984',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, 'Book \uD83E\uDD14'), _react2.default.createElement('meta', { charSet: 'utf-8', className: 'jsx-1382119984',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', className: 'jsx-1382119984',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Playfair+Display:700i,900', rel: 'stylesheet', className: 'jsx-1382119984',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  })), _react2.default.createElement(_style2.default, {
    styleId: '1382119984',
    css: 'html,body{width:100%;height:100%;margin:0;padding:0}.clickable:hover{cursor:pointer}.transitions{-webkit-transition:all .5s;-moz-transition:all .5s;-ms-transition:all .5s;-o-transition:all .5s;-webkit-transition:all .5s;transition:all .5s}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVd1QixBQUdvQixBQU1JLEFBR2lCLFdBUnBCLElBTWQsUUFMVyxLQVFxQixJQVBwQixVQUNaLFdBTytCLHdCQUNBLHVCQUNGLGdEQUM3QiIsImZpbGUiOiJwYWdlcy9pbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZmVhd2VsL0Rldi9ib29rLW1hdGhpbGRlLTIwMTciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgSG9tZVByb2plY3QgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvaG9tZVByb2plY3RzJ1xuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8ZGl2PlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPkJvb2sg8J+klDwvdGl0bGU+XG4gICAgICA8bWV0YSBjaGFyU2V0PSd1dGYtOCcgLz5cbiAgICAgIDxtZXRhIG5hbWU9J3ZpZXdwb3J0JyBjb250ZW50PSdpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoJyAvPlxuICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1QbGF5ZmFpcitEaXNwbGF5OjcwMGksOTAwXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG4gICAgPC9IZWFkPlxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICBodG1sLCBib2R5IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgfVxuICAgICAgLmNsaWNrYWJsZTpob3ZlciB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cbiAgICAgIC50cmFuc2l0aW9ucyB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvblx0XHRcdDogYWxsIC41cyAgO1xuICAgICAgICAtbW96LXRyYW5zaXRpb25cdFx0XHRcdDogYWxsIC41cyAgO1xuICAgICAgICAtbXMtdHJhbnNpdGlvblx0XHRcdFx0OiBhbGwgLjVzICA7XG4gICAgICAgIC1vLXRyYW5zaXRpb24gXHRcdFx0XHQ6IGFsbCAuNXMgIDtcbiAgICAgICAgdHJhbnNpdGlvbiBcdFx0XHRcdFx0OiBhbGwgLjVzICA7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIDxIb21lUHJvamVjdCAvPlxuICA8L2Rpdj5cbilcbiJdfQ== */\n/*@ sourceURL=pages/index.js?entry */'
  }), _react2.default.createElement(_homeProjects2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkhlYWQiLCJMaW5rIiwiSG9tZVByb2plY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPLEFBQWlCLEFBQ3hCOzs7Ozs7OztrQkFBZSxZQUFBO3lCQUNiLGNBQUE7ZUFBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxrQkFDRSxBQUFDOztnQkFBRDtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRSxjQUFBO2VBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQURGLEFBQ0UsQUFDQSw4REFBTSxTQUFOLEFBQWMsb0JBQWQ7O2dCQUFBO2tCQUZGLEFBRUUsQUFDQTtBQURBOzhDQUNNLE1BQU4sQUFBVyxZQUFXLFNBQXRCLEFBQThCLG9EQUE5Qjs7Z0JBQUE7a0JBSEYsQUFHRSxBQUNBO0FBREE7OENBQ00sTUFBTixBQUFXLHFFQUFvRSxLQUEvRSxBQUFtRix5QkFBbkY7O2dCQUFBO2tCQUxKLEFBQ0UsQUFJRTtBQUFBOzthQUxKO1NBQUEsQUF5QkU7QUF6QkYsc0JBeUJFLEFBQUM7O2dCQUFEO2tCQTFCVyxBQUNiLEFBeUJFO0FBQUE7QUFBQTtBQTFCSiIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZmVhd2VsL0Rldi9ib29rLW1hdGhpbGRlLTIwMTcifQ==