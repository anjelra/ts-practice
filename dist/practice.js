"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        return this.radius * this.radius * Math.PI;
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    // width: number;
    // height: number;
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var shapes = [new Circle(5), new Rectangle(10, 5)];
var circle = new Circle(5);
console.log(circle.radius);
var rectangle = new Rectangle(10, 5);
// console.log(rectangle.width);   // width, height 는 private로 지정된 접근자이기 떄문에 밖에서는 접근을 할 수 없다.
shapes.forEach(function (shape) {
    console.log(shape.getArea());
});
var person = {
    name: '김사랑'
};
var expert = {
    name: '김개발',
    skills: ['javascript', 'react']
};
var people = [person, expert];
var color = 'red';
var colors = ['red', 'yellow'];
/** interface 와 type 은 구분해서 사용할 필요는 없지만, 일관성있게 쓰면 된다. */
/** Generics(타입스크립트에서 함수, 클래스, interface, type을 사용하게 될 때 여러 종류의 타입에 대하여 호환을 맞춰야 하는 상황에서 사용하는 문법입니다.) */
function merge(a, b) {
    return __assign(__assign({}, a), b);
}
;
var merged = merge({ foo: 1 }, { bar: 1 });
console.log(merged);
function wrap(param) {
    return {
        param: param
    };
}
var wraps = wrap(10);
console.log(wraps);
var itmes = {
    list: ['a', 'b', 'c']
};
console.log('__items', itmes);
/** class에서 Generic 적용하기 */
var Queue = /** @class */ (function () {
    function Queue() {
        this.list = []; // 초기화
    }
    Object.defineProperty(Queue.prototype, "length", {
        get: function () {
            return this.list.length;
        },
        enumerable: false,
        configurable: true
    });
    Queue.prototype.enqueue = function (item) {
        this.list.push(item);
    };
    Queue.prototype.dequeue = function () {
        return this.list.shift();
    };
    return Queue;
}());
var queue = new Queue();
for (var i = 0; i < 5; i++) {
    queue.enqueue(i);
}
console.log(queue.length);
var j = 0;
while (j < 5) {
    console.log(queue.dequeue());
    j++;
}
