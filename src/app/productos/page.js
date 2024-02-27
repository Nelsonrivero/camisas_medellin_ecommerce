import axios from 'axios';
import './styles.css'

async function cargarProductos() {
    const { data } = await axios.get('http://localhost:3000/api/productos');
    return data;
}

async function ProductosPage() {
    const productos = await cargarProductos();
    console.log(productos);

    return (
        <div>
            <div class="header">
                <div class="circle">
                    <img src="https://i.ibb.co/8cs5p2W/CAMIOSAS-1-removebg-preview.png" width="100px" alt="" />
                </div>

                <h1>Camisas Medellin</h1>
                <br/>
                <br/>

                <nav>
                    <ul>
                        <li class="active"><a href="#">PRODUCTOS</a></li>
                        <li><a href="#">MARCAS ALIADAS</a></li>
                    </ul>
                </nav>
                <br />
            </div>

            <main class="container" style={{ marginTop: '10px' }}>
                {productos.map(producto => (
                    <section class="card" key={producto.id}>
                        <div class="product-image">
                            <img src="https://i.ibb.co/nz4phR9/camisa-negra.png" alt={producto.nombre_producto} draggable="false" />
                        </div>
                        <div class="product-info">
                            <h2>{producto.nombre_producto}</h2>
                            <p>{producto.referencia}</p>
                            <div class="price">${producto.precio}</div>
                        </div>
                        <div class="btn">
                            <button class="buy-btn">Comprar Ahora</button>
                            <button class="fav">
                                <svg class="svg" id="i-cart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" stroke="#000"
                                    stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                    <circle cx="10" cy="28" r="2" />
                                    <circle cx="24" cy="28" r="2" />
                                    <path d="M2 4h6l4 16h12l4-10H8" />
                                </svg>
                            </button>
                        </div>
                    </section>
                ))}
            </main>
        </div>
    );
}

export default ProductosPage;
