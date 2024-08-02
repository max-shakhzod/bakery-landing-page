document.addEventListener('DOMContentLoaded', () => {
    let cart = {
      quantity: 0,
      totalPrice: 0
    };
  
    function updateCart() {
      const cartIcon = document.querySelector('.cart-icon');
      const cartCount = cartIcon.querySelector('.cart-count') || document.createElement('span');
      
      cartCount.classList.add('cart-count');
      cartCount.textContent = cart.quantity;
      cartIcon.appendChild(cartCount);
    }
  
    function updateCartTotal(price, quantity) {
      cart.totalPrice += price * quantity;
      cart.quantity += quantity;
      updateCart();
    }
  
    function getProductDetails(productElement) {
      const quantity = parseInt(productElement.querySelector('.quantity-control input').value);
      const price = parseFloat(productElement.querySelector('.price').textContent.replace('$', ''));
      return { quantity, price };
    }
  
    document.querySelectorAll('.add-button').forEach(button => {
      button.addEventListener('click', () => {
        const productElement = button.closest('.product');
        const { quantity, price } = getProductDetails(productElement);
  
        updateCartTotal(price, quantity);
      });
    });
  
    document.querySelectorAll('.increment').forEach(button => {
      button.addEventListener('click', () => {
        const input = button.previousElementSibling;
        input.value = parseInt(input.value) + 1;
      });
    });
  
    document.querySelectorAll('.decrement').forEach(button => {
      button.addEventListener('click', () => {
        const input = button.nextElementSibling;
        if (parseInt(input.value) > 1) {
          input.value = parseInt(input.value) - 1;
        }
      });
    });
  });
  