// 泛型

export {}

function creatNumberArray (length: number, value: number): number[] {
    const arr = Array<number>(length).fill(value)
    return arr
}

function creatArray<T> (length: number, value: T): number[] {
    const arr = Array<number>(length).fill(value)
    return arr
}

// const res = creatNumberArray(3, 100)

const res = creatArray<string>(3, 'foo')