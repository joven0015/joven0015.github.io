//Navbar
let searcBtn = document.querySelector('.searchBtn');
let closeBtn = document.querySelector('.closeBtn');
let searchBox = document.querySelector('.searchBox');
let navigation = document.querySelector('.navigation');
let menuToggle = document.querySelector('.menuToggle');
let header = document.querySelector('header');
let cart = document.querySelector('#cart');
let cartBox = document.querySelector('#cartBox');
let bodyContainer = document.querySelector('#bodyContainer');
let closecart = document.querySelector('#closecart')
    searcBtn.onclick = function(){
        searchBox.classList.add('active');
        closeBtn.classList.add('active');
        searcBtn.classList.add('active');
    }
    closeBtn.onclick = function(){
        searchBox.classList.remove('active');
        closeBtn.classList.remove('active');
        searcBtn.classList.remove('active');
    }
    menuToggle.onclick = function(){
        header.classList.toggle('open');
    }
   













    //Slideshow of homepage 
    let slideIndex = 1;
    showSlides(slideIndex);
    
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1}    
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";
    }