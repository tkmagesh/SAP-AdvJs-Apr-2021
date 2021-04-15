function parseArg(n){
    if (Array.isArray(n)) return add.apply(this, n);
    if (typeof n === 'function') return parseArg(n());
    return isNaN(n) ? 0 : parseInt(n,10);
}
function add(){  
    var result = 0;
    for(var index = 0; index < arguments.length; index++){
        result += parseArg(arguments[index])
    }
    return result;
}