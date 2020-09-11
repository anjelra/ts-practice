"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
function Greetings(_a) {
    var name = _a.name, mark = _a.mark, optional = _a.optional, onClick = _a.onClick;
    var handleClick = function () {
        onClick(name);
    };
    return (<div>
            Hello, {name} {mark}
            {optional && <p>{optional}</p>}
            <div>
                <button onClick={handleClick}>Click Me</button>
            </div>
        </div>);
}
Greetings.defaultProps = {
    mark: '!'
};
exports.default = Greetings;
