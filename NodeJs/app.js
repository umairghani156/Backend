// const tutorial = require('./tutorial.js');
// console.log(tutorial.sum(10,20));
// console.log(tutorial.PI);
// console.log(new tutorial.SomeMathObject());

const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on("tutorial",(num1, num2)=>{
    console.log("tutorial event has occured", num1 + num2);
    
});

eventEmitter.emit("tutorial", 10, 20);
eventEmitter.emit("tutorial");

class Person extends EventEmitter{
    constructor(name){
        super();
        this._name = name;
    }
    get name(){
        return this._name;
    }
}

let umair = new Person("Umair");
let faiz = new Person("Faiz");

umair.on('name',()=>{
    console.log('my name is ' + umair.name);
})
faiz.on('name',()=>{
    console.log('My name is ' + faiz.name);
    
})
faiz.emit('name');
umair.emit('name');