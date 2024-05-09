let iconCart = document.querySelector('.icon-cart');
let closeCart = document.querySelector('.close');
let body = document.querySelector('body');
let lisProductHTML = document.querySelector('.list-product');

let listProducts = [];


iconCart.addEventListener('click', () => {
    body.classList.toggle('show-cart')
})

closeCart.addEventListener('click', () =>{
    body.classList.toggle('show-cart')
})


const addDataToHTML = () => {
    lisProductHTML.innerHTML = '';
    if(listProducts.length > 0){
        listProducts.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.classList.add('item1');
            newProduct.innerHTML= `
            <img src="${product.image}"alt="fone de Ouvido">
            <h2>${product.name}</h2>
            <div class="preco">R$${product.preco}</div>
            <button class="addcart">Adicionar ao Carrinho</button>
            `;
            lisProductHTML.appendChild(newProduct);
        })
    }
}

const initApp = () => {
    fetch('products.json')
    .then(response => response.json())
    .then(data => {
        listProducts = data;
        addDataToHTML();
    })
}
initApp();