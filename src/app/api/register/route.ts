import { NextRequest, NextResponse } from 'next/server';
import { connectMongoDB } from '../../../lib/mongodb';
import User from '../../../models/user';
import bcrypt from 'bcryptjs';

export async function POST(req: NextRequest) {
  try {
    const { username, email, password } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    await connectMongoDB();
    await User.create({ email, username, password: hashedPassword });
    return NextResponse.json({ msg: 'user registered' }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: 'An error occured' }, { status: 500 });
  }
}
