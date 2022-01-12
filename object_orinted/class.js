class Person{
    constructor(name, height, weight){ // python의 __init__(self)과 유사
        this.name = name;
        this.height = height;
        this.weight = weight;
    }

    introduce(){
        return (`name : ${this.name},height :${this.height},'weight':${this.weight}`);
    }
}

class Patient extends Person{
    constructor(name, height, weight, disease, startDay){
        super(name,height,weight);
        this.disease = disease;
        this.startDay = startDay;
    }
    introduce(){
        return (`${super.introduce()} disease : ${this.disease}(${this.startDay}~)`);
    }
}

const person1 = new Person("gin",160,55);
console.log(person1.introduce());

const person2 = new Person("ornrim",165,60);
person2.introduce = function(){
    return ("revist needed!")
}
console.log(person2.introduce());

const person3 = new Patient("qire",196,60,"cancer","20000101");

console.log(person3.introduce());