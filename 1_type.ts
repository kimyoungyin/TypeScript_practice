// 타입 추론을 활용하여 타입 선언하기

// 변수에 타입 선언

let a: number; // 타입 추론이 불가하므로 타입 선언 필요
// let a; // 선언만 할 때 아무 타입도 지정하지 않으면 "any" 타입으로 선언됩니다.(권장 안함)
let b = "Hello"; // 할당(초기화)된 값의 타입으로 타입 추론(string)
a = 12; // Good
// a = "Bye"; // Error : 'string' 형식은 'number' 형식에 할당할 수 없습니다.
b = "Bye"; // Good
// b = 12; // Error : 'number' 형식은 'string' 형식에 할당할 수 없습니다.

const c = "Hi"; // 할당(초기화)된 값의 타입으로 타입 추론(string)
const arr1 = [12, 35]; // 숫자 타입으로만 이루어진 배열로 타입 추론

// 목적에 따라 타입을 선언해줘야 하는 경우
const arr2: [number, boolean] = [12, true]; // 타입 선언 필요 : 선언하지 않으면  (number | boolean)[] 유니온 타입으로 추론됨
const arr3 = [12, true]; // 타입 선언 불필요 : 원하는 타입으로 추론

const obj1 = {
    key1: true,
    key2: "Hi",
    key3: 123,
}; // 각각 프로퍼티의 값의 타입으로 타입 추론

// 함수 선언할 때 타입 선언

function fun1(a: number, b: number) {
    // return 타입 선언 불필요 : return 타입이 코드 문맥상 확실히 string
    const sum = a + b; // 타입 선언 불필요 : 타입이 코드 문맥상 확실히 number
    return sum.toString();
}

const fun2 = (a: number, b: number) => {
    // return 타입 선언 불필요 : return 타입이 코드 문맥상 확실히 string
    const sum = a + b; // 타입 선언 불필요 : 타입이 코드 문맥상 확실히 number
    return sum.toString();
};

const fun3 = (a: number, b: number, c: (d: number, e: number) => string) => {
    // return 타입 선언 불필요 : return 타입이 코드 문맥상 확실히 string
    return c(a, b);
};
console.log(fun3(1, 3, fun2));
