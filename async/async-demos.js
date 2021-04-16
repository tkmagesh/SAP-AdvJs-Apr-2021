(() => {
    function addSync(x,y){
        console.log(`   [@service] processing ${x} and ${y}`);
        const result = x + y;
        console.log(`   [@service] returning result`);
        return result;
    }

    function addSyncClient(x,y){
        console.log(`[@client] triggering the service`);
        const result = addSync(x,y);
        console.log(`[@client] result = ${result}`)
    }

    globalThis['addSyncClient'] = addSyncClient;

    function addAsync(x,y, callback){
        console.log(`   [@service] processing ${x} and ${y}`);
        setTimeout(function(){
            const result = x + y;
            console.log(`   [@service] returning result`);
            callback(result);
        }, 4000);
    }

    function addAsyncClient(x,y){
        console.log(`[@client] triggering the service`);
        addAsync(x,y, function(result){
            console.log(`[@client] result = ${result}`)
        });
    }

    /* http://callbackhell.com/ */

    globalThis['addAsyncClient'] = addAsyncClient;


    function addAsyncPromise(x,y){
        console.log(`   [@service] processing ${x} and ${y}`);
        return new Promise(function(resolveFn, rejectFn){
            //async operation
            setTimeout(function(){
                const result = x + y;
                console.log(`   [@service] returning result`);
                resolveFn(result);
            }, 4000);
        });
    }

    /* function addAsyncPromiseClient(x,y){
        console.log(`[@client] triggering the service`);
        var p = addAsyncPromise(x,y);
        p.then(function(result){
            console.log(`[@client] result = ${result}`)
        });
    } */

    
    async function addAsyncPromiseClient(x,y){
        console.log(`[@client] triggering the service`);
        var result = await addAsyncPromise(x,y);
        console.log(`[@client] result = ${result}`)
    }

    globalThis['addAsyncPromiseClient'] = addAsyncPromiseClient;
})();