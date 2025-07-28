let cart = JSON.parse(localStorage.getItem("cart")) || [];
console.log(cart)
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function agregarAlCarrito(id) {
  const producto = productos.find(p => p.id === id);
  if (!producto) return;

  const existing = cart.find(item => item.id === id);

  if (existing) {
    alert("Este producto ya está en el carrito. Podés ajustar la cantidad desde allí.");
    return;
  }

  const item = {
    id: producto.id,
    name: producto.name,
    price: producto.price,
    quantity: 1
  };

  cart.push(item);
  saveCart();
  updateCart();
}

function quitarDelCarrito(id) {
  cart = cart.filter((item) => item.id !== id);
  saveCart();
  updateCart();
}

function cambiarCantidad(id, delta) {
  const item = cart.find((i) => i.id === id);
  if (!item) return;

  item.quantity += delta;

  if (item.quantity <= 0) {
    quitarDelCarrito(id);
  } else {
    saveCart();
    updateCart();
  }
}
function vaciarCarrito() {
  cart = [];
  saveCart();
  updateCart();
  alert("Carrito vaciado con éxito.");
}
function realizarCompra() {
  if (cart.length === 0) {
    alert("El carrito está vacío. Agregá productos antes de comprar.");
    return;
  }

  

  alert("¡Gracias por tu compra! Te llegará un correo con los detalles.");  
  vaciarCarrito(); 
}

function updateCartCount() {
  const cartCount = document.getElementById("cart-count");
  if (!cartCount) return;

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = totalItems;
}

function updateCart() {
  const cartItemsContainer = document.getElementById("cart-items");
  cartItemsContainer.innerHTML = "";

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = "<p class='text-center'>El carrito está vacío</p>";
  } else {
    cart.forEach((item) => {
      const cartRow = document.createElement("div");
      cartRow.className = "d-flex justify-content-between align-items-center mb-2";
      cartRow.innerHTML = `
        <div>${item.name} (x${item.quantity})</div>
        <div>
          <button class="btn btn-sm btn-outline-secondary me-1" onclick="cambiarCantidad(${item.id}, -1)">-</button>
          <button class="btn btn-sm btn-outline-secondary me-1" onclick="cambiarCantidad(${item.id}, 1)">+</button>
          <button class="btn btn-sm btn-danger" onclick="quitarDelCarrito(${item.id})">Eliminar</button>
        </div>
      `;
      cartItemsContainer.appendChild(cartRow);
    });
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  document.getElementById("cart-total").textContent =  total;
  updateCartCount()
}
function toggleCart() {
  const cartContainer = document.getElementById("cart-container");
  if (!cartContainer) return;
  cartContainer.classList.toggle("d-none");
}


document.addEventListener("DOMContentLoaded", () => {
  updateCart();
});
