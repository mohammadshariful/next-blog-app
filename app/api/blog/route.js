import { connectDB } from "@/lib/config/db";
import BlogModel from "@/lib/models/BlogModel";
import { writeFile } from "fs/promises";
const fs = require("fs");

const { NextResponse } = require("next/server");

const loadDB = async () => {
    await connectDB();
}

loadDB()

export async function GET(request) {
    const blogId = request.nextUrl.searchParams.get("id");
    if (blogId) {
        const blog = await BlogModel.findById(blogId);
        if (!blog) {
            return NextResponse.json({ message: "Blog not found" }, { status: 404 });
        }
        return NextResponse.json(blog);
    }


    const blogs = await BlogModel.find({});
    if (!blogs) {
        return NextResponse.json({ message: "No blogs found" }, { status: 404 });
    }
    return NextResponse.json(blogs);
}

export async function POST(request) {
    const formData = await request.formData();
    const timestamp = Date.now();
    const image = formData.get("image");
    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);
    const path = `./public/${timestamp}_${image.name}`;
    await writeFile(path, buffer);
    const imgUrl = `/${timestamp}_${image.name}`;
    const blogData = {
        title: formData.get("title"),
        description: formData.get("description"),
        category: formData.get("category"),
        author: formData.get("author"),
        image: imgUrl,
        // authorImg: formData.get("authorImg"),
        // date: new Date(),
    }
    await BlogModel.create(blogData);
    console.log("Blog created successfully");

    return NextResponse.json({
        success: true,
        message: "Blog created successfully",
    });
}

// creating api for delete blog
// export async function DELETE(request) {
//     const id = request.nextUrl.searchParams.get("id");
//     const blog = await BlogModel.findById(id);
//     fs.unlink(`./public/${blog.image}`, () => {
//         await BlogModel.findByIdAndDelete(id);
//         return NextResponse.json({
//             success: true,
//             message: "Blog deleted successfully",
//         });
//     });

// }
export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    if (!id) {
        return NextResponse.json({ message: "Blog ID is required" }, { status: 400 });
    }

    const blog = await BlogModel.findById(id);
    if (!blog) {
        return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }

    // Delete the image file from the public directory
    fs.unlink(`./public/${blog.image}`, (err) => {
        if (err) {
            console.error("Error deleting image file:", err);
        }
    });

    await BlogModel.findByIdAndDelete(id);
    return NextResponse.json({
        success: true,
        message: "Blog deleted successfully",
    });
}