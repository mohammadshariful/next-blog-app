import { connectDB } from "@/lib/config/db";
import EmailModel from "@/lib/models/EmailModel";
import { NextResponse } from "next/server";

const loadDB = async () => {
    await connectDB();
}
loadDB();
export async function POST(request) {
    const formData = await request.formData();
    const email = formData.get("email");
    if (!email) {
        return new Response("Email is required", { status: 400 });
    }
    const emailData = {
        email: email
    }
    await EmailModel.create(emailData);
    return NextResponse.json({
        success: true,
        message: "Email Subscribed"
    })

}