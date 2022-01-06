const memberArray = ['gin','doni','ornrim'];

const memberObject = {
    manager :'doni',
    developer : 'gin',
    designer : 'ornrim',
    printAll : function(){
        console.log(this.manager);
    }
}

memberObject.printAll();