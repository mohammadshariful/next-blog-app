import { assets } from '@/Assets/assets';
import Image from 'next/image';
import React from 'react';

const BlogItem = ({ title, image, category, description }) => {
    return (
        <div className='max-w-[330px] sm:max-w[300px] bg-white border border-black rounded-lg shadow-md p-4 m-4 hover:shadow-lg transition-shadow duration-300'>
            <Image src={image} alt='' width={400} height={400} className='border-b border-black' />
            <p className='ml-5 mt-5 px-1 inline-block bg-black text-white text-sm'>{category}</p>
            <div className="p-5">
                <h5 className='mb-2 text-lg font-medium tracking-tight text-gray-900'>{title}</h5>
                <p className='mb-3 tracking-tight text-gray-700'>{description}</p>
                <div className='inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-300 cursor-pointer'>
                    Read more <Image src={assets.arrow} alt='' width={12} className='ml-2' />
                </div>
            </div>
        </div>
    );
};

export default BlogItem;