import { assets } from '@/Assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Sidebar = () => {
    return (
        <div className='flex flex-col bg-slate-100'>
            <div className='px-2 sm:pl-14 py-3 border border-black w-full'>
                <Link href={'/'}>
                    <Image width={120} alt='' src={assets.logo} />
                </Link>
                <div className='w-28 sm:w-80 h-[100vh] relative py-12 border-black'>
                    <div className='w-[50%] sm:w-[80%] absolute right-0'>
                        <Link href={'/admin/addBlog'} className='flex items-center border-black gap-3 font-medium px-3 py-2 bg-white shadow-sm'>

                            <Image alt='' width={28} src={assets.add_icon} />
                            <p>Add blogs</p>
                        </Link>
                        <Link href={'/admin/blogList'} className='flex items-center border-black gap-3 font-medium px-3 py-2 bg-white shadow-sm mt-5'>

                            <Image alt='' width={28} src={assets.blog_icon} />
                            <p>Blog Lists</p>
                        </Link>
                        <Link href={'/admin/subscription'} className='flex items-center border-black gap-3 font-medium px-3 py-2 bg-white shadow-sm mt-5'>

                            <Image alt='' width={28} src={assets.email_icon} />
                            <p>Subscription</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;