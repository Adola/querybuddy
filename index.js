//This is a simplified, and better version of queerybuddy. 
//Usage: Just call $(".class").  
//EDIT: There's evidently a CDN for jQuery which basically does this but has functions too! 

var $ = function(selector){
  return document.querySelector(selector); 
}

