document.querySelector('h1').innerText = "it works!";

let elementDiv = document.querySelector('#divID');

let elementP = document.querySelectorAll('.p-class');

elementP.forEach(element =>{
    console.log(element);
});

let body = document.querySelector('body');

let btnChange = document.querySelector('#btnChange');
btnChange.addEventListener('click',function(){
    if(body.classList.contains('changeBG')){
        body.classList.remove('changeBG');

    }else{
        body.classList.add('changeBG');
    }
});

btnChange.addEventListener('mouseover',()=>{
    body.classList.add('changeAgain');
});

btnChange.addEventListener('mouseout',()=>{
    body.classList.remove('changeAgain');
});

let input = document.querySelector('#password');

input.addEventListener('keydown', ()=>{
    if(input.value.length <= 1){
        body.classList.add('red');
    }
    else if(input.value.length <= 2){
        body.classList.remove('red');
        body.classList.add('orange');
    }
    else if(input.value.length <= 3){
        body.classList.remove('orange');
        body.classList.add('yellow');
    }
    else if(input.value.length <= 4){
        body.classList.remove('yellow');
        body.classList.add('green');
    }
    else if(input.value.length <= 5){
        body.classList.remove('green');
        body.classList.add('blue');
    }
    else if(input.value.length <= 6){
        body.classList.remove('blue');
        body.classList.add('purple');
    }
    else if(input.value.length <= 7){
        body.classList.remove('purple');
        body.classList.add('pink');
    }
    else{
        body.classList.remove('pink');
    }
});