function sum(a){
    return function(b){
            return b ? sum(a + b): a;
    }
}

var s = sum(8)(2)(4)()
console.log(s)