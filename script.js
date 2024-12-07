
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var body = document.querySelector("body");



const display = document.querySelector(".display .result");
function appendToDisplay(input){
    display.value += input;
    
}
function del(){
    display.value = display.value.slice(0, -1);

}
function reset (){
    display.value = "";
}
function calculate (){
    try{
        display.value =eval(display.value)
    }
    catch (error){
        display.value ="erro"
    }
    
    
}
two.addEventListener('click',function(){
    body.classList.add('active1');
    body.classList.remove('active2');
   
})
one.addEventListener('click',function(){
    body.classList.remove('active1');
    body.classList.remove('active2');
   
})
three.addEventListener('click',function(){
    body.classList.remove('active1');
    body.classList.add('active2');
    
})