
var $=function(select){
  return document.querySelector(select)
}
var $$=function(select){
  return document.querySelectorAll(select)
}
var len=$$('#form1 input').length;
for (var i=0;i<len;i++){
  $$('#form1 input')[i].onkeyup=function(){
    console.log(111)
  }
}
