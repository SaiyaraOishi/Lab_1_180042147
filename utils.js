const HelloFunction= require("./helloWorld");

//HelloFunction.Hello();

// console.log(HelloFunction.name);

//setInterval function

setInterval(()=>{
    HelloFunction.Hello();
}, 1000);

setTimeout(()=>{
    console.log( HelloFunction.name);
}, 5000);
