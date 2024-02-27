import axios from 'axios'

async function cargarProductos(){
    const {data} = await axios.get('http://localhost:3000/api/productos')
    return data
}

async function ProductosPage(){

    const productos = await cargarProductos()
    console.log(productos)

    return(
        <div>
            {productos.map(producto => (
                <div>
                    <h1>{producto.nombre_producto}</h1>
                    <h2>{producto.marca}</h2>
                    <p>{producto.referencia}</p>
                </div>
            ))}
        </div>
    )
}

export default ProductosPage