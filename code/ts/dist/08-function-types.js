"use strict";
// 函数类型
Object.defineProperty(exports, "__esModule", { value: true });
function fun1(a, b) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    return 'fun1';
}
fun1(100, 200);
fun1(100);
fun1(100, 200, 333);
var fun2 = function (a, b) {
    return 'func2';
};
//# sourceMappingURL=08-function-types.js.map