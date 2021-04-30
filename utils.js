const HelloFunction= require("./helloWorld");

//HelloFunction.Hello();

// console.log(HelloFunction.name);

//setInterval function

setInterval(()=>{
    HelloFunction.Hello();
}, 500);