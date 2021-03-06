/* 
function parseArg(n){
    if (Array.isArray(n)) return add.apply(this, n);
    if (typeof n === 'function') return parseArg(n());
    return isNaN(n) ? 0 : parseInt(n,10);
}
function add(){  
   return arguments.length <= 1 ? parseArg(arguments[0]) : parseArg(arguments[0]) + add(Array.prototype.slice.call(arguments, 1));
} 
*/

//ES6 - using the rest & spread operators (Array)
function parseArg(n){
    if (Array.isArray(n)) return add(...n);
    if (typeof n === 'function') return parseArg(n());
    return isNaN(n) ? 0 : parseInt(n,10);
}
function add(...args){  
   return args.length <= 1 ? parseArg(args[0]) : parseArg(args[0]) + add(args.slice(1));
}