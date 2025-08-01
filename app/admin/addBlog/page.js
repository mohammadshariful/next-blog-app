'use client';
import { assets } from '@/Assets/assets';
import axios from 'axios';
import Image from 'next/image';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const AddBlogPage = () => {
    const [image, setImage] = useState(null);
    const [data, setData] = useState({
        title: '',
        description: '',
        category: 'Technology',
        author: 'Admin',
    });
    const onChangeHandler = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', image);
        formData.append('title', data.title);
        formData.append('description', data.description);
        formData.append('category', data.category);
        formData.append('author', data.author);
        const response = await axios.post('/api/blog', formData);
        if (response?.data?.success) {
            toast.success(response?.data?.message);
            setData({})
            setImage(null);
        } else {
            toast.error(response?.data?.message || 'Something went wrong');
        }

    }

    return (
        <>
            <form onSubmit={onSubmitHandler} className='py-5 px-5 sm:pt-12 sm:pl-16'>
                <p className='text-xl'>Upload thumbnail</p>

                <label htmlFor="image">
                    <Image className='mt-4' alt='image_upload' src={image ? URL.createObjectURL(image) : assets.upload_area} width={140} height={70} />
                </label>
                <input hidden required type="file" name="image" id="image" onChange={(e) => setImage(e.target.files[0])} />
                <p className='text-xl mt-4'>Blog title</p>
                <input name='title' onChange={onChangeHandler} required type="text" className='w-full mt-2 p-2 border border-gray-300 rounded' placeholder='Enter blog title' />
                <p className='text-xl mt-4'>Blog Description</p>
                <textarea name='description' onChange={onChangeHandler} required className='w-full mt-2 p-2 border border-gray-300 rounded' placeholder='Write your blog content here...' rows="10"></textarea>
                <p className='text-xl mt-4'>Blog Category</p>
                <select name='category' onChange={onChangeHandler} value={data?.category} className='w-40 mt-4 px-4  rounded border border-black'>
                    <option value="Technology">Technology</option>
                    <option value="Lifestyle">Lifestyle</option>
                    <option value="Health">Health</option>
                    <option value="Travel">Travel</option>
                    <option value="Education">Education</option>
                    <option value="Business">Business</option>
                </select>
                <br />
                <button type='submit' className='mt-6 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'>Submit Blog</button>


            </form>
        </>
    );
};

export default AddBlogPage;