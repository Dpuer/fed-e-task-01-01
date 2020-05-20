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
