'use client';
import BlogTableItem from '@/Components/AdminComponents/BlogTableItem';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const BlogListPage = () => {
    const [blogs, setBlogs] = useState([]);
    const fetchBlogs = async () => {
        const response = await axios.get('/api/blog');
        if (response.status === 200) {
            setBlogs(response.data);

        }
    }
    useEffect(() => {
        fetchBlogs();
    }, [])

    const deleteBlog = async (id) => {
        const response = await axios.delete(`/api/blog`, {
            params: {
                id
            }
        });
        if (response.status === 200) {
            toast.success(response?.data?.message);
            fetchBlogs();
        }
        else {
            toast.error(response?.data?.message || "Failed to delete blog");
        }
    }



    return (
        <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16'>
            <h1>All blogs</h1>
            <div className='relative h-[80vh] max-w-[850px] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide'>
                <table className='w-full text-sm text-gray-500'>
                    <thead className='text-sm text-gray-700 text-left uppercase bg-gray-50'>
                        <tr>
                            <th scope='col' className='hidden sm:block px-6 py-3'>Author Name</th>
                            <th scope='col' className=' px-6 py-3'>Blog Title</th>
                            <th scope='col' className=' px-6 py-3'> Date</th>
                            <th scope='col' className=' px-6 py-3'>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {blogs?.map((blog, index) => <BlogTableItem key={index} {...blog} deleteBlog={deleteBlog} />)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BlogListPage;