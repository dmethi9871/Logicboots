import { connect } from "@/dbConfig/dbConfig";
import newslatter from "@/models/newLatterModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
connect()
export async function POST(request: NextRequest) {

  try {
    const reqBody = await request.json()
    const { Name, email} = reqBody
  console.log(reqBody);
    const newUser = new newslatter({
      Name,
      email,
      
    })
    const savedUser = await newUser.save()
    return NextResponse.json({
      message: "User created successfully",
      success: true,
      savedUser
    })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}