// 타입 추론 없이 타입 선언하기

// 변수에 타입 선언

let a: number; // 선언만
let b: string = "Hello";
a = 12; // Good
// a = "Bye"; // Error : 'string' 형식은 'number' 형식에 할당할 수 없습니다.
b = "Bye"; // Good
// b = 12; // Error : 'number' 형식은 'string' 형식에 할당할 수 없습니다.

const c: string = "Hi";
const arr1: number[] = [12, 35];
const arr2: [number, boolean] = [12, true];
const arr3: (number | boolean)[] = [12, true];

const obj1: {
    key1: boolean;
    key2: string;
    key3: number;
} = {
    key1: true,
    key2: "Hi",
    key3: 123,
};

// 함수 선언할 때 타입 선언

function fun1(a: number, b: number): string {
    const sum: number = a + b;
    return sum.toString();
}

const fun2 = (a: number, b: number): string => {
    const sum: number = a + b;
    return sum.toString();
};

const fun3 = (
    a: number,
    b: number,
    c: (d: number, e: number) => string
): string => {
    return c(a, b);
};
console.log(fun3(1, 3, fun2));
