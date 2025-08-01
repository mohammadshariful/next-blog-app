import { assets } from '@/Assets/assets';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const Header = () => {
    const [email, setEmail] = useState("");

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("email", email);
        const response = await axios.post('/api/email', formData)
        if (response?.data?.success) {
            toast.success(response.data.message);
            setEmail("");
        } else {
            toast.error(response?.data?.message || "Something went wrong");
        }
    }



    return (
        <>
            <ToastContainer />
            <div className='py-5 px-5 md:px-12 lg:px-28'>
                <div className='flex justify-between items-center'>
                    <Image src={assets.logo} width={180} alt='logo' className='w-[130px] sm:w-auto' />
                    <div className='flex items-center gap-4'>
                        <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000] cursor-pointer'>Get started <Image src={assets.arrow} alt='' /></button>
                        <Link href='/admin' className='border bg-black text-white border-gray-400 py-2 px-6 rounded-sm'>
                            Admin
                        </Link>
                    </div>
                </div>
                <div className='text-center my-8'>
                    <h1 className='text-3xl sm:text-5xl font-medium'>Latest Blogs</h1>
                    <p className='mt-10 max-w-[740px] mx-auto text-xs sm:text-base'>
                        Discover the latest insights and trends in the world of technology, design, and innovation. Stay updated with our curated collection of articles that inspire and inform.
                    </p>
                    <form onSubmit={onSubmitHandler} className='flex justify-between mx-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000]'>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Enter your email' className='pl-4 outline-none' />
                        <button type='submit' className='border-1 border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white'>Subscribe</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Header;