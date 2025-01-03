// // const tutorial = require('./tutorial.js');
// // console.log(tutorial.sum(10,20));
// // console.log(tutorial.PI);
// // console.log(new tutorial.SomeMathObject());

// const EventEmitter = require('events');
// // const eventEmitter = new EventEmitter();

// // eventEmitter.on("tutorial",(num1, num2)=>{
// //     console.log("tutorial event has occured", num1 + num2);
    
// // });

// // eventEmitter.emit("tutorial", 10, 20);
// // eventEmitter.emit("tutorial");

// // class Person extends EventEmitter{
// //     constructor(name){
// //         super();
// //         this._name = name;
// //     }
// //     get name(){
// //         return this._name;
// //     }
// // }

// // let umair = new Person("Umair");
// // let faiz = new Person("Faiz");

// // umair.on('name',()=>{
// //     console.log('my name is ' + umair.name);
// // })
// // faiz.on('name',()=>{
// //     console.log('My name is ' + faiz.name);
    
// // })
// // faiz.emit('name');
// // umair.emit('name');

// class Person extends EventEmitter{
//     constructor(name){
//         super();
//         this._name = name;
//     };
//     get name (){
//        return this._name;
//     }
// }

// let umair = new Person("Umair");
// let khan = new Person("Khan");

// umair.on("name", ()=>{
//     console.log("My name is " + umair._name);
// });

// umair.emit("name");

const readLine = require("readline");
const rl =readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

let num1 = Math.floor((Math.random() * 10) + 1);
let num2 = Math.floor((Math.random() * 10) + 1);

let answer = num1 + num2;

rl.question(`What is ${num1} + ${num2} ? \n`,(userInput)=>{
   if(userInput.trim()== answer){
    rl.close();
   }else{
         rl.setPrompt('Incorrect response please try again\n');
         rl.prompt();
         rl.on('line',(userInput)=>{
                if(userInput.trim()== answer){
                    rl.close();
                }else{
                    rl.setPrompt(`Your answer of ${userInput} is incorrect try again\n`);
                    rl.prompt();
                }
         })

   }
});

rl.on('close',()=>{
    console.log("Correct Answer");
})

