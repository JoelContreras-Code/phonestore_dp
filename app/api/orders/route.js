import { NextResponse } from 'next/server';
import orderController from '../../../modules/orders/order.controller';

export async function GET() {
  const { status, data } = await orderController.getAll();
  return NextResponse.json(data, { status });
}

export async function POST(request) {
  const body = await request.json();
  const { status, data } = await orderController.create(body);
  return NextResponse.json(data, { status });
}
