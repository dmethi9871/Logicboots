import { connect } from "@/dbConfig/dbConfig";
import ContactModel from "@/models/contactmodel";
import { NextRequest, NextResponse } from "next/server";

// Connect to MongoDB
connect();

export async function POST(request: NextRequest) {
  try {
    // Log incoming request body
    const reqBody = await request.json();
    console.log("Request Body:", reqBody);

    // Destructure relevant fields from request body
    const { Name, email, message } = reqBody;

    // Create a new instance of ContactModel
    const userContact = new ContactModel({
      name: Name, // Assuming 'name' corresponds to 'fullname' in the schema
      email,
      message,
    });

    // Save the userContact instance to the database
    const savedUser = await userContact.save();

    // Log saved user data
    console.log("Saved User:", savedUser);

    // Respond with success message and saved user data
    return NextResponse.json({
      message: "Message saved successfully",
      success: true,
      savedUser,
    });
  } catch (error: any) {
    // Log error for debugging
    console.error("Error saving message:", error);

    // Handle any errors
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
