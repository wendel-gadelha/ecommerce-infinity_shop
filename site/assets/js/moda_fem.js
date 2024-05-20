document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os elementos de tamanho
    const sizes = document.querySelectorAll('.size');

    // Mapeia os preços correspondentes aos tamanhos
    const sizePrices = {
        'P': 39.90,
        'M': 49.90,
        'G': 59.90
    };

    // Adiciona um evento de clique a cada elemento de tamanho
    sizes.forEach(size => {
        size.addEventListener('click', () => {
            // Remove a classe 'selected' de todos os tamanhos
            sizes.forEach(s => s.classList.remove('selected'));
            // Adiciona a classe 'selected' ao tamanho clicado
            size.classList.add('selected');
            // Obtém o tamanho selecionado
            const selectedSize = size.textContent;
            // Obtém o preço correspondente ao tamanho selecionado
            const price = sizePrices[selectedSize];
            // Atualiza o preço exibido
            document.querySelector('.price').textContent = `R$ ${price.toFixed(2)}`;
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Função para mudar a imagem quando uma cor é selecionada
    function changeImage(color) {
        var image = document.getElementById('product-image');
        if (image) {
            if (color === 'white') {
                image.src = './site/assets/img/moda/t-shirt_white copy.jpg';
            } else if (color === 'black') {
                image.src = './site/assets/img/moda/t-shirt_black.jpg';
            } else if (color === 'pink') {
                image.src = './site/assets/img/moda/t-shirt_lightPink.jpg';
            }
        }
    }

    // Adicionar evento de clique para cada bolinha de cor
    var colors = document.querySelectorAll('.color');
    colors.forEach(function(color) {
        color.addEventListener('click', function() {
            var selectedColor = this.classList[1]; // Obtém a classe da cor selecionada
            changeImage(selectedColor); // Chama a função para mudar a imagem
        });
    });
});


