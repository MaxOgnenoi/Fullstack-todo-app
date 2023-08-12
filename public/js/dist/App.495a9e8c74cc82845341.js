/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_TodoList_TodoList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/TodoList/TodoList */ "./src/components/TodoList/TodoList.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


function App() {
  const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [completedTodos, setCompletedTodos] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [newTodo, setNewTodo] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    title: '',
    completed: false
  });

  //createTodos
  const createTodo = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(function* () {
      const body = _objectSpread({}, newTodo);
      try {
        const response = yield fetch('/api/todos', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(body)
        });
        const createdTodo = yield response.json();
        const todosCopy = [createdTodo, ...todos];
        setTodos(todosCopy);
        setNewTodo({
          title: '',
          completed: false
        });
      } catch (error) {
        console.error(error);
      }
    });
    return function createTodo() {
      return _ref.apply(this, arguments);
    };
  }();
  //deleteTodos
  const deleteTodo = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(function* (id) {
      try {
        const index = completedTodos.findIndex(todo => todo._id === id);
        const completedTodosCopy = [...completedTodos];
        const response = yield fetch("/api/todos/".concat(id), {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        yield response.json();
        completedTodosCopy.splice(index, 1);
        setCompletedTodos(completedTodosCopy);
      } catch (error) {
        console.error(error);
      }
    });
    return function deleteTodo(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  //moveToCompleted
  const moveToCompleted = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(function* (id) {
      try {
        const index = todos.findIndex(todo => todo._id === id);
        const todosCopy = [...todos];
        const subject = todosCopy[index];
        subject.completed = true;
        const response = yield fetch("/api/todos/".concat(id), {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(subject)
        });
        const updatedTodo = yield response.json();
        const completedTDsCopy = [updatedTodo, ...completedTodos];
        setCompletedTodos(completedTDsCopy);
        todosCopy.splice(index, 1);
        setTodos(todosCopy);
      } catch (error) {
        console.error(error);
      }
    });
    return function moveToCompleted(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();
  //getTodos
  const getTodos = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(function* () {
      try {
        const response = yield fetch('/api/todos');
        const foundTodos = yield response.json();
        setTodos(foundTodos.reverse());
        const responseTwo = yield fetch('/api/todos/completed');
        const foundCompletedTodos = yield responseTwo.json();
        setCompletedTodos(foundCompletedTodos.reverse());
      } catch (error) {
        console.error(error);
      }
    });
    return function getTodos() {
      return _ref4.apply(this, arguments);
    };
  }();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    getTodos();
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_components_TodoList_TodoList__WEBPACK_IMPORTED_MODULE_1__["default"], {
    newTodo: newTodo,
    setNewTodo: setNewTodo,
    createTodo: createTodo,
    todos: todos,
    moveToCompleted: moveToCompleted,
    completedTodos: completedTodos,
    deleteTodo: deleteTodo
  }));
}

/***/ }),

/***/ "./src/components/Todo/Todo.js":
/*!*************************************!*\
  !*** ./src/components/Todo/Todo.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Todo)
/* harmony export */ });
/* harmony import */ var _Todo_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Todo.module.scss */ "./src/components/Todo/Todo.module.scss");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function Todo(_ref) {
  let {
    todo,
    buttonAction,
    buttonText,
    buttonStyle
  } = _ref;
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(_Todo_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].todo, " ").concat(todo.completed ? _Todo_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].completed : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(_Todo_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].text, " ").concat(_Todo_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].dragHandle)
  }, todo.title), /*#__PURE__*/React.createElement("button", {
    className: "".concat(_Todo_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].button, " ").concat(_Todo_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"][buttonStyle]),
    onClick: () => buttonAction(todo._id)
  }, buttonText));
}

/***/ }),

/***/ "./src/components/TodoList/TodoList.js":
/*!*********************************************!*\
  !*** ./src/components/TodoList/TodoList.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TodoList)
/* harmony export */ });
/* harmony import */ var _TodoList_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodoList.module.scss */ "./src/components/TodoList/TodoList.module.scss");
/* harmony import */ var _Todo_Todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Todo/Todo */ "./src/components/Todo/Todo.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


