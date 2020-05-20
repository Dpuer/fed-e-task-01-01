/**
 * 特殊类型
 * @flow
 */

// 字面量类型
const a: 'foo' = 'foo'

// 联合类型
const type: 'success' | 'warning' | 'danger' = 'success'

type StringOrNumber = string | number
const b: StringOrNumber = 'string' // 100

// maybe类型
const gender: ?number = undefined