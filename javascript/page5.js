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

cart.onclick = function (){
    bodyContainer.classList.add('openCartBox');
}
    // cart.onclick = function(){
    //     bodyContainer.classList.add('openCartBox');
    //     cartBox.classList.add('slideleft');
    //     cart.classList.add('remove');
    //     cart.classList.add('hidden');
    //     closecart.classList.add('show');
    // }
    // closecart.onclick =function(){
    //     bodyContainer.classList.remove('openCartBox');
    //     closecart.classList.remove('show');
    //     cart.classList.remove('hidden');
    // }

   
 