function TodoList(_ref) {
  let {
    newTodo,
    createTodo,
    setNewTodo,
    todos,
    completedTodos,
    moveToCompleted,
    deleteTodo
  } = _ref;
  const handleAddTodo = () => {
    if (newTodo.title.trim() !== '') {
      createTodo();
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(_TodoList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].todolist, " ").concat(_TodoList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].biggerText)
  }, "Just do it:", /*#__PURE__*/React.createElement("div", {
    className: _TodoList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].inputContainer
  }, /*#__PURE__*/React.createElement("input", {
    className: _TodoList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].input,
    type: "text",
    value: newTodo.title,
    onChange: e => {
      setNewTodo(_objectSpread(_objectSpread({}, newTodo), {}, {
        title: e.target.value
      }));
    },
    onKeyDown: e => {
      e.key === 'Enter' && handleAddTodo();
    },
    placeholder: "Add a task..."
  }), /*#__PURE__*/React.createElement("button", {
    className: _TodoList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].addButton,
    onClick: handleAddTodo
  }, "Add")), /*#__PURE__*/React.createElement("h3", null, "Todos"), todos.map(todo => /*#__PURE__*/React.createElement(_Todo_Todo__WEBPACK_IMPORTED_MODULE_1__["default"], {
    key: todo._id,
    todo: todo,
    buttonAction: moveToCompleted,
    buttonText: 'Complete',
    buttonStyle: 'completeButton'
  })), /*#__PURE__*/React.createElement("h3", null, "Completed Todos"), completedTodos.map(todo => /*#__PURE__*/React.createElement(_Todo_Todo__WEBPACK_IMPORTED_MODULE_1__["default"], {
    key: todo._id,
    todo: todo,
    buttonAction: deleteTodo,
    buttonText: 'Delete',
    buttonStyle: 'deleteButton'
  })));
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");



const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(document.getElementById("app"));
root.render( /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode, null, /*#__PURE__*/React.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], null)));

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Todo/Todo.module.scss":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Todo/Todo.module.scss ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.dF90VpCFmFTIHpnHLKQv {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  font-size: 1.5rem;
  margin: 5px;
  padding: 10px;
  background-color: rgba(88, 89, 90, 0.3);
  color: rgba(209, 206, 215, 0.8);
  border-radius: 2rem;
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s ease-in-out, background-color 0.3s ease-in-out, cursor 0.3s ease-in-out;
}
@media (min-width: 320px) and (max-width: 1290px) {
  .dF90VpCFmFTIHpnHLKQv {
    margin: 0.2rem;
    padding: 0.2rem;
    width: 100%;
  }
}
.dF90VpCFmFTIHpnHLKQv:hover {
  transform: scale(1.02);
  box-shadow: 0 8px 15px rgba(23, 5, 58, 0.3);
  background-color: rgba(255, 255, 255, 0.05);
  cursor: pointer;
}
.dF90VpCFmFTIHpnHLKQv::before {
  content: "";
  position: absolute;
  top: -4px;
  left: -4px;
  right: -4px;
  bottom: -4px;
  background: linear-gradient(135deg, rgba(92, 228, 208, 0.1), transparent);
  opacity: 0;
  z-index: -1;
  border-radius: 2rem;
  transition: opacity 0.3s ease-in-out;
}
.dF90VpCFmFTIHpnHLKQv:hover::before {
  opacity: 1;
}
.dF90VpCFmFTIHpnHLKQv .RjH3BJHyeOuYask7QSbU {
  flex-grow: 1;
  margin-right: 1rem;
}
.dF90VpCFmFTIHpnHLKQv.XSCdHhxZCSxWVXCYFmfw .RjH3BJHyeOuYask7QSbU {
  text-decoration: line-through;
}
.dF90VpCFmFTIHpnHLKQv .QxYmIa1HnHqyxrkndPO_ {
  text-transform: uppercase;
  border-radius: 1rem;
  cursor: pointer;
  padding: 0.25rem 1rem;
  font-size: 1rem;
  font-weight: 700;
  display: inline-block;
  margin-left: 1rem;
  border: 1px solid white;
  box-shadow: 0 2px 5px rgba(23, 5, 58, 0.5);
}
.dF90VpCFmFTIHpnHLKQv .QxYmIa1HnHqyxrkndPO_.rp95Qib0wPuKEIqnecGH {
  background-color: rgb(7, 92, 31);
  color: ghostwhite;
}
.dF90VpCFmFTIHpnHLKQv .QxYmIa1HnHqyxrkndPO_._ZHjzZlpV8dGRLZJaPdE {
  background-color: rgba(130, 17, 17, 0.799);
  color: ghostwhite;
}
@media (min-width: 320px) and (max-width: 1290px) {
  .dF90VpCFmFTIHpnHLKQv .QxYmIa1HnHqyxrkndPO_ {
    font-size: 0.5rem;
  }
}
@media (min-width: 320px) and (max-width: 1290px) {
  .dF90VpCFmFTIHpnHLKQv {
    font-size: 1rem;
    margin: 5px 0 5px 0;
  }
}`, "",{"version":3,"sources":["webpack://./src/components/Todo/Todo.module.scss"],"names":[],"mappings":"AAAA;EACI,kBAAA;EACA,aAAA;EACA,8BAAA;EACA,uBAAA;EACA,iBAAA;EACA,WAAA;EACA,aAAA;EACA,uCAAA;EACA,+BAAA;EACA,mBAAA;EACA,2JAAA;AACJ;AACI;EAbJ;IAcQ,cAAA;IACA,eAAA;IACA,WAAA;EAEN;AACF;AAAI;EACI,sBAAA;EACA,2CAAA;EACA,2CAAA;EACA,eAAA;AAER;AACI;EACI,WAAA;EACA,kBAAA;EACA,SAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,yEAAA;EACA,UAAA;EACA,WAAA;EACA,mBAAA;EACA,oCAAA;AACR;AAEI;EACI,UAAA;AAAR;AAGI;EACI,YAAA;EACA,kBAAA;AADR;AAII;EACI,6BAAA;AAFR;AAKI;EACI,yBAAA;EACA,mBAAA;EACA,eAAA;EACA,qBAAA;EACA,eAAA;EACA,gBAAA;EACA,qBAAA;EACA,iBAAA;EACA,uBAAA;EACA,0CAAA;AAHR;AAKQ;EACI,gCAAA;EACA,iBAAA;AAHZ;AAMQ;EACI,0CAAA;EACA,iBAAA;AAJZ;AAOQ;EAtBJ;IAuBQ,iBAAA;EAJV;AACF;AAOI;EAhFJ;IAiFQ,eAAA;IACA,mBAAA;EAJN;AACF","sourcesContent":[".todo {\n    position: relative;\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-start;\n    font-size: 1.5rem;\n    margin: 5px;\n    padding: 10px;\n    background-color: rgb(88, 89, 90, 0.3);\n    color: rgba(209, 206, 215, 0.8);\n    border-radius: 2rem;\n    transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s ease-in-out, background-color 0.3s ease-in-out, cursor 0.3s ease-in-out;\n\n    @media (min-width: 320px) and (max-width: 1290px) {\n        margin: 0.2rem;\n        padding: 0.2rem;\n        width: 100%;\n    }\n\n    &:hover {\n        transform: scale(1.02);\n        box-shadow: 0 8px 15px rgba(23, 5, 58, 0.3);\n        background-color: rgba(255, 255, 255, 0.05);\n        cursor: pointer;\n    }\n\n    &::before {\n        content: \"\";\n        position: absolute;\n        top: -4px;\n        left: -4px;\n        right: -4px;\n        bottom: -4px;\n        background: linear-gradient(135deg, rgba(92, 228, 208, 0.1), transparent);\n        opacity: 0;\n        z-index: -1;\n        border-radius: 2rem;\n        transition: opacity 0.3s ease-in-out;\n    }\n\n    &:hover::before {\n        opacity: 1;\n    }\n\n    .text {\n        flex-grow: 1;\n        margin-right: 1rem;\n    }\n\n    &.completed .text {\n        text-decoration: line-through;\n    }\n\n    .button {\n        text-transform: uppercase;\n        border-radius: 1rem;\n        cursor: pointer;\n        padding: 0.25rem 1rem;\n        font-size: 1rem;\n        font-weight: 700;\n        display: inline-block;\n        margin-left: 1rem;\n        border: 1px solid white;\n        box-shadow: 0 2px 5px rgba(23, 5, 58, 0.5);\n\n        &.completeButton {\n            background-color: rgb(7, 92, 31);\n            color: ghostwhite;\n        }\n\n        &.deleteButton {\n            background-color: rgba(130, 17, 17, 0.799);\n            color: ghostwhite;\n        }\n\n        @media (min-width: 320px) and (max-width: 1290px) {\n            font-size: 0.5rem;\n        }\n    }\n\n    @media (min-width: 320px) and (max-width: 1290px) {\n        font-size: 1rem;\n        margin: 5px 0 5px 0;\n    }\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"todo": `dF90VpCFmFTIHpnHLKQv`,
	"text": `RjH3BJHyeOuYask7QSbU`,
	"completed": `XSCdHhxZCSxWVXCYFmfw`,
	"button": `QxYmIa1HnHqyxrkndPO_`,
	"completeButton": `rp95Qib0wPuKEIqnecGH`,
	"deleteButton": `_ZHjzZlpV8dGRLZJaPdE`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/TodoList/TodoList.module.scss":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/TodoList/TodoList.module.scss ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.wnFJvwW6SXbdzT0JPncz {
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  color: rgba(251, 221, 221, 0.8);
  padding: 2rem;
  margin: 2rem;
}
@media (min-width: 320px) and (max-width: 1290px) {
  .wnFJvwW6SXbdzT0JPncz {
    margin: 0.2rem;
    padding: 0.2rem;
    width: 100%;
  }
}
.wnFJvwW6SXbdzT0JPncz.O3BRYjiin3KHTwsVflem {
  font-size: 5rem;
  font-weight: bold;
}
@media (min-width: 320px) and (max-width: 1290px) {
  .wnFJvwW6SXbdzT0JPncz.O3BRYjiin3KHTwsVflem {
    font-size: 3rem;
  }
}
.wnFJvwW6SXbdzT0JPncz .BnzkW84o5qQ9GB8rvVUg {
  display: flex;
  align-items: center;
  margin: 3rem 0;
}
.wnFJvwW6SXbdzT0JPncz .BnzkW84o5qQ9GB8rvVUg .nvJYrRRxdDNaUqfYENmW {
  flex-grow: 1;
  border-top-left-radius: 2rem;
  border-bottom-left-radius: 2rem;
  color: rgba(251, 221, 221, 0.8);
  font-size: 2.5rem;
  height: 3.5rem;
  margin: 0;
  /* Remove margin from here */
  border: none;
  background-color: rgba(13, 14, 20, 0.588);
  padding-left: 1rem;
}
@media (min-width: 320px) and (max-width: 1290px) {
  .wnFJvwW6SXbdzT0JPncz .BnzkW84o5qQ9GB8rvVUg .nvJYrRRxdDNaUqfYENmW {
    width: 70vw;
  }
}
.wnFJvwW6SXbdzT0JPncz .BnzkW84o5qQ9GB8rvVUg .A8vP5WAFGDkMQMFLx1j1 {
  padding: 0 1rem 0 1rem;
  height: 3.5rem;
  font-size: 2.5rem;
  /* Adjust the font size to match input */
  background-color: rgba(251, 221, 221, 0.8);
  color: rgb(13, 14, 20);
  border: none;
  border-top-right-radius: 2rem;
  border-bottom-right-radius: 2rem;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}
.wnFJvwW6SXbdzT0JPncz .BnzkW84o5qQ9GB8rvVUg .A8vP5WAFGDkMQMFLx1j1:hover {
  background-color: rgba(251, 221, 221, 0.251);
}
@media (min-width: 320px) and (max-width: 1290px) {
  .wnFJvwW6SXbdzT0JPncz .BnzkW84o5qQ9GB8rvVUg {
    margin: 1rem 0;
  }
  .wnFJvwW6SXbdzT0JPncz .BnzkW84o5qQ9GB8rvVUg .nvJYrRRxdDNaUqfYENmW {
    font-size: 1rem;
    height: 2rem;
  }
  .wnFJvwW6SXbdzT0JPncz .BnzkW84o5qQ9GB8rvVUg .A8vP5WAFGDkMQMFLx1j1 {
    font-size: 1rem;
    height: 2rem;
  }
}
.wnFJvwW6SXbdzT0JPncz h3 {
  font-size: 1.5rem;
  margin: 0.5rem 0;
}
@media (min-width: 320px) and (max-width: 1290px) {
  .wnFJvwW6SXbdzT0JPncz h3 {
    font-size: 1.2rem;
  }
}`, "",{"version":3,"sources":["webpack://./src/components/TodoList/TodoList.module.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,sBAAA;EACA,eAAA;EACA,+BAAA;EACA,aAAA;EACA,YAAA;AACJ;AACI;EARJ;IASQ,cAAA;IACA,eAAA;IACA,WAAA;EAEN;AACF;AAAI;EACI,eAAA;EACA,iBAAA;AAER;AAAQ;EAJJ;IAKQ,eAAA;EAGV;AACF;AAAI;EACI,aAAA;EACA,mBAAA;EACA,cAAA;AAER;AAAQ;EACI,YAAA;EACA,4BAAA;EACA,+BAAA;EACA,+BAAA;EACA,iBAAA;EACA,cAAA;EACA,SAAA;EACA,4BAAA;EACA,YAAA;EACA,yCAAA;EACA,kBAAA;AAEZ;AAAY;EAbJ;IAcQ,WAAA;EAGd;AACF;AAAQ;EACI,sBAAA;EACA,cAAA;EACA,iBAAA;EACA,wCAAA;EACA,0CAAA;EACA,sBAAA;EACA,YAAA;EACA,6BAAA;EACA,gCAAA;EACA,eAAA;EACA,6CAAA;AAEZ;AAAY;EACI,4CAAA;AAEhB;AAEQ;EAzCJ;IA0CQ,cAAA;EACV;EACU;IACI,eAAA;IACA,YAAA;EACd;EAEU;IACI,eAAA;IACA,YAAA;EAAd;AACF;AAII;EACI,iBAAA;EACA,gBAAA;AAFR;AAIQ;EAJJ;IAKQ,iBAAA;EADV;AACF","sourcesContent":[".todolist {\n    display: flex;\n    flex-direction: column;\n    font-size: 2rem;\n    color: rgba(251, 221, 221, 0.8);\n    padding: 2rem;\n    margin: 2rem;\n\n    @media (min-width: 320px) and (max-width: 1290px) {\n        margin: 0.2rem;\n        padding: 0.2rem;\n        width: 100%;\n    }\n\n    &.biggerText {\n        font-size: 5rem;\n        font-weight: bold;\n\n        @media (min-width: 320px) and (max-width: 1290px) {\n            font-size: 3rem;\n        }\n    }\n\n    .inputContainer {\n        display: flex;\n        align-items: center;\n        margin: 3rem 0;\n\n        .input {\n            flex-grow: 1;\n            border-top-left-radius: 2rem;\n            border-bottom-left-radius: 2rem;\n            color: rgba(251, 221, 221, 0.8);\n            font-size: 2.5rem;\n            height: 3.5rem;\n            margin: 0;\n            /* Remove margin from here */\n            border: none;\n            background-color: rgba(13, 14, 20, 0.588);\n            padding-left: 1rem;\n\n            @media (min-width: 320px) and (max-width: 1290px) {\n                width: 70vw;\n            }\n        }\n\n        .addButton {\n            padding: 0 1rem 0 1rem;\n            height: 3.5rem;\n            font-size: 2.5rem;\n            /* Adjust the font size to match input */\n            background-color: rgba(251, 221, 221, 0.8);\n            color: rgba(13, 14, 20);\n            border: none;\n            border-top-right-radius: 2rem;\n            border-bottom-right-radius: 2rem;\n            cursor: pointer;\n            transition: background-color 0.3s ease-in-out;\n\n            &:hover {\n                background-color: rgba(251, 221, 221, 0.251);\n            }\n        }\n\n        @media (min-width: 320px) and (max-width: 1290px) {\n            margin: 1rem 0;\n\n            .input {\n                font-size: 1rem;\n                height: 2rem;\n            }\n\n            .addButton {\n                font-size: 1rem;\n                height: 2rem;\n            }\n        }\n    }\n\n    h3 {\n        font-size: 1.5rem;\n        margin: 0.5rem 0;\n\n        @media (min-width: 320px) and (max-width: 1290px) {\n            font-size: 1.2rem;\n        }\n    }\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"todolist": `wnFJvwW6SXbdzT0JPncz`,
	"biggerText": `O3BRYjiin3KHTwsVflem`,
	"inputContainer": `BnzkW84o5qQ9GB8rvVUg`,
	"input": `nvJYrRRxdDNaUqfYENmW`,
	"addButton": `A8vP5WAFGDkMQMFLx1j1`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/components/Todo/Todo.module.scss":
/*!**********************************************!*\
  !*** ./src/components/Todo/Todo.module.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Todo_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./Todo.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Todo/Todo.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Todo_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Todo_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Todo_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Todo_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/TodoList/TodoList.module.scss":
/*!******************************************************!*\
  !*** ./src/components/TodoList/TodoList.module.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_TodoList_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./TodoList.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/TodoList/TodoList.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_TodoList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_TodoList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_TodoList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_TodoList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"App": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkTo_Do_List_App_by_Max"] = self["webpackChunkTo_Do_List_App_by_Max"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sour-b53f7e"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=App.91ac6d964ff6e8aad38d5e32d9cdfdac.js.map