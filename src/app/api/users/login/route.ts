// pages/api/users/login.js
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "@/models/userModel"; // Adjust path as per your project structure

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;

    // Find user in database based on email
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ error: "User does not exist" }, { status: 400 });
    }

    // Validate password
    const validPassword = await bcryptjs.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json({ error: "Invalid password" }, { status: 400 });
    }

    // Generate JWT token for authentication
    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email
    };
    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, { expiresIn: "1d" });
    const responseData = {
      message: "Login successful",
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
      success: true,
    };

    // Create NextResponse with JSON data
    const response = NextResponse.json(responseData);

    // Set token as cookie in the response
    response.cookies.set("token", token, {
      httpOnly: true,
    });

    return response;
  } catch (error: any) {
    console.error("Error during login:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
