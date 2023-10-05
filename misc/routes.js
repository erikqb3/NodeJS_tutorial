const fs = require('fs');

const requestHandler = (req, res) => {

    const url = req.url;
    const method = req.method;


  if (url === '/'){
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button>Submit</button></input></form></body>');
    res.write('</html>');
    return res.end(); //the part where NodeJS will send all the written stuff over to the client
  }
  if (url === '/message' && method==="POST"){
    const body = [] //request body
    req.on('data', (chunk) => {
      console.log(chunk,"Chunk")
      body.push(chunk);
    }); //allows us to listen to certain events, the data event will be fired and activate a function whenever a new chunk of data is ready to be read 
    return req.on('end',()=>{ //this is an event listener that will activate every res.end() The return prevents the code from reaching 113 prematurely 
      const parsedBody = Buffer.concat(body).toString();
      // console.log(parsedBody,"parsedBody")
      const message = parsedBody.split('=')[1]; //splitting parsedBody on "=" and getting the content after the "="
      // fs.writeFileSync('message.txt',"HONEST"); // writeFile v writeFileSync
      // fs.writeFileSync('message.txt', message) //Sync will block further code until file is written (has drawbacks), use if file can be quickly created. Otherwise use writeFile
      fs.writeFile('message.txt',message, (err)=>{ //third arg is callback function
        res.statusCode = 302;
        res.setHeader('Location','/');
        return res.end();//if this isn't returned, will get error from below code
      })
    })
  }
  
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title></head>');
  res.write('<body><h1>Hellow Honest! This is Master Hazard</h1></body>');
  res.write('</html>');
  res.end(); //the part where NodeJS will send all the written stuff over to the client
}


// module.exports = requestHandler;

// module.exports = {
//   handler: requestHandler,
//   someText: "This was part of the tutorial",
// }

// module.exports.handler = requestHandler;
// module.exports.someText = "More than one way to export mass content"

exports.handler = requestHandler;
exports.someText = "More than one way to export mass content"