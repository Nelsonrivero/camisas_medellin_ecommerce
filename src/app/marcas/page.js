import './styles.css'


function MarcasPage() {
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
            <li>
              <a href="/productos">PRODUCTOS</a>
            </li>
            <li  class="active">
              <a href="/marcas">MARCAS ALIADAS</a>
            </li>
          </ul>
        </nav>
        <br />
      </div>
    </div>
  );
}

export default MarcasPage;
