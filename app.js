let iconCart = document.querySelector('.icon-cart');
let closeCart = document.querySelector('.close');
let body = document.querySelector('body');

iconCart.addEventListener('click', () => {
    body.classList.toggle('show-cart')
})

closeCart.addEventListener('click', () =>{
    body.classList.toggle('show-cart')
})