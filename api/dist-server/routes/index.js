"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var homeRouter = _express["default"].Router();
/* GET home page. */


homeRouter.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});
var _default = homeRouter;
exports["default"] = _default;