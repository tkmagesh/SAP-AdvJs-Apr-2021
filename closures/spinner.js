var spinner = (function(){
    var count = 0;

    function up(){
        return ++count;
    }

    function down(){
        return --count;
    }

    return {
        up : up,
        down : down
    }
})()

spinner.up() //=> 1
spinner.up() //=> 2
spinner.up() //=> 3
spinner.up() //=> 4

spinner.down() //=> 3
spinner.down() //=> 2
spinner.down() //=> 1
spinner.down() //=> 0
spinner.down() //=> -1


/*
The user should NOT be able to influence the outcome of 'up' and 'down' methods from outside

spinner.count = 10000
spinner.up() //=> SHOULD NOT return 10001

count = 10000
spinner.up() //=> SHOULD NOT return 10001
*/

