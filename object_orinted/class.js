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

const patient1 = new Person("gin",160,55);
console.log(patient1.introduce());

const patient2 = new Person("ornrim",165,60);
patient2.introduce = function(){
    return ("revist needed!")
}
console.log(patient2.introduce());