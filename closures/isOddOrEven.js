var isOddOrEven = (function(){
    cache = {};
    return function(n){
        if (cache.hasOwnProperty(n))
            return cache[n];
        console.log('processing ', n);
        cache[n] = n % 2 === 0 ? 'even' : 'odd';
        return cache[n];
    }
})()