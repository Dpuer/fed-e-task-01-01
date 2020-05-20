# 王昱旸 | Part 1 | 模块一

## 简答题

### 第一题

#### 题目

1、请说出下列最终的执行结果，并解释为什么？

``` javascript
var a = [];
for (var i = 0; i < 10; i++) {
    a[i] = function() {
        console.log(i)
    }
};

a[6]();
```

#### 解答
执行结果为：10
原因：用var申明的变量`i`为全局变量，不会因为`for`语句的包裹而影响；当然执行`a[6]()`方法的时候`for`语句已经执行完毕，故此时输出的`i`为累加后的最终结果10，且数组`a`中所有的方法输出的都为10

### 第二题

#### 题目
2、请说出下列最终的执行结果，并解释为什么？

``` javascript
var tmp = 123;

if (true) {
    console.log(tmp)
    let tmp;
}
```

#### 解答
执行结果为：Cannot access 'tmp' before initialization
原因：`if`语句中`let`申明的tmp为块级作用域变量，会覆盖顶部`var`申明的全局变量，且由于`let`申明的变量不存在变量提升，所以在定义前的输出语句会抛出错误`Cannot access 'tmp' before initialization`

### 第三题

#### 题目
3、结合ES6新语法，用最简单的方式找出数组中的最小值

``` javascript
var arr = [12, 34, 32, 89, 4];
```

#### 解答

``` javascript
// 箭头函数
const result1 = arr.sort((a,b) => a - b)[0]
console.log(result1)
// 数组展开
const result2 = Math.min(...arr);
console.log(result2)
```

### 第四题

#### 题目
4、请详细说明var，let，const三种申明变量方式之间的具体差别

#### 解答
区别主要有以下几点：
+ 作用域：var申明的变量为全局作用域，let和const申明的变量为块级作用域
+ 变量提升问题：var申明的变量由于JavaScript语言的BUG（一说特性）会存在变量提升的问题，即变量在申明之前可以被读取，其值为undefined；而let和const申明的变量就不会有这个问题
+ 是否可修改：const申明的值为常量，是不可修改的，var和let申明的值可以被后续修改；这里需要额外注意的有两点：其一、由于const申明的值不可后续修改所以在定义时必须有初始值，其二、const定义的值若为引用类型（Object、Array）只要其指向的内存指针不变就不会引发报错。

### 第五题

#### 题目
5、请说出下列最终的执行结果，并解释为什么？

``` javascript
var a = 10;
var obj = {
    a: 20,
    fn () {
        setTimeout(() => {
            console.log(this.a)
        })
    }
}

obj.fn();
```

#### 解答
执行结果为：20
原因：正常情况下函数中的this会指向函数调用时的作用域，即代码顶部定义的10，但是这里使用了箭头函数this指向为定义时的obj的this故为20

### 第六题

#### 题目
6、简述`Symbol`类型的用途？

#### 解答
Symbol的主要用途有：
+ 由于Symbol的唯一性，使得Symbol很适合作为对象的私有属性
+ 通过Symbol内置常量让自定义对象实现js内置接口

### 第七题

#### 题目
7、说说什么的浅拷贝，什么是深拷贝

#### 解答
一般来说浅拷贝和深拷贝都是真对引用类型的数据来说的
浅拷贝就是将新变量的指针指向原始变量内存地址，即同时引用同一个内存地址的数据；这种情况下原始变量一旦变化新变量也会随之变化
深拷贝则是将原始变量内的数据重新在内存中开辟空间另外存入；这种情况下两个变量是完全独立的，不会由于改动而互相影响

### 第八题

#### 题目
8、谈谈你是如何理解JS异步编程的，Event Loop是做什么的，什么是宏任务、什么是微任务？

#### 解答
+ 异步编程：由于JavaScript语言是单线程的，多个任务进行时需要排队，在遇到耗时任务时会产生假死，所以采用异步模式来处理相关业务。
+ Event Loop：主线程从"任务队列"中读取事件，这个过程是循环不断的，所以整个的这种运行机制又称为Event Loop（事件循环）。其作用就是不断监视当前任务队列是否有宏任务，有宏任务则继续执行宏任务，没有宏任务则执行微任务队列中所有的微任务。
+ 宏任务：宏任务通常来说就是同步代码本身产生的任务，常见的有以下几种：
    + 整体script代码
    + setTimeout
    + setInterval
    + setImmediate (Node独有)
    + requestAnimationFrame (浏览器独有)
    + I/O
    + UI rendering (浏览器独有)
+ 微任务：微任务通常来说就是需要在当前 task 执行结束后立即执行的任务，常见的有以下几种：
    + process.nextTick (Node独有)
    + Promise（Generator、async await）
    + Object.observe
    + MutationObserver

### 第九题

#### 题目
9、将下面异步代码使用Promise进行改进
``` javascript
setTimeout(function() {
    var a = 'hello';
    setTimeout(function() {
        var b = 'lagou';
        setTimeout(function() {
            var c = 'I love U';
            console.log(a + b + c);
        }, 10)
    }, 10)
}, 10)
```

#### 解答
``` javascript
new Promise((resolve) => {
    var a = 'hello';
    resolve(a) 
}).then((value) => {
    return new Promise((resolve) => {
        var b = 'lagou';
        resolve(`${value} ${b}`) 
    })
}).then((value) => {
    return new Promise(() => {
        var c = 'I love U';
        console.log(`${value} ${c}`);
    })
})
```

### 第十题

#### 题目
10、请简述TypeScript与JavaScript之间的关联关系

#### 解答
+ TypeScript 从核心语言方面和类概念的模塑方面对 JavaScript 对象模型进行扩展。
+ JavaScript 代码可以在无需任何修改的情况下与 TypeScript 一同工作，同时可以使用编译器将 TypeScript 代码转换为 JavaScript。
+ TypeScript 通过类型注解提供编译时的静态类型检查。
+ TypeScript 中的数据要求带有明确的类型，JavaScript不要求。
+ TypeScript 为函数提供了缺省参数值。
+ TypeScript 中引入了模块的概念，可以把声明、数据、函数和类封装在模块中。

### 第十一题

#### 题目
11、请谈谈你所认为的TypeScript的优缺点

#### 解答
优点：
+ 静态检查
+ 提升大型项目开发效率
+ 提升多人协作开发效率
+ 良好的编辑器支持

缺点：
+ 需要额外的学习成本
+ 编写申明的工作量在短平快的项目中会产生额外的成本
+ 浏览器环境不能直接支持
+ 相较于JavaScript在灵活性上有所欠缺