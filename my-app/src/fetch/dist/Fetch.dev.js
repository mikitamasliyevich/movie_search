"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMovieId = exports.getMovieTitle = void 0;

var getMovieTitle = function getMovieTitle(onChangeCounter, onlistErrors, onlistTrueResult) {
  var text,
      page,
      key,
      url,
      res,
      data,
      _args = arguments;
  return regeneratorRuntime.async(function getMovieTitle$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          text = _args.length > 3 && _args[3] !== undefined ? _args[3] : "";
          page = _args.length > 4 && _args[4] !== undefined ? _args[4] : 1;
          key = _args.length > 5 ? _args[5] : undefined;
          url = "https://www.omdbapi.com/?s=".concat(text, "&page=").concat(page, "&apikey=").concat(key);
          _context.next = 6;
          return regeneratorRuntime.awrap(fetch(url));

        case 6:
          res = _context.sent;
          _context.next = 9;
          return regeneratorRuntime.awrap(res.json());

        case 9:
          data = _context.sent;

          if (!(data.Response === 'False')) {
            _context.next = 14;
            break;
          }

          return _context.abrupt("return", (onlistErrors(data.Error), onlistTrueResult(data.Response)));

        case 14:
          return _context.abrupt("return", (onChangeCounter(data.Search), onlistTrueResult(data.Response)));

        case 15:
          ;

        case 16:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.getMovieTitle = getMovieTitle;
var array = [];

var getMovieId = function getMovieId(onChangeGeneralRaiting, id) {
  var text,
      page,
      key,
      url,
      res,
      respond,
      _args2 = arguments;
  return regeneratorRuntime.async(function getMovieId$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          text = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : "";
          page = _args2.length > 3 && _args2[3] !== undefined ? _args2[3] : 1;
          key = _args2.length > 4 ? _args2[4] : undefined;
          url = "https://www.omdbapi.com/?i=".concat(id, "&text=").concat(text, "&page=").concat(page, "&apikey=").concat(key);
          _context2.next = 6;
          return regeneratorRuntime.awrap(fetch(url));

        case 6:
          res = _context2.sent;
          _context2.next = 9;
          return regeneratorRuntime.awrap(res.json());

        case 9:
          respond = _context2.sent;

          if (!(respond.Response === 'False')) {
            _context2.next = 14;
            break;
          }

          return _context2.abrupt("return", console.log("error"));

        case 14:
          array.push(respond);
          onChangeGeneralRaiting(array);

        case 16:
          ;

        case 17:
        case "end":
          return _context2.stop();
      }
    }
  });
};

exports.getMovieId = getMovieId;