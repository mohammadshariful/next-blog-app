import { assets } from '@/Assets/assets';
import Sidebar from '@/Components/AdminComponents/Sidebar';
import Image from 'next/image';
import React from 'react';
import { ToastContainer } from 'react-toastify';

const Layout = ({ children }) => {
    return (
        <>
            <div className='flex'>
                <Sidebar />
                <div className='flex flex-col w-full'>
                    <div className='flex items-center justify-between w-full py-3 max-h-[60px] px-12 border-b border-black'>
                        <h3 className='font-medium'>Admin Panel</h3>
                        <Image alt='' src={assets.profile_icon} width={40} />
                    </div>
                    {children}
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default Layout;