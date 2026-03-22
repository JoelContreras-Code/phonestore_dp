import { NextResponse } from 'next/server';
import userController from '../../../modules/users/user.controller';

export async function GET() {
  const { status, data } = await userController.getAll();
  return NextResponse.json(data, { status });
}

export async function POST(request) {
  const body = await request.json();
  const { status, data } = await userController.create(body);
  return NextResponse.json(data, { status });
}
