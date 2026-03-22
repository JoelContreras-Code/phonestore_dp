import { NextResponse } from 'next/server';
import productController from '../../../modules/products/product.controller';

export async function GET() {
  const { status, data } = await productController.getAll();
  return NextResponse.json(data, { status });
}

export async function POST(request) {
  const body = await request.json();
  const { status, data } = await productController.create(request, body);
  return NextResponse.json(data, { status });
}
