// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// var xhr = new XMLHttpRequest();

function getRandomString(length){
    return new Promise((resolve,reject)=>{
      var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
      var xhr = new XMLHttpRequest();
      xhr.open('GET', `https://ciprand.p3p.repl.co/api?len=${length}&count=10`, true);
      xhr.send();
      xhr.onload = function(){
      let argValidator = /[A-Za-z0-9]/g;
      if (argValidator.test(length) && xhr.readyState === 4 && xhr.status === 200){
          var json = JSON.parse(xhr.responseText);
          resolve(json);
          }else{
          reject(xhr.responseStatus)}
      }
    })
  }
  
  async function randomStringByLength(length){
    if ((typeof(length) !== 'number')|| (length <= 0) || (length % 1 !== 0)){
      return "Please enter a positive whole number."
    }
    let data = await getRandomString(length);
    console.log(data.Strings.forEach((string)=> console.log(string)))
  }
  
  randomStringByLength(9);