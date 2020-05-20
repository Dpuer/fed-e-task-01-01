/**
 * Mixed Any
 * @flow
 */


 function passMixed (value: mixed) {
    if (typeof value === 'string') value.substr(1)
    if (typeof value === 'number') value * value
 }

 passMixed('string')
 passMixedO(100)


 function passAny (value: any) {
    value.substr(1)
    value * value
 }

 passAny('string')
 passAny(100)