function spinnerFactory(){
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
}

var spinner1 = spinnerFactory()
var spinner2 = spinnerFactory()