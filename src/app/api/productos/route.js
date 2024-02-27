import { NextResponse } from "next/server";
import {conn} from '@/libs/mysql'

export async function GET() {
    try {
        const resultado = await conn.query('SELECT p.id,p.nombre_producto, m.nombre_marca AS marca, p.referencia FROM productos p INNER JOIN marcas m ON p.marca_id = m.id;');
        return NextResponse.json(resultado);
    } catch (error) {
        console.error('Error al obtener los productos:', error);
        return NextResponse.json({ error: 'Error al obtener los productos' }, { status: 500 });
    }
}

export function POST(){
    return NextResponse.json('creando productos')
}