import axios from "axios";
import "./styles.css";

async function cargarProductos() {
  try {
    const { data } = await axios.get("http://localhost:3000/api/productos");
    return data;
  } catch (error) {
    console.error("Error al cargar productos:", error);
    throw new Error("No se pudieron cargar los productos");
  }
}


async function ProductosPage() {
  const productos = await cargarProductos();
  console.log(productos);

  return (
    <div>
      <div class="header">
        <div class="circle">
          <img
            src="https://i.ibb.co/8cs5p2W/CAMIOSAS-1-removebg-preview.png"
            width="100px"
            alt=""
          />
        </div>

        <h1>Camisas Medellin</h1>
        <br />
        <br />

        <nav>
          <ul>
            <li class="active">
              <a href="/productos">PRODUCTOS</a>
            </li>
            <li>
              <a href="/nosotros">NOSOTROS</a>
            </li>
          </ul>
        </nav>
        <br />
      </div>

      <main class="container" style={{ marginTop: "10px", marginButtom:"40px" }}>
        {productos.map((producto) => (
          <section class="card" key={producto.id}>
            <div class="product-image">
              <img
                src="https://i.ibb.co/nz4phR9/camisa-negra.png"
                alt={producto.nombre_producto}
                draggable="false"
              />
            </div>
            <div class="product-info">
              <h2>{producto.nombre_producto}</h2>
              <p>Ref: {producto.referencia} - Marca: {producto.marca}</p>
              <div class="price">$40.000</div>
              <p>Observaciones: {producto.observaciones} y talla {producto.talla} </p>
            </div>
            <div class="btn">
              <button class="buy-btn" href="">Comprar ahora</button>
              <button class="fav">
                <svg
                  class="svg"
                  id="i-cart"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  stroke="#000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                >
                  <circle cx="10" cy="28" r="2" />
                  <circle cx="24" cy="28" r="2" />
                  <path d="M2 4h6l4 16h12l4-10H8" />
                </svg>
              </button>
            </div>
          </section>
        ))}
      </main>
      <footer>
        <div className="footer">
          <p>© 2024 Camisas Medellin. Todos los derechos reservados. Diseñado por Nelson Rivero</p>
        </div>
      </footer>
    </div>
  );
}

export default ProductosPage;
