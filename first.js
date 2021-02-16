document.body.classList.add(localStorage.getItem('pageColor')|| 'red');


var el =document.querySelectorAll('.switcher li'),
 classList= [];
 for(i=0 ;i<el.length ; i++)
   {  classList.push(el[i].getAttribute('data-color'));
    console.log(classList);
  el[i].addEventListener('click', function(){
document.body.classList.remove(...classList);
document.body.classList.add(this.getAttribute('data-color'));
localStorage.setItem('pageColor'  , this.getAttribute('data-color'));
console.log(localStorage.getItem('pageColor'));


} ,false);
   };