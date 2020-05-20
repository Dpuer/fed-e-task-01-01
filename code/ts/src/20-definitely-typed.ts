// 类型申明

import { camelCase } from 'lodash'
import qs from 'query-string'

qs.parse('?a=1&b=2')

// declare function camelCase(params: string): string

const res = camelCase('hello typed')