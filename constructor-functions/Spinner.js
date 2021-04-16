function Spinner(){
    var count = 0;
    this.up = function up(){
        return ++count;
    };
    this.down = function down(){
        return --count;
    };
}