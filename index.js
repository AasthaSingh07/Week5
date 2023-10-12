const fs = require('node:fs');

const herolist = require("./assets/heroes-list.json");
const herocity = require("./assets/city.json");
const heroposter = require("./assets/poster.json");
const data = require("./simple/simple.json");


const randomHeroIndex = Math.floor(Math.random() * herolist.length);
const randomCityIndex = Math.floor(Math.random() * herocity.length);
const power = Math.round(Math.random() * 10);

const selectedHero = herolist[randomHeroIndex];
const selectedCity = herocity[randomCityIndex];
const selectedPoster = heroposter[randomHeroIndex];

const newData = {
  avengers: [
    {
      title: selectedHero, 
      city: selectedCity, 
      power: power,
      poster: selectedPoster
    }
  ]
};

// Merge newData with the existing data object
data.avengers.push(...newData.avengers);

console.log(data);
fs.writeFileSync("simple/simple.json", JSON.stringify(data, null, 2), "utf-8");

// let writeHero = function(){
//     fs.writeFile('simple/simple.json','{"avengers" : []}',function(error, data){
//         if(error){
//             console.warn("Error", error);
//         }
//     })

// }

// if(fs.existsSync("simple/simple.json")){
//     console.log("folder existed")
//     writeHero();

// }else{
//     fs.mkdirSync("simple");
//     writeHero();
//     console.log("created");
// }
