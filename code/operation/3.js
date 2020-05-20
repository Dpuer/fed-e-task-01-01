var arr = [12, 34, 32, 89, 4];

// 箭头函数
const result1 = arr.sort((a,b) => a - b)[0]
console.log(result1)
// 数组展开
const result2 = Math.min(...arr);
console.log(result2)