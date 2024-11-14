let cart = [];
const itemCountElement = document.getElementById('item-count');
const cartItemsElement = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', addToCart);
});

function addToCart(event) {
    const productElement = event.target.closest('.product');
    const productId = productElement.getAttribute('data-id');
    const productName = productElement.querySelector('h2').textContent;
    const productPrice = parseFloat(productElement.querySelector('p').textContent.slice(1));

    const existingProduct = cart.find(item => item.id === productId);
    
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
    }
    
    updateCart();
}

function updateCart() {
    cartItemsElement.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const listItem = document.createElement('li');
        listItem.innerHTML = `${item.name} - $${item.price.toFixed(2)} x ${item.quantity} 
                              <button onclick="removeFromCart('${item.id}')">Remove</button>`;
        cartItemsElement.appendChild(listItem);
    });

    itemCountElement.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    totalPriceElement.textContent = total.toFixed(2);
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCart();
}

document.getElementById('checkout').addEventListener('click', () => {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        alert("Proceeding to checkout!");
        // Checkout logic would go here
    }
});


document.getElementById('backButton').addEventListener('click', function() {
    window.history.back(); // Navigate back in browser history
});