'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _social = require('./social');

var _social2 = _interopRequireDefault(_social);

var _menu = require('./menu');

var _menu2 = _interopRequireDefault(_menu);

var _scrollDown = require('./scrollDown');

var _scrollDown2 = _interopRequireDefault(_scrollDown);

var _infos = require('./infos');

var _infos2 = _interopRequireDefault(_infos);

var _wrapper = require('./wrapper');

var _wrapper2 = _interopRequireDefault(_wrapper);

var _background = require('./background');

var _background2 = _interopRequireDefault(_background);

var _call = require('./call');

var _call2 = _interopRequireDefault(_call);

var _about = require('../about');

var _about2 = _interopRequireDefault(_about);

var _columns = require('../columns');

var _columns2 = _interopRequireDefault(_columns);

var _backgroundMask = require('../animations/backgroundMask');

var _backgroundMask2 = _interopRequireDefault(_backgroundMask);

var _data = require('../../../data');

var _data2 = _interopRequireDefault(_data);

var _debounce = require('../../utils/debounce');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/feawel/Dev/book-mathilde-2017/src/components/homeProjects/index.js';

// Components


// Static data


// Utils


var HomeProjects = function (_React$Component) {
  (0, _inherits3.default)(HomeProjects, _React$Component);

  function HomeProjects(props) {
    (0, _classCallCheck3.default)(this, HomeProjects);

    var _this = (0, _possibleConstructorReturn3.default)(this, (HomeProjects.__proto__ || (0, _getPrototypeOf2.default)(HomeProjects)).call(this, props));

    _this.componentDidMount = function () {
      _this.updateWithDebounce = (0, _debounce.debounce)(_this.updateProject, 500, true);
      window.addEventListener('mousewheel', _this.updateWithDebounce);
    };

    _this.componentWillUnmount = function () {
      return window.removeEventListener('mousewheel', _this.updateWithDebounce);
    };

    _this.state = {
      current: 0,
      frames: _data2.default.animations.switchProjects.frames,
      opacityFrames: _data2.default.animations.switchProjects.opacityFrames,
      maskFrames: _data2.default.animations.switchProjects.maskFrames,
      width: 1,
      opacity: 0.5,
      animating: false,
      textTop: 0,
      lineWidth: 40,
      draw: null,
      maskWidth: '20%'
    };

    _this.updateProject = _this.updateProject.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(HomeProjects, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          current = _state.current,
          width = _state.width,
          opacity = _state.opacity,
          textTop = _state.textTop,
          lineWidth = _state.lineWidth,
          draw = _state.draw,
          maskWidth = _state.maskWidth,
          animating = _state.animating;

      var project = _data2.default.projects[current % 2];
      return _react2.default.createElement(_wrapper2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement(_columns2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }), _react2.default.createElement(_about2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }), _react2.default.createElement(_menu2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }), _react2.default.createElement(_scrollDown2.default, { onClick: function onClick() {
          return _this2.updateWithDebounce();
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }), _react2.default.createElement(_social2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }), _react2.default.createElement(_infos2.default, (0, _extends3.default)({ top: textTop, lineWidth: lineWidth }, project, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      })), _react2.default.createElement(_backgroundMask2.default, { animating: animating, current: current, maskWidth: maskWidth, picture1: _data2.default.projects[0].picture, picture2: _data2.default.projects[1].picture, __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }), _react2.default.createElement(_call2.default, { top: textTop, draw: draw, __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }));
    }
  }, {
    key: 'updateProject',
    value: function updateProject() {
      var _this3 = this;

      if (!this.state.animating) {
        this.setState({
          opacity: 0.5,
          width: 1,
          animating: true,
          textTop: 100,
          lineWidth: 0,
          draw: false
        }, function () {
          return setTimeout(function () {
            return _this3.setState({
              current: _this3.state.current === 0 ? 1 : 0,
              animating: false,
              textTop: 0,
              lineWidth: 40,
              draw: true
            });
          }, 1500);
        });
      }
    }
  }]);

  return HomeProjects;
}(_react2.default.Component);

exports.default = HomeProjects;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL2hvbWVQcm9qZWN0cy9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIlNvY2lhbCIsIk1lbnUiLCJTY3JvbGxEb3duIiwiSW5mb3MiLCJXcmFwcGVyIiwiQmFja2dyb3VuZCIsIkNhbGwiLCJBYm91dCIsIkxpbmVzIiwiQmFja2dyb3VuZE1hc2siLCJkYXRhIiwiZGVib3VuY2UiLCJIb21lUHJvamVjdHMiLCJwcm9wcyIsImNvbXBvbmVudERpZE1vdW50IiwidXBkYXRlV2l0aERlYm91bmNlIiwidXBkYXRlUHJvamVjdCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzdGF0ZSIsImN1cnJlbnQiLCJmcmFtZXMiLCJhbmltYXRpb25zIiwic3dpdGNoUHJvamVjdHMiLCJvcGFjaXR5RnJhbWVzIiwibWFza0ZyYW1lcyIsIndpZHRoIiwib3BhY2l0eSIsImFuaW1hdGluZyIsInRleHRUb3AiLCJsaW5lV2lkdGgiLCJkcmF3IiwibWFza1dpZHRoIiwiYmluZCIsInByb2plY3QiLCJwcm9qZWN0cyIsInBpY3R1cmUiLCJzZXRTdGF0ZSIsInNldFRpbWVvdXQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFHUCxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBZ0I7Ozs7QUFDdkIsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQWdCOzs7O0FBQ3ZCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQVc7Ozs7QUFDbEIsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQU8sQUFBb0I7Ozs7QUFHM0IsQUFBTyxBQUFVOzs7O0FBR2pCLEFBQVMsQUFBZ0I7Ozs7OztBQWhCekI7OztBQVlBOzs7QUFHQTs7O0ksQUFHTTt3Q0FDSjs7d0JBQUEsQUFBWSxPQUFPO3dDQUFBOztrSkFBQSxBQUNYOztVQURXLEFBbUJuQixvQkFBb0IsWUFBTSxBQUN4QjtZQUFBLEFBQUsscUJBQXFCLHdCQUFTLE1BQVQsQUFBYyxlQUFkLEFBQTZCLEtBQXZELEFBQTBCLEFBQWtDLEFBQzVEO2FBQUEsQUFBTyxpQkFBUCxBQUF3QixjQUFjLE1BQXRDLEFBQTJDLEFBQzVDO0FBdEJrQjs7VUFBQSxBQXdCbkIsdUJBQXVCLFlBQUE7YUFDckIsT0FBQSxBQUFPLG9CQUFQLEFBQTJCLGNBQWMsTUFEcEIsQUFDckIsQUFBOEM7QUF6QjdCLEFBRWpCOztVQUFBLEFBQUs7ZUFBUSxBQUNGLEFBQ1Q7Y0FBUSxlQUFBLEFBQUssV0FBTCxBQUFnQixlQUZiLEFBRTRCLEFBQ3ZDO3FCQUFlLGVBQUEsQUFBSyxXQUFMLEFBQWdCLGVBSHBCLEFBR21DLEFBQzlDO2tCQUFZLGVBQUEsQUFBSyxXQUFMLEFBQWdCLGVBSmpCLEFBSWdDLEFBQzNDO2FBTFcsQUFLSixBQUNQO2VBTlcsQUFNRixBQUNUO2lCQVBXLEFBT0EsQUFDWDtlQVJXLEFBUUYsQUFDVDtpQkFUVyxBQVNBLEFBQ1g7WUFWVyxBQVVMLEFBQ047aUJBWEYsQUFBYSxBQVdBLEFBR2I7QUFkYSxBQUNYOztVQWFGLEFBQUssZ0JBQWdCLE1BQUEsQUFBSyxjQUFMLEFBQW1CLEtBaEJ2QixBQWdCakI7V0FDRDs7Ozs7NkJBVVM7bUJBQUE7O21CQUM0RSxLQUQ1RSxBQUNpRjtVQURqRixBQUNBLGlCQURBLEFBQ0E7VUFEQSxBQUNTLGVBRFQsQUFDUztVQURULEFBQ2dCLGlCQURoQixBQUNnQjtVQURoQixBQUN5QixpQkFEekIsQUFDeUI7VUFEekIsQUFDa0MsbUJBRGxDLEFBQ2tDO1VBRGxDLEFBQzZDLGNBRDdDLEFBQzZDO1VBRDdDLEFBQ21ELG1CQURuRCxBQUNtRDtVQURuRCxBQUM4RCxtQkFEOUQsQUFDOEQsQUFDdEU7O1VBQU0sVUFBVSxlQUFBLEFBQUssU0FBUyxVQUE5QixBQUFnQixBQUFzQixBQUN0Qzs2QkFBTyxBQUFDOztvQkFBRDtzQkFBQSxBQUNMO0FBREs7QUFBQSxPQUFBLGtCQUNMLEFBQUM7O29CQUFEO3NCQURLLEFBQ0wsQUFDQTtBQURBO0FBQUEsMEJBQ0EsQUFBQzs7b0JBQUQ7c0JBRkssQUFFTCxBQUNBO0FBREE7QUFBQSwwQkFDQSxBQUFDOztvQkFBRDtzQkFISyxBQUdMLEFBQ0E7QUFEQTtBQUFBLDBCQUNBLEFBQUMsc0NBQVcsU0FBUyxtQkFBQTtpQkFBTSxPQUFOLEFBQU0sQUFBSztBQUFoQztvQkFBQTtzQkFKSyxBQUlMLEFBQ0E7QUFEQTswQkFDQSxBQUFDOztvQkFBRDtzQkFMSyxBQUtMLEFBR0E7QUFIQTtBQUFBLDBCQUdBLEFBQUMsd0RBQU0sS0FBUCxBQUFZLFNBQVMsV0FBckIsQUFBZ0MsYUFBaEMsQUFBK0M7O29CQUEvQztzQkFSSyxBQVFMLEFBQ0E7QUFEQTtBQUFBLDJCQUNBLEFBQUMsMENBQWUsV0FBaEIsQUFBMkIsV0FBVyxTQUF0QyxBQUErQyxTQUFTLFdBQXhELEFBQW1FLFdBQVcsVUFBVSxlQUFBLEFBQUssU0FBTCxBQUFjLEdBQXRHLEFBQXlHLFNBQVMsVUFBVSxlQUFBLEFBQUssU0FBTCxBQUFjLEdBQTFJLEFBQTZJO29CQUE3STtzQkFUSyxBQVNMLEFBQ0E7QUFEQTswQkFDQSxBQUFDLGdDQUFLLEtBQU4sQUFBVyxTQUFTLE1BQXBCLEFBQTBCO29CQUExQjtzQkFWRixBQUFPLEFBVUwsQUFFSDtBQUZHOzs7OztvQ0FJYTttQkFDZjs7VUFBRyxDQUFDLEtBQUEsQUFBSyxNQUFULEFBQWUsV0FBVyxBQUN4QjthQUFBLEFBQUs7bUJBQVMsQUFDSCxBQUNUO2lCQUZZLEFBRUwsQUFDUDtxQkFIWSxBQUdELEFBQ1g7bUJBSlksQUFJSCxBQUNUO3FCQUxZLEFBS0QsQUFDWDtnQkFORixBQUFjLEFBTU47QUFOTSxBQUNaLFdBTUMsWUFBQTs0QkFBaUIsWUFBQTswQkFBTSxBQUFLO3VCQUNwQixPQUFBLEFBQUssTUFBTCxBQUFXLFlBQVgsQUFBdUIsSUFBdkIsQUFBMkIsSUFERSxBQUNFLEFBQ3hDO3lCQUZzQyxBQUUzQixBQUNYO3VCQUhzQyxBQUc3QixBQUNUO3lCQUpzQyxBQUkzQixBQUNYO29CQUxrQixBQUFNLEFBQWMsQUFLaEM7QUFMZ0MsQUFDdEMsYUFEd0I7QUFBakIsV0FBQSxFQUFOLEFBQU0sQUFNTDtBQWJKLEFBZUQ7QUFDRjs7Ozs7RUEvRHdCLGdCQUFNLEEsQUFtRWpDOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9mZWF3ZWwvRGV2L2Jvb2stbWF0aGlsZGUtMjAxNyJ9