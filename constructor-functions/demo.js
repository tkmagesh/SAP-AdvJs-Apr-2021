function Employee(id, name, salary){
    //this -> new object
    this.id = id;
    this.name = name;
    this.salary = salary;
    //this -> returned by default

    this.display = function(){
        console.log('ID = ', this.id, ' name = ', this.name, ' salary = ', this.salary);
    };
}