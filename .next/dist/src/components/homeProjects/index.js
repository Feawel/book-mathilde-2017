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

// Static data


// Components
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

    _this.updateWidth = function () {
      var _this$state = _this.state,
          index = _this$state.index,
          opacity = _this$state.opacity,
          frames = _this$state.frames,
          opacityFrames = _this$state.opacityFrames,
          current = _this$state.current;

      if (frames[index]) {
        _this.setState({
          width: frames[index],
          index: index + 4,
          opacity: opacityFrames[index],
          current: index === 4 + frames.length / 2 ? current ? 0 : 1 : current
        });
      } else {
        clearInterval(_this.interval);
        _this.setState({ animating: false, textTop: 0, lineWidth: 40, draw: true });
      }
    };

    _this.state = {
      current: 0,
      index: 0,
      frames: _data2.default.animations.switchProjects.frames,
      opacityFrames: _data2.default.animations.switchProjects.opacityFrames,
      width: 1,
      opacity: 0.5,
      animating: false,
      textTop: 0,
      lineWidth: 40,
      draw: null
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
          draw = _state.draw;

      var project = _data2.default.projects[current % 2];

      return _react2.default.createElement(_wrapper2.default, null, _react2.default.createElement(_columns2.default, { width: width, opacity: opacity }), _react2.default.createElement(_about2.default, null), _react2.default.createElement(_menu2.default, null), _react2.default.createElement(_scrollDown2.default, { onClick: function onClick() {
          return _this2.updateWithDebounce();
        } }), _react2.default.createElement(_social2.default, null), _react2.default.createElement(_background2.default, (0, _extends3.default)({ hide: current !== 0 }, _data2.default.projects[0].picture)), _react2.default.createElement(_background2.default, (0, _extends3.default)({ hide: current !== 1 }, _data2.default.projects[1].picture)), _react2.default.createElement(_infos2.default, (0, _extends3.default)({ top: textTop, lineWidth: lineWidth }, project)), _react2.default.createElement(_call2.default, { top: textTop, draw: draw }));
    }
  }, {
    key: 'updateProject',
    value: function updateProject() {
      var _this3 = this;

      if (!this.state.animating) {
        this.setState({
          index: 0,
          opacity: 0.5,
          width: 1,
          animating: true,
          textTop: 100,
          lineWidth: 0,
          draw: false
        }, function () {
          return _this3.interval = setInterval(function () {
            return _this3.updateWidth();
          }, 100);
        });
      }
    }
  }]);

  return HomeProjects;
}(_react2.default.Component);

// Utils
exports.default = HomeProjects;