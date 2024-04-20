document.addEventListener('DOMContentLoaded', function() {
    const cartCount = document.getElementById('cart-count');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItemsList = document.getElementById('cart-items');
    const clearCartButton = document.getElementById('clear-cart');
    let itemCount = 0;
    const cartItems = {};

    addToCartButtons.forEach(button => {
      button.addEventListener('click', () => {
        const product = button.parentElement;
        const productName = product.querySelector('h3').innerText;
        const productPrice = product.querySelector('p').innerText;
        const productImageSrc = product.querySelector('img').src;

        if (cartItems[productName]) {
          // Si el producto ya está en el carrito, aumenta la cantidad
          cartItems[productName].quantity++;
          cartItems[productName].element.querySelector('.item-quantity').innerText = `Cantidad: ${cartItems[productName].quantity}`;
        } else {
          // Si el producto no está en el carrito, agrégalo
          const newItem = {
            quantity: 1,
            price: productPrice,
            imageSrc: productImageSrc,
            element: addToCart(productName, productPrice, productImageSrc)
          };
          cartItems[productName] = newItem;
        }

        itemCount++;
        cartCount.innerText = itemCount;
      });
    });

    function addToCart(name, price, imageSrc) {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = imageSrc;
        img.alt = name;
        li.appendChild(img);
        const div = document.createElement('div');
        div.classList.add('cart-item-details');
        div.innerHTML = `
            <span class="item-name">${name}</span>
            <span class="item-price">${price}</span>
            <span class="item-quantity">Cantidad: 1</span>
        `;
        li.appendChild(div);
        cartItemsList.appendChild(li);
        return li;
    }


    clearCartButton.addEventListener('click', () => {
      itemCount = 0;
      cartCount.innerText = itemCount;
      cartItemsList.innerHTML = '';
      Object.keys(cartItems).forEach(itemName => {
        delete cartItems[itemName];
      });
    });
});
function simulateLoadingDelay() {
    return new Promise(resolve => {
      setTimeout(resolve, 5000); // Simula un retraso de 2 segundos (2000 milisegundos)
    });
  }
  window.addEventListener('load', async function() {
    await simulateLoadingDelay(); // Espera a que se complete el retraso simulado
    const loadingContainer = document.querySelector('.loading-container');
    loadingContainer.style.display = 'none';
  });
  