// 원시 타입
let unde: undefined;
let e: null;
const obj = {
    key: "hello",
};
const fun4 = (a = 1, b: string) => {
    console.log(a);
    console.log(b);
};
fun4(2, "hello");

// 객체(타입 선언 필요 없음)
const objDeep = {
    key1: "sdfsdf",
    key2: {
        name: "kim",
        job: "developer",
    },
    isMale: true,
};

// 객체(타입 선언 필요함) : arr 대응 프로퍼티의 타입이 tuple(길이 고정, 각 인덱스의 타입 정해짐)이었으면 좋겠다. 이 때는 타입을 모두 선언해주어야 함.
// 타입 선언을 하지 않으면 arr 프로퍼티의 타입이 유니온 타입(추후 설명)으로 결정됨(x)
const typeNeeded: {
    key1: string;
    key2: {
        name: string;
        job: string;
    };
    arr: [number, boolean, string];
} = {
    key1: "sdfsdf",
    key2: {
        name: "kim",
        job: "developer",
    },
    arr: [2, true, "hello"],
};

// 배열 타입
const arr1 = ["Hello", "Bye"];
const arr2 = ["Hello", 12];
let arr3: string[];

// tuple 타입
const arr4: [number, string, () => number] = [
    12,
    "Hi",
    () => {
        return 3;
    },
];

// any 타입
let anyType;
anyType = 12;
let b = [];
console.log(anyType.push("Hello"));

// unknown 타입
let unknownType: unknown;
unknownType = 12;
let unknownArray: unknown = ["dfd"];
if (Array.isArray(unknownType)) {
    console.log(unknownType.push("Hello"));
}

// union 타입
let stringOrNumber: string | number;

let c = "sdf" || 12;
const arr5 = [12, "sdf"];

// 리터럴 타입
let d: "frontend" | "backend";

// enum 타입
// 숫자 열거형
enum WebDeveloper {
    FRONTEND,
    BACKEND,
}
console.log(WebDeveloper.FRONTEND); // 0
console.log(WebDeveloper.BACKEND); // 1

// 숫자 열거형 : 초기화 안함
// enum Browser { CHROME , SAFARI, WHALE= 10, BRAVE  }
// console.log(Browser.CHROME) // 0
// console.log(Browser.SAFARI) // 1
// console.log(Browser.WHALE) // 10
// console.log(Browser.BRAVE) // 11

// enum Browser {
//     CHROME = "ch",
//     SAFARI = "sa",
//     WHALE = "wh",
//     BRAVE = "br",
// }
// console.log(Browser.CHROME); // "ch"
// console.log(Browser.SAFARI); // "sa"
// console.log(Browser.WHALE); // "wh"
// console.log(Browser.BRAVE); // "br"

enum Browser {
    CHROME = "ch",
    SAFARI = 10,
    WHALE,
    BRAVE,
}
console.log(Browser.CHROME); // "ch"
console.log(Browser.SAFARI); // 10
console.log(Browser.WHALE); // 11
console.log(Browser.BRAVE); // 12

// void
const voidFunc = () => {
    console.log("Hello");
};
console.log(voidFunc); // undefined

// never
const neverFunc = () => {
    throw { message: "에러입니다", errorCode: 500 };
};
const infiniteFunc = () => {
    while (true) {}
};
const returnErrorFunc = () => {
    return neverFunc();
};

// 함수 타입
let getFunc: () => number;
let getFunc2: (a: number, b: number) => string;

let funcType2 = (a: number, b: string) => {
    return a.toString() + b;
};
