const arrayProdutos = [
    
        {
            id: "1",
            name: "Echo Dot 5 Alexa",
            preco: "349,90",
            image:"./site/assets/img/listaProdutos/alexa_semfundo.png"
        },
    
        {
            id: "2",
            name: "Smartwatch Haylou",
            preco: "129,90",
            image:"./site/assets/img/listaProdutos/relogio_semfundo.png"
        },

        {
            id: "3",
            name: "Drone X8-Mini",
            preco: "1.999,90",
            image:"./site/assets/img/listaProdutos/drone_semfundo.png"
        },

        {
            id: "4",
            name: "Headset Gamer",
            preco: "99,90",
            image:"./site/assets/img/listaProdutos/hedset_semfundo.png"
        },
      
]

// Criar um elemento
const list = document.createElement("item1")

// Manipular o elemento criado
list.innerHTML = `
<img src="./site/assets/img/listaProdutos/headphones_semfundo.png"alt="cadeira gamer">
<h2>Headphone JBL</h2>
<div class="preco">R$299,90</div>
<button class="addcart">Adicionar ao Carrinho</button>
`


// Adicionar o elemento na tela/DOM
const section = document.querySelector(".list-product")
section.appendChild(list)
console.log(section);


let iconCart = document.querySelector('.icon-cart');
let closeCart = document.querySelector('.close');
let body = document.querySelector('body');


iconCart.addEventListener('click', () => {
    body.classList.toggle('show-cart')
})

closeCart.addEventListener('click', () =>{
    body.classList.toggle('show-cart')
})

