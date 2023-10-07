const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;
  switch(url){
    case "/":
      res.setHeader('Content-Type',"text/html");
      res.write('<html>');
      res.write('<head><title>Assignment 1</title></head>');
      res.write(
        `<body>
          <h1>My Game</h1>
            <ul>
              <li>New Game</li>
              <li>Load Game</li>
            </ul>
        </body>`);
      res.write('</html>');
      return res.end();
    case "/NewGame":
      res.setHeader('Content-Type',"text/html");
      res.write('<html>');
      res.write('<head><title>Assignment 1</title></head>');
      res.write(        
        `<body>
          <form
            action="/PlayGame"
            method="POST">
          <input 
            type="text"
            name="username">
          <button>Go!</button>
        </body>`);
      res.write('</html>');
      return res.end();
    case "/LoadGame":
      res.setHeader('Content-Type',"text/html");
      res.write('<html>');
      res.write('<head><title>Assignment 1</title></head>');
      res.write(        
        `<body>
          <h1>Files</h1>
            <ul>
              <li>User 1</li>
              <li>User 2</li>
              <li>User 3</li>
            </ul>
            <button>Back</button>
        </body>`);
      res.write('</html>');
      return res.end();
    case "/PlayGame":
      const body = [];
      req.on('data', chunk => {
        body.push(chunk);
      })
      req.on('end', ()=> {
        const parsedBody = Buffer.concat(body).toString();
        // console.log(parsedBody); //username=whatever-the-user-entered
        console.log(parsedBody.split('=')[1]); //whatever-the-user-entered
      })
      res.statusCode = 302;
      res.setHeader('Location',"/")
      return res.end();  
    default:
      break;
  }
});

server.listen(3000);