const bar = document.getElementById('bar');
const shut = document.getElementById('close')
const nav = document.getElementById('navbar');

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
    console.log('hello')
  });
}


if(shut){
shut.addEventListener('click',()=>{
    nav.classList.remove('active'); 
})
}

let mainImg = document.getElementById('Mainimg');
let smallImg = document.querySelectorAll('.small-img');
smallImg[0].onclick = function(){
  mainImg.src = smallImg[0].src
}
smallImg[1].onclick = function(){
  mainImg.src = smallImg[1].src
}
smallImg[2].onclick = function(){
  mainImg.src = smallImg[2].src
}
smallImg[3].onclick = function(){
  mainImg.src = smallImg[3].src
}