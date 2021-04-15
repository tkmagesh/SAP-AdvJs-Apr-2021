var isOddOrEven = (function(){
    var cache = {};
    return function(n){
        if (cache.hasOwnProperty(n))
            return cache[n];
        console.log('processing ', n);
        cache[n] = n % 2 === 0 ? 'even' : 'odd';
        return cache[n];
    }
})()

var isPrime = (function(){
    var cache = {};
    return function(n){
        if (cache.hasOwnProperty(n))
            return cache[n];
        console.log('processing ', n);
        if (n > 0 && n <= 3) {
            cache[n] = true;
        } else {
            cache[n] = true;
            for(var i=2; i<=(n/2); i++){
                if (n % i === 0){
                    cache[n] = false;
                    break;
                }
            }
        }
        return cache[n];
    }
})()