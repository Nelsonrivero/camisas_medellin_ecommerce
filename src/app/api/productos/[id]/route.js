import { NextResponse } from "next/server";
import { conn } from '@/libs/mysql';

export async function GET(request, { params }) {
    try {
        console.log(params.id);

        const resultado = await conn.query('SELECT p.id, p.nombre_producto, p.referencia, p.talla, p.observaciones, m.nombre_marca AS marca, p.cantidad_inventario FROM productos p INNER JOIN marcas m ON p.marca_id = m.id WHERE p.id = ?;', [params.id]);

        if (resultado.length === 0) {
            return NextResponse.json(
                {
                    message: "Producto no encontrado",
                },
                {
                    status: 404,
                }
            );
        }
        return NextResponse.json(resultado[0]);
    } catch (error) {
        console.error("Error al procesar la solicitud:", error);
        return NextResponse.json(
            {
                message: "Error interno del servidor",
            },
            {
                status: 500,
            }
        );
    }
}
