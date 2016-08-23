// Alex Anderson (c) 2016, MIT license
var http = require("http");
var fs   = require("fs");

// Set server port, default is 80 (http)
const PORT = 80; // jshint ignore: line

http.createServer(function(req, res){
  if(req.url === "/") req.url = "/index.html";
  // Make sure req is not requesting files in other dirs
  if(typeof req.url == "string" && req.url.indexOf("..") == -1){
    fs.readFile("public" + req.url, function(err, data){
      // Mimetypes for files
      var mime =
      {
        "js"   : "text/JavaScript",
        "html" : "text/html",
        "css"  : "text/css",
        "ico"  : "image/icon"
      }
      [
        // Split req.url by .'s and get the last string in array
        (req.url).split(".")[(req.url).split(".").length - 1]
      ];
      // Only send mimetype if it is not undefined
      if (typeof mime != "undefined") res.setHeader("context-type", mime);
      // If you don't get an error, send the file
      if (!err) fs.createReadStream("public" + req.url).pipe(res);
      // Or send 404 page not found (Add console.log(req.url) to see missing files)
      if (err)  res.end("404 page not found");
    });
  }
}).listen(PORT);

// Tell user server is online
console.log("Server online on port " + PORT);
