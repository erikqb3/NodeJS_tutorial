

const creatingANodeServer = function(){
  const http = require('http'); //global module
  const routes = require('./routes'); //local module (require route path)
  // const fs = require('fs');
  
  console.log(routes.someText)

  const server = http.createServer(routes.handler) //routes is the same as the arrow function that holds (req,res)
  // const server = http.createServer((req,res) => {
    /**
     const scrapStuff = function(){
       const fs = require('fs'); //File System
       // fs.writeFileSync("hellow.txt","Hellow Honest! This is Master Hazard"); //creates new file, 1st aug = file name, 2nd aug = file content
       
       // const party = ["Rotom","Flygon","Greninja","Scizor","Magcargo","Breloom"]
       // fs.writeFileSync("MyParty.txt",`${[...party]}`)
       
       const Honest = {
         name: "Honest",
         species: "Rotom",
         type1: "Electric",
         type2: "Ghost",
       }
       // const Charity = {
       //   name: "Charity",
       //   species: "Flygon",
       //   type1: "Ground",
       //   type2: "Dragon",
       // }
       // const Loyal = {
       //   name: "Loyal",
       //   species: "Greninja",
       //   type1: "Water",
       //   type2: "Dark",
       // }
       // const Diligence = {
       //   name: "Diligence",
       //   species: "Scizor",
       //   type1: "Bug",
       //   type2: "Steel",
       // }
       // const Gratitude = {
       //   name: "Gratitude",
       //   species: "Macargo",
       //   type1: "Fire",
       //   type2: "Rock",
       // }
       // const Humble = {
       //   name: "Humble",
       //   species: "Breloom",
       //   type1: "Grass",
       //   type2: "Fighting",
       // }
       
       // const {name, species} = Honest;
       // console.log(name, species)
       
       // const getPokemon = (...args) =>{
       // return args;
       // }
       
       // console.log(getPokemon(Honest,Charity,Loyal,Diligence,Gratitude,Humble))
       
       const fetchData = () =>{
         const promise = new Promise((resolve,reject) =>{
           setTimeout(() =>{
             resolve('Done');
           }, 1500); 
         });
         return promise;
       }
       
       setTimeout(() => {
         console.log('Timer is done!');
         fetchData()
           .then(text => {
             console.log(text);
             // return fetchData();  //if this isn't here, the next then statement returns undefined
           })
           .then(text2 =>{
             console.log(text2);
           });
       }, 2000)
     }
     
     */
    
    /**
     
     // const url = req.url;
     // const method = req.method;

     // console.log(req);
    // console.log(req.url, req.method, req.headers);
    // process.exit; 
     
export const requestHandler = (req, res) => {

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
     */
    
  // });
  
  server.listen(3000);
  
  //type localshost:3000 into search bar
}

creatingANodeServer();