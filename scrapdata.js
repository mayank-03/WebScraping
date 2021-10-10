let minimist=require("minimist");
let axios=require("axios");
let argv=minimist(process.argv);
const axios = require('axios');
let promise=axios.get(args.source);
  promise.then(function (response) {
   let html=response.data;
    console.log(html);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })