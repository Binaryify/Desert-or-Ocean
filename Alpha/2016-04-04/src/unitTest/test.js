var $=function(select){
  return document.querySelector(select)
}
var $$=function(select){
  return document.querySelectorAll(select)
}
var arr=[];
$('#phoneInput').onclick=function(ev){
  console.log(ev.target.tagName=='LI')
  if(ev.target.tagName=='LI'&&ev.target.getAttribute('data-val')&&arr.length<4){
    console.log(ev.target.getAttribute('data-val'))
    arr.push(ev.target.getAttribute('data-val'))
    console.log(arr)
    var arrLen=arr.length;
    (function(){
      for(var i=0;i<arrLen;i++){
        $$('.inputPoint li')[i].classList.add('active')
        console.log($$('.inputPoint li'))
      }
    })()
  }
  // if(arr.length==4){
  //   return false
  // }
  // arr.forEach(function(item){
  //   console.log(item)
  // })


}
$('.fanhui').onclick=function(){
  var arrLen=arr.length;
  for(var i =0;i<arrLen;i++){
    $$('.inputPoint li')[i].classList.remove('active')
  }
  arr=[]
}

// $('.inputPoint')
