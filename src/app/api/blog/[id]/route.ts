import { connectMongoDB } from '@/lib/mongodb';
import BlogModel from '@/models/blog';
import { NextResponse, NextRequest } from 'next/server';

export async function GET(req: NextRequest, { params }: { params: any }) {
  const { id } = params;
  await connectMongoDB();
  const blog = await BlogModel.findOne({ _id: id });
  return NextResponse.json({ blog });
}

export async function PUT(req: NextRequest, { params }: { params: any }) {
  const { id } = params;
  const { comment } = await req.json();
  await connectMongoDB();
  // await BlogModel.findByIdAndUpdate(id, { comment });
  await BlogModel.findByIdAndUpdate(id, { comment });
  return NextResponse.json({ msg: 'updated' }, { status: 200 });
}
