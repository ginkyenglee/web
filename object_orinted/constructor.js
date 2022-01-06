const d1 = new Date('2019-4-10');
console.log(d1.getFullYear());


function Person(name, height, weight){
    this.name = name;
    this.height = height;
    this.weight = weight;
    this.introduce = function(){
        console.log(`name :${this.name},height :${this.height},'weight':${this.weight}`)
    }
}

console.log(Person()); // return 되는게 아무것도 없기때문에 undefined.
console.log(new Person('gin',160,55));

patient = new Person('gin',150,40);
patient.introduce();