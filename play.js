const server=http.createServer((req,res)=>{
    res.write('</html>')
    return res.end();
   }
   if(url==='/node'){
   else if(url==='/node'){
    res.write('<html>');
    res.write('<head><title> My first PAge</title></head>');
    res.write('<body><h1>Welcome to my NodeJs Project</h1></body>');
    res.write('</html>')
    return res.end();
   }
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title> My first PAge</title></head>');
    res.write('<body><h1>Hello</h1></body>');
    res.write('</html>')
    res.end();
    
});
server.listen(4000);