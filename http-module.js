const http=require("http");

const server=http.createServer((req,res)=>{
    res.write("Hello");
    res.end();
});

// server.listen(2147);

module.exports={server};
