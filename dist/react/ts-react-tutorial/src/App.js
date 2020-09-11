"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
// import ReducerSample from './ReducerSample';
var MyForm_1 = __importDefault(require("./MyForm"));
function App() {
    var onSubmit = function (form) {
        console.log(form);
    };
    return (<MyForm_1.default onSubmit={onSubmit}/>);
}
exports.default = App;
// function App () {
//   return (
//     <ReducerSample/>
//   );
// }
// export default App;
