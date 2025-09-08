import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import User from "@/lib/models/User";
import bcrypt from "bcryptjs";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    // Simple security check - only allow in development or with secret key
    const { searchParams } = new URL(req.url);
    const secret = searchParams.get('secret');
    
    if (process.env.NODE_ENV === 'production' && secret !== process.env.ADMIN_CREATE_SECRET) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    await dbConnect();
    
    let requestBody;
    try {
      requestBody = await req.json();
    } catch (jsonError) {
      console.error("JSON parsing error:", jsonError);
      return NextResponse.json({ 
        message: "Invalid JSON in request body",
        error: "Please check your JSON formatting"
      }, { status: 400 });
    }
    
    const { email, username, password, role = 'admin' } = requestBody;

    // Check if user already exists
    const existingUser = await User.findOne({ 
      $or: [{ email }, { username }]
    });

    if (existingUser) {
      return NextResponse.json({ 
        message: "User already exists",
        user: {
          email: existingUser.email,
          username: existingUser.username,
          role: existingUser.role
        }
      }, { status: 409 });
    }

    // Hash password
    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create user
    const newUser = new User({
      username: username || email,
      email,
      password: hashedPassword,
      role,
      isActive: true
    });

    const savedUser = await newUser.save();

    return NextResponse.json({
      message: "Admin user created successfully",
      user: {
        id: savedUser._id,
        username: savedUser.username,
        email: savedUser.email,
        role: savedUser.role,
        isActive: savedUser.isActive,
        createdAt: savedUser.createdAt
      }
    }, { status: 201 });

  } catch (error: any) {
    console.error("Error creating admin user:", error);
    
    if (error.code === 11000) {
      return NextResponse.json({ 
        message: "User with this email/username already exists" 
      }, { status: 409 });
    }

    return NextResponse.json({ 
      message: "Internal Server Error",
      error: error.message 
    }, { status: 500 });
  }
}
