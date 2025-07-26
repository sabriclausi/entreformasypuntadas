let cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartCount = document.getElementById("cart-count");
const cartContainer = document.getElementById("cart-container");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

// Mostrar/Ocultar carrito
function toggleCart() {
  cartContainer.classList.toggle("d-none");
}

// Guardar en localStorage
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Agregar producto único por ID
document.querySelectorAll(".cart-btn").forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".card");
    const name = card.querySelector(".card-title").textContent.trim();
    const priceText = card.querySelector(".footer-card p").textContent.trim();
    const price = parseFloat(priceText.replace("$", "").replace(".", "").replace(",", "."));
    const id = name.toLowerCase().replace(/\s/g, "-");

    const existing = cart.find(item => item.id === id);

    if (existing) {
      alert("Este producto ya está en el carrito. Podés ajustar la cantidad desde allí.");
      return;
    }

    const item = {
      id: id,
      name: name,
      price: price,
      quantity: 1
    };

    cart.push(item);
    saveCart();
    updateCart();
  });
});

// Actualizar carrito visual
function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;
  let count = 0;

  cart.forEach((item, idx) => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");

    li.innerHTML = `
      <div class="d-flex justify-content-between align-items-center">
        <div>
          <strong>${item.name}</strong><br>
          $${item.price} x ${item.quantity}
        </div>
        <div>
          <button class="btn btn-sm btn-secondary me-1" onclick="decreaseQty('${item.id}')">-</button>
          <button class="btn btn-sm btn-secondary me-2" onclick="increaseQty('${item.id}')">+</button>
          <button class="btn btn-sm btn-danger" onclick="removeFromCart('${item.id}')">X</button>
        </div>
      </div>
    `;

    cartItems.appendChild(li);
    total += item.price * item.quantity;
    count += item.quantity;
  });

  cartCount.textContent = count;
  cartTotal.textContent = total;
}

// Aumentar cantidad
function increaseQty(id) {
  const item = cart.find(p => p.id === id);
  if (item) {
    item.quantity += 1;
    saveCart();
    updateCart();
  }
}

// Disminuir cantidad
function decreaseQty(id) {
  const item = cart.find(p => p.id === id);
  if (item && item.quantity > 1) {
    item.quantity -= 1;
  } else {
    cart = cart.filter(p => p.id !== id);
  }
  saveCart();
  updateCart();
}

// Eliminar del carrito
function removeFromCart(id) {
  cart = cart.filter(p => p.id !== id);
  saveCart();
  updateCart();
}

// Vaciar carrito
function emptyCart() {
  cart = [];
  saveCart();
  updateCart();
}

document.addEventListener("DOMContentLoaded", updateCart);
function finalizePurchase() {
  if (cart.length === 0) {
    alert("Tu carrito está vacío 😢");
    return;
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Simulamos éxito con un mensaje lindo
  alert(`¡Gracias por tu compra! 🧵🫶\nTotal: $${total}\nTus obras están listas para volar a su nuevo hogar ✨`);

  // Limpia el carrito
  cart = [];
  saveCart();
  updateCart();

  // Ocultar carrito
  cartContainer.classList.add("d-none");
}
