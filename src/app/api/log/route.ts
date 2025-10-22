import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { type, payload } = await req.json();

  const timestamp = new Date().toISOString();
  console.log(`🪵 [${timestamp}] [${type}]:`, payload);

  return NextResponse.json({ status: 'ok' });
}
