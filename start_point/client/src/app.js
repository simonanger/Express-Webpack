var UI = require('./views/ui');
var tries = require('./views/try');

var app = function(){
  new UI();
}

console.log(tries);

window.addEventListener('load', app);
