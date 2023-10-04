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
