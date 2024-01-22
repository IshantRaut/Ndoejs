
const http=require('http');

const routes=require('./routes');
const express=require('express');

const server=http.createServer(routes);
const app=express();

server.listen(4000);
app.use((req,res,next)=>{
    console.log("In the middleware");
    next();//
});
app.use((req,res,next)=>{
    console.log("In the another middleware");
    res.send('<h1>Hello from Express</h1>');
});
app.listen(4000);
// const server=http.createServer((req,res)=>{

//     console.log('IShant');
//    console.log(req.url,req.method,req.headers);

//    const url=req.url;
//    if(url==='/home'){
//     res.write('<html>');
//     res.write('<head><title> My first PAge</title></head>');
//     res.write('<body><h1>Welcome Home</h1></body>');
//     res.write('</html>')
//     return res.end();
//    }
//     else if(url==='/about'){
//     res.write('<html>');
//     res.write('<head><title> My first PAge</title></head>');
//     res.write('<body><h1>Welcome to About Us</h1></body>');
//     res.write('</html>')
//     return res.end();
//    }
//    if(url==='/node'){
//     res.write('<html>');
//     res.write('<head><title> My first PAge</title></head>');
//     res.write('<body><h1>Welcome to my NodeJs Project</h1></body>');
//     res.write('</html>')
//     return res.end();
//    }
//     res.setHeader('Content-Type','text/html');
//     res.write('<html>');
//     res.write('<head><title> My first PAge</title></head>');
//     res.write('<body><h1>Hello</h1></body>');
//     res.write('</html>')
//     res.end();

// });

// })

// server.listen(4000);