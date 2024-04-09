import { connectMongoDB } from '@/lib/mongodb';
import BlogModel from '@/models/blog';
import { NextResponse, NextRequest } from 'next/server';

export async function GET(req: NextRequest, { params }: { params: any }) {
  const { id } = params;
  console.log(params);
  await connectMongoDB();
  const blog = await BlogModel.findOne({ _id: id });
  return NextResponse.json({ blog });
}
