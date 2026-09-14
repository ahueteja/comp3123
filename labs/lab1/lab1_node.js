/* Purpose 
We''ll use node to create a server and then listen on that server for
 any incoming requests. then return a reponse. 

*/

var http = require('http')

http.createServer((request, reponse)=>{
    reponse.writeHead(200, {
        "Content-Type": "text/html"
    })
    reponse.end("The server is now running successfully and listening")

}).listen(8080)