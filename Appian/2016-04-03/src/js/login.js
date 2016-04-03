/**
 * Created by JW on 2016/4/3.
 */
var password = (function(){
    return {
        'check' : function(){
            var $input = document.getElementsByTagName('input');
            if($input[0].value == $data.username && $input[1].value == $data.password){
                console.log('ok');
            } else {
                console.log($input[0].value + $input[1].value);
                alert('login fail');
            }
             return this;
        },
        'moveLeft' : function(){
            document.getElementById('password').setAttribute('class','left');
            document.getElementById('pinword').setAttribute('class','right');
        }
    }
})();

var pin = (function(){
    var pinArr = [];
    return {
        'click' : function(value){
            pinArr.push(value);
            console.log(pinArr);
        },
        'delete' : function(){

        },
        'check': function(){

        },
        'moveRight' : function(){
            document.getElementById('password').removeAttribute('class');
            document.getElementById('pinword').removeAttribute('class');
        }
    }
})();


window.onkeydown = function(ev){
    if(ev.keyCode == 13){
        password.check();
    }
};

document.getElementsByClassName('iconfont')[1].onclick = function(){
    password.moveLeft();
};

document.getElementsByClassName('iconfont')[3].onclick = function(){
    pin.moveRight();
};

var $td = document.getElementsByTagName('td');
console.log($td);

for(var i = 0; i < $td.length; i ++){
    $td[i].onclick = function(){
        var value = this.getAttribute('data-val');
        pin.click(value);
    }
}
