var hamburger = document.querySelector('.hamburger');
var nav = document.querySelector('nav');
var menu = document.querySelector('.right');
hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
    nav.classList.toggle('fixed');
})


window.addEventListener('scroll', function () {
    var nav = document.querySelector('nav');
    nav.classList.toggle('sticky', window.pageYOffset > 0);
})


   var totop = document.querySelector('.totop');
//  var header = document.querySelector('header');
 window.addEventListener('scroll',function(){
     totop.classList.toggle('active',window.pageYOffset>600);
 })

var totop = document.querySelector('.totop');
totop.addEventListener('click',function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
})