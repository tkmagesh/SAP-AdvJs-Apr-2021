//offers privacy at the cost of memory efficiency
function Spinner(){
    var count = 0;
    this.up = function up(){
        return ++count;
    };
    this.down = function down(){
        return --count;
    };
}


//offers memory efficiency at the cost of privacy
function Spinner(){
    this.__count__ = 0;
}

Spinner.prototype.up = function up() {
    return ++this.__count__;
}

Spinner.prototype.down = function down() {
    return ++this.__count__;
}

//using Symbols

let Spinner = (() => {
    var countSymbol = Symbol('count');

    function Spinner(){
        this[countSymbol] = 0;
    }

    Spinner.prototype.up = function up() {
        return ++this[countSymbol];
    }

    Spinner.prototype.down = function down() {
        return ++this[countSymbol];
    }

    return Spinner;
})();