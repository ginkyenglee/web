function Person(name, height, weight){
    this.name = name;
    this.height = height;
    this.weight = weight;
}

Person.prototype.introduce = function(){
    console.log(`prototype name :${this.name},height :${this.height},'weight':${this.weight}`)
}


patient1 = new Person('gin',150,40);
patient1.introduce = function(){
    console.log('a')
}
patient1.introduce();

patient2 = new Person('ornrim',170,30);
patient2.introduce();