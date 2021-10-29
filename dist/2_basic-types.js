"use strict";
var unde;
var e;
var obj = {
    key: "hello",
};
var fun4 = function (a, b) {
    if (a === void 0) { a = 1; }
    console.log(a);
    console.log(b);
};
fun4(2, "hello");
var objDeep = {
    key1: "sdfsdf",
    key2: {
        name: "kim",
        job: "developer",
    },
    isMale: true,
};
var typeNeeded = {
    key1: "sdfsdf",
    key2: {
        name: "kim",
        job: "developer",
    },
    arr: [2, true, "hello"],
};
var arr1 = ["Hello", "Bye"];
var arr2 = ["Hello", 12];
var arr3;
var arr4 = [
    12,
    "Hi",
    function () {
        return 3;
    },
];
var anyType;
anyType = 12;
var b = [];
console.log(anyType.push("Hello"));
var unknownType;
unknownType = 12;
var unknownArray = ["dfd"];
if (Array.isArray(unknownType)) {
    console.log(unknownType.push("Hello"));
}
var stringOrNumber;
var c = "sdf" || 12;
var arr5 = [12, "sdf"];
var d;
var WebDeveloper;
(function (WebDeveloper) {
    WebDeveloper[WebDeveloper["FRONTEND"] = 0] = "FRONTEND";
    WebDeveloper[WebDeveloper["BACKEND"] = 1] = "BACKEND";
})(WebDeveloper || (WebDeveloper = {}));
console.log(WebDeveloper.FRONTEND);
console.log(WebDeveloper.BACKEND);
var Browser;
(function (Browser) {
    Browser["CHROME"] = "ch";
    Browser[Browser["SAFARI"] = 10] = "SAFARI";
    Browser[Browser["WHALE"] = 11] = "WHALE";
    Browser[Browser["BRAVE"] = 12] = "BRAVE";
})(Browser || (Browser = {}));
console.log(Browser.CHROME);
console.log(Browser.SAFARI);
console.log(Browser.WHALE);
console.log(Browser.BRAVE);
var voidFunc = function () {
    console.log("Hello");
};
console.log(voidFunc);
var neverFunc = function () {
    throw { message: "에러입니다", errorCode: 500 };
};
var infiniteFunc = function () {
    while (true) { }
};
var returnErrorFunc = function () {
    return neverFunc();
};
var getFunc;
var getFunc2;
var funcType2 = function (a, b) {
    return a.toString() + b;
};
//# sourceMappingURL=2_basic-types.js.map