/**
 * 对象类型
 * @flow
 */

const obj1: { foo: String, bar: number } = { foo: 'string', bar: 100}
const obj2: { foo?: String, bar: number } = { bar: 100}
const obj3: { [string]: string } = {}

obj3.key1 = 'key1'
obj3.key2 = 'key2'