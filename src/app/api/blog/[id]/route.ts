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
  const { profile, comment } = await req.json();
  await connectMongoDB();
  console.log(id);
  console.log(comment);
  await BlogModel.findByIdAndUpdate(
    id,
    { $push: { comments: { profile, comment } } },
    { new: true }
  );
  return NextResponse.json({ msg: 'updated' }, { status: 200 });
}
