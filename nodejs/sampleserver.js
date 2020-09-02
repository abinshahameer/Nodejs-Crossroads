var http=require("http")
var fs=require('fs')
var url=require('url')

http.createServer(function(req,res){
    var q=url.parse(req.url,true)
    // console.log(q.pathname)
    if(req.url==="/")
    {
    fs.readFile('samplehtml.html',function(err,data){
        res.writeHead(200,{'content-Type':'text/html'})
        res.write(data)
        res.end()
    })
}else if(req.url==='/signup')
{
    fs.readFile('signup.html',function(err,data){
    res.writeHead(200,{'content-Type':'text/html'})
    res.write(data)
    res.end()
}
    )
}
else if(q.pathname==='/signupaction')
{
    res.writeHead(200,{'content-Type':'text/html'})
    res.write('<h1>'+q.query.email+'</h2')
    res.end()
}
else{
    res.writeHead(404,{'content-Type':'text/html'})
    res.write("error")
    res.end()
}
   
}).listen(7000,function(){
    console.log("server started")
})


// function server(req,res)
// {
// res.write('crossroads')
// res.end()
// }