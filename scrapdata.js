let minimist = require("minimist");
let axios = require("axios");
let jsdom = require("jsdom");
let excel4node = require("excel4node");
let pdf = require("pdf-lib");
let args = minimist(process.argv);
// donwload using axios
// read using jsdom
// make excel using excel4node
// make pdf using pdf-lib
let responseKaPromise = axios.get(args.source);
responseKaPromise.then(function(response){
 let html = response.data;
 let dom = new jsdom.JSDOM(html);
 console.log(dom);
})
 .catch(function (error) {
   // handle error
   console.log(error);
 })
 
