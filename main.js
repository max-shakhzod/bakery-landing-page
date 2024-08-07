document.addEventListener('DOMContentLoaded', () => {
  // Cart functionality
  let cart = {
      quantity: 0,
      totalPrice: 0
  };

  function updateCart() {
      const cartIcon = document.querySelector('.cart-icon');
      let cartCount = cartIcon.querySelector('.cart-count');

      if (!cartCount) {
          cartCount = document.createElement('span');
          cartCount.classList.add('cart-count');
          cartIcon.appendChild(cartCount);
      }

      cartCount.textContent = cart.quantity;
  }

  function updateCartTotal(price, quantity) {
      cart.totalPrice += price * quantity;
      cart.quantity += quantity;
      updateCart();
      console.log(`Cart updated: ${cart.quantity} items, Total Price: $${cart.totalPrice}`);
  }

  function getProductDetails(productElement) {
      const quantity = parseInt(productElement.querySelector('.quantity-control input').value);
      const price = parseFloat(productElement.querySelector('.price').textContent.replace('$', ''));
      return { quantity, price };
  }

  // Add to Cart functionality
  document.querySelectorAll('.add-button').forEach(button => {
      button.addEventListener('click', () => {
          const productElement = button.closest('.product');
          const { quantity, price } = getProductDetails(productElement);

          updateCartTotal(price, quantity);
          console.log(`Added to cart: ${quantity} x $${price}`);
      });
  });

  // Increment button functionality
  document.querySelectorAll('.increment').forEach(button => {
      button.addEventListener('click', () => {
          const input = button.previousElementSibling;
          input.value = parseInt(input.value) + 1;
          console.log(`Incremented quantity: ${input.value}`);
      });
  });

  // Decrement button functionality
  document.querySelectorAll('.decrement').forEach(button => {
      button.addEventListener('click', () => {
          const input = button.nextElementSibling;
          if (parseInt(input.value) > 1) {
              input.value = parseInt(input.value) - 1;
              console.log(`Decremented quantity: ${input.value}`);
          }
      });
  });

  // Scroll to Products section functionality
  const shopNowButton = document.getElementById("shop-now-button");
  const productsSection = document.getElementById("products");

  if (shopNowButton && productsSection) {
      shopNowButton.addEventListener("click", function(event) {
          event.preventDefault(); // Prevent default button behavior
          productsSection.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the products section
          console.log("Scrolling to products section.");
      });
  } else {
      console.error("Shop Now button or Products section not found.");
  }
});
