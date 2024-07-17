// pages/api/Subscribe.ts
import { connect } from "@/dbConfig/dbConfig";
import Subscribe from "@/models/Subscribeschema";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();
    const newUser = new Subscribe({ email });
    const savedUser = await newUser.save();

    return NextResponse.json({
      message: "User subscribed successfully",
      success: true,
      savedUser,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
