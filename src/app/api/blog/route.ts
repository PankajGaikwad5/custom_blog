import { connectMongoDB } from '@/lib/mongodb';
import { NextRequest, NextResponse } from 'next/server';
import BlogModel from '../../../models/blog';

export async function GET() {
  await connectMongoDB();
  const blog = await BlogModel.find();
  return NextResponse.json({ blog });
}

export async function POST(req: NextRequest) {
  try {
    const { title, description, blog, tags, profile, image } = await req.json();
    await connectMongoDB();
    await BlogModel.create({ title, description, blog, tags, profile, image });
    return NextResponse.json({ msg: 'Blog Created' }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: 'failed' });
  }
}
