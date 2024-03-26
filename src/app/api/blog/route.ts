import { connectMongoDB } from '@/lib/mongodb';
import { NextResponse } from 'next/server';
import BlogModel from '@/models/blog';

export async function GET() {
  await connectMongoDB();
  const blog = await BlogModel.find();
  return NextResponse.json({ blog });
}
