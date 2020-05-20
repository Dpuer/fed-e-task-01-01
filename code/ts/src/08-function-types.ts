// 函数类型

export {}

function fun1 (a: number, b?: number, ...rest: number[]): string {
    return 'fun1'
}

fun1(100, 200)

fun1(100)

fun1(100, 200, 333)


const fun2: (a: number, b: number) => string = function (a: number, b: number): string {
    return 'func2'
}