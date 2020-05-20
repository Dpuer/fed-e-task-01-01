// 类的只读属性

export {}

class Person {
    public name: string // = 'init name'
    private age: number
    protected readonly gender: boolean 

    constructor (name: string, age: number) {
        this.name = name
        this.age = age
        this.gender = true
    }

    sayHi (msg: string): void {
        console.log(`HI, ${msg}`)
    }
}


const tom = new Person('tom', 18)
console.log(tom.name)
