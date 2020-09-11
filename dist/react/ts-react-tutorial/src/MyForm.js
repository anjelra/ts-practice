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
function MyForm(_a) {
    var onSubmit = _a.onSubmit;
    var inputRef = react_1.useRef(null);
    var _b = react_1.useState({
        name: '',
        description: ''
    }), form = _b[0], setForm = _b[1];
    var name = form.name, description = form.description;
    // e 타입이 무엇인지 모를 경우에는 일단 e: any 라고 적어두고
    // 작성한 input의 onChange에 마우스를 올려보면
    // React.ChangeEvent<HTMLInputElement> 타입이라는 것을 알 수 있다.
    var onChange = function (e) {
        var _a;
        var _b = e.target, name = _b.name, value = _b.value;
        setForm(__assign(__assign({}, form), (_a = {}, _a[name] = value, _a)));
    };
    var handleSubmit = function (e) {
        e.preventDefault();
        onSubmit(form); // onSubmit을 실행한 후,
        setForm({
            name: '',
            description: ''
        });
        // typescript에서는 inputRef.current 안의 값을 사용하려면 null 체킹을 해줘야 한다.
        // 특정 값이 정말 유효한지 유효하지 않는지를 체크해야 한다.
        // 만약 어떤 타입이 undefined이거나 null 일 수 있는 상황에서는, 해당 값이 유효한지 체킹하는 작업을 꼭 해줘야
        // 오류도 사라지고 자동완성도 잘 이루어진다.
        if (!inputRef.current) {
            return;
        }
        inputRef.current.focus();
    };
    return (<form onSubmit={handleSubmit}>
            <input name="name" value={name} onChange={onChange} ref={inputRef}/>
            <input name="description" value={description} onChange={onChange}/>
            <button type="submit">등록</button>
        </form>);
}
exports.default = MyForm;
