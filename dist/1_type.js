"use strict";
var a;
var b = "Hello";
a = 12;
b = "Bye";
var c = "Hi";
var arr1 = [12, 35];
var arr2 = [12, true];
var arr3 = [12, true];
var obj1 = {
    key1: true,
    key2: "Hi",
    key3: 123,
};
function fun1(a, b) {
    var sum = a + b;
    return sum.toString();
}
var fun2 = function (a, b) {
    var sum = a + b;
    return sum.toString();
};
var fun3 = function (a, b, c) {
    return c(a, b);
};
console.log(fun3(1, 3, fun2));
//# sourceMappingURL=1_type.js.map