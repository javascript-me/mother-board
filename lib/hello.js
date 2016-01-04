var sum = (a, b = 6) => (a + b);

var square = (b) => {
    "use strict";
    return b * b;
};

var variable = 120;

class Student{
    constructor(info){
        this.name = info.name;
        this.id = info.id
    }
    getName(){
        return this.name;
    }
}

export {sum, square, variable, Student};
