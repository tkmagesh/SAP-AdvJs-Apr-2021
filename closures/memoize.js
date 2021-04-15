function memoize(fn){
    var cache = {};
    return function(n){
        if (cache.hasOwnProperty(n))
            return cache[n];
        console.log('processing ', n);
        cache[n] = fn(n);
        return cache[n];
    }
}

var isOddOrEven = memoize(function(n){
    return n % 2 === 0 ? 'even' : 'odd'
});

var isPrime = memoize(function(n){
    if (n > 0 && n <= 3) {
        return true;
    } else {
        for(var i=2; i<=(n/2); i++){
            if (n % i === 0){
                return false;
            }
        }
    }
    return true;
})


//generic version 
function memoize(fn){
    var cache = {};
    return function(){
        var key = JSON.stringify(arguments);
        if (cache.hasOwnProperty(key))
            return cache[key];
        cache[key] = fn.apply(this, arguments);
        return cache[key];
    }
}

var add = memoize(function(x,y){
    console.log('processing ', arguments);
    return x + y;
});