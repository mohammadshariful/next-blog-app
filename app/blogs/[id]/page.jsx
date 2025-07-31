'use client';
import { assets, blog_data } from '@/Assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const page = ({ params }) => {
    const [data, setData] = useState(null);
    // console.log(params);
    const fetchBlogData = async () => {
        const { id } = await params;
        // console.log(blog_data);

        for (let i = 0; i < blog_data.length; i++) {
            if (blog_data[i].id == id) {
                setData(blog_data[i]);
                break;
            }
        }
    }

    useEffect(() => {
        fetchBlogData();

    }, [])
    if (!data) return <div>Loading...</div>;

    return (
        <>
            <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
                <div className='flex justify-between items-center'>
                    <Link href={'/'}>
                        <Image src={assets.logo} width={180} className='w-[130px] sm:w-auto' alt='' /></Link>
                    <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000]'>Get started <Image src={assets.arrow} alt='' /></button>
                </div>
                <div className='text-center my-24'>
                    <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>{data?.title}</h1>
                    <Image src={data?.author_img} width={60} height={60} alt='' className='mx-auto mt-6 border border-white rounded-full' />
                    <p className='mt-1 pb-2 text-lg mx-w-[740px] mx-auto'>{data?.author}</p>
                </div>
            </div>
            <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
                <Image src={data?.image} width={800} height={500} alt='' className='w-full h-auto rounded-lg shadow-lg' />
                <h1 className='my-8 text-[26px] font-semibold'>Introduction :</h1>
                <p>{data?.description}</p>
                <h3 className='my-5 text-[18px] font-semibold'>Step 1: Self -Reflection and Goal setting</h3>
                <p className='my-3 '>
                    Self-reflection is the first step in managing your lifestyle. Take time to evaluate your current habits, routines, and overall well-being. Ask yourself questions like: What are my strengths and weaknesses? What areas of my life do I want to improve? Setting clear goals based on your reflections will give you direction and motivation.
                </p>

            </div>
        </>
    );
};

export default page;