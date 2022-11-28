const pintarCarrito = () => {
    modalContainer.innerHTML = "";
    const modalCompra = document.createElement("div");
    modalCompra.innerHTML = `
    <h1>ESTA ES TU COMPRA </h1>
    `;
    modalContainer.append(modalCompra);

    const modalButton = document.createElement("h1");
    modalButton.innerHTML = "❎";
    modalCompra.append(modalButton);

    modalButton.addEventListener("click", () => {
        modalContainer.style.display = "none";
    });

    carrito.forEach((product) => {
        let carritoContenido = document.createElement("div");
        carritoContenido.innerHTML += `
          <h2>${product.nombre}</h2>
          <p>$ ${product.precio} </h2>
      `;

        modalContainer.append(carritoContenido);
    });

    const total = carrito.reduce((acc, el) => acc + el.precio, 0);
    const totalCompra = document.createElement("div");
    totalCompra.innerHTML = `total a pagar: $${total}`;
    modalContainer.append(totalCompra);


};

verCarrito.addEventListener ("click", pintarCarrito);

