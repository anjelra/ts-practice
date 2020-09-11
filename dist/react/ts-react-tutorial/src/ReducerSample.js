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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
function reducer(state, action) {
    switch (action.type) {
        case 'SET_COUNT':
            return __assign(__assign({}, state), { count: action.count });
        case 'SET_TEXT':
            return __assign(__assign({}, state), { text: action.text });
        case 'SET_COLOR':
            return __assign(__assign({}, state), { color: action.color });
        case 'TOGGLE_GOOD':
            return __assign(__assign({}, state), { isGood: !state.isGood });
        default:
            throw new Error('unhandled action');
    }
}
function ReducerSample() {
    var _a = react_1.useReducer(reducer, {
        count: 0,
        text: 'hello',
        color: 'red',
        isGood: true
    }), state = _a[0], dispatch = _a[1];
    var setCount = function () { return dispatch({ type: 'SET_COUNT', count: 5 }); };
    var setText = function () { return dispatch({ type: 'SET_TEXT', text: 'bye' }); };
    var setColor = function () { return dispatch({ type: 'SET_COLOR', color: 'yellow' }); };
    var toggleGood = function () { return dispatch({ type: 'TOGGLE_GOOD' }); };
    return (<div>
            <p>
                <code>count: </code> {state.count}
            </p>
            <p>
                <code>text: </code> {state.text}
            </p>
            <p>
                <code>color: </code> {state.color}
            </p>
            <p>
                <code>isGood: </code> {state.isGood ? 'true' : 'false'}
            </p>

            <div>
                <button onClick={setCount}>SET_COUNT</button>
                <button onClick={setText}>SET_TEXT</button>
                <button onClick={setColor}>SET_COLOR</button>
                <button onClick={toggleGood}>TOGGLE_GOOD</button>
            </div>
        </div>);
}
exports.default = ReducerSample;
