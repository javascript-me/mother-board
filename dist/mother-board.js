(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var sum = function sum(a) {
    var b = arguments.length <= 1 || arguments[1] === undefined ? 6 : arguments[1];
    return a + b;
};

var square = function square(b) {
    "use strict";

    return b * b;
};

var variable = 120;

var Student = function () {
    function Student(info) {
        _classCallCheck(this, Student);

        this.name = info.name;
        this.id = info.id;
    }

    _createClass(Student, [{
        key: "getName",
        value: function getName() {
            return this.name;
        }
    }]);

    return Student;
}();

exports.sum = sum;
exports.square = square;
exports.variable = variable;
exports.Student = Student;

},{}],2:[function(require,module,exports){
"use strict";

var _hello = require("./hello");

console.log((0, _hello.sum)(2, 3));

console.log((0, _hello.square)(5));

console.log(_hello.variable);

var info = {
    name: "Anthony Chen",
    id: 43352833
};

var student = new _hello.Student(info);

console.log(student.getName());

window.onload = function () {
    document.getElementById("banner").innerHTML = "Success! ";
};

},{"./hello":1}]},{},[2]);
