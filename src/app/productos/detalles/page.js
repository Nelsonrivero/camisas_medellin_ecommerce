import "./styles.css";

function DetallesProductoPage() {
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
        <br/>
        <br/>

        <nav>
          <ul>
            <li  class="active">
              <a href="/productos">PRODUCTOS</a>
            </li>
            <li> 
              <a href="/nosotros">NOSOTROS</a>
            </li>
          </ul>
        </nav>
        <br />
      </div>

      <section class="product-item">
    <div class="product-gallery">
      <img
            src="https://i.ibb.co/8cs5p2W/CAMIOSAS-1-removebg-preview.png"
            alt=""
          />
    </div>
    <div class="product-data">
      <p class="product-firm">Marca</p>
      <h2 class="product-name">Nombre</h2>
      <p class="product-price">160.00</p>
      <p class="product-size">Talla</p>
      <button class="buy-btn">Comprar</button>

      <div class="product-info">
        <p class="product-description">
          descripcion
        </p>
      </div>
    </div>
  </section>

      

      <footer>
        <div className="footer">
          <p>
            © 2024 Camisas Medellin. Todos los derechos reservados. Diseñado por
            Nelson Rivero
          </p>
        </div>
      </footer>
    </div>
  );
}

export default DetallesProductoPage;
