let iconCart = document.querySelector('.icon-cart');
let closeCart = document.querySelector('.close');
let body = document.querySelector('body');
let lisProductHTML = document.querySelector('.list-product');
let listCartHTML = document.querySelector('.listCart');
let iconCartSpan = document.querySelector('.icon-carrt span');

let listProducts = [];
let carts = [];


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
            newProduct.dataset.id = product.id;
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

lisProductHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if(positionClick.classList.contains('addcart')){
        let product_id = positionClick.parentElement.dataset.id;
        addToCart(product_id);
    }
})

const addToCart = (product_id) => {
    let positionThisProductInCart = carts.findIndex((value) => value.product_id == product_id);
    if(carts.length <= 0) {
        carts = [{
            product_id: product_id,
            quantity: 1
        }]
    }
    else if(positionThisProductInCart < 0){
        carts.push({
            product_id: product_id,
            quantity: 1
        })
    }
    else{
        carts[positionThisProductInCart].quantity = carts[positionThisProductInCart].quantity + 1;
    }
    addCartToHTML();
    addCartToMemory();

}

const addCartToMemory = () => {
    localStorage.setItem('cart', JSON.stringify(carts));
}

const addCartToHTML = () => {
    listCartHTML.innerHTML = '';
    let totalQuantity = 0;
    if(carts.length > 0){
        carts.forEach(cart => {
            totalQuantity = totalQuantity + cart.quantity;
            let newCart = document.createElement('div');
            newCart.classList.add('item1');
            let positionProduct = listProducts.findIndex((value) => value.id == cart.product_id);
            let info = listProducts[positionProduct];
            newCart.innerHTML = `
            <div class="image">
                <img src="${info.image}" alt="">
              </div>
              <div class="name">${info.name}</div>
              <div class="total-preco">R$${info.preco * cart.quantity}</div>
              <div class="quantid">
                <span class="minus"><</span>
                <span>${cart.quantity}</span>
                <span class="plus">></span>
              </div>
            </div>
            `;
        listCartHTML.appendChild(newCart);
        })
    }
    iconCartSpan.innerText = totalQuantity;
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