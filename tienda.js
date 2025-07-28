window.productos = []; 

async function cargarProductos() {
  try {
    const response = await fetch("http://localhost:3000/products");
    productos = await response.json();
   console.log
    renderizarProductos(productos);
  } catch (error) {
    console.error("Error al cargar los productos:", error);
  }
}

function renderizarProductos(productos) {
  const contenedor = document.getElementById("productos-container");
  contenedor.innerHTML = ""; 

  productos.forEach((producto) => {
    const card = document.createElement("div");
    card.className = "col-md-4 mb-4";
    card.innerHTML = `
      <div class="card h-100">
        <div id="carousel-${producto.id}" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            ${producto.images
              .map(
                (img, index) => `
                <div class="carousel-item ${index === 0 ? "active" : ""}">
                  <img src="${img}" class="d-block w-100" alt="${producto.name}">
                </div>`
              )
              .join("")}
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carousel-${producto.id}" data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carousel-${producto.id}" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
          </button>
        </div>
        <div class="card-body">
          <h5 class="card-title">${producto.name}</h5>
          <p class="card-text">${producto.desc}</p>
          <p class="card-text"><strong>$${producto.price}</strong></p>
          <button class="btn btn-success cart-btn" onclick="agregarAlCarrito(${producto.id})">
            <i class="fas fa-cart-plus"></i> Agregar al carrito
          </button>
        </div>
      </div>
    `;
    contenedor.appendChild(card);
  });
}


cargarProductos();
