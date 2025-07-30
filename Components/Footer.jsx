import { assets } from '@/Assets/assets';
import Image from 'next/image';
import React from 'react';

const Footer = () => {
    return (
        <div className='flex justify-around flex-col gap-2 sm:gap[0] sm:flex-row items-center bg-gray-800 text-white py-4'>
            <Image src={assets.logo_light} alt='' width={120} />
            <p className='text-sm text-center'>
                &copy; {new Date().getFullYear()} Next Blog App. All rights reserved.
            </p>
            <div className='flex'>
                <Image src={assets.facebook_icon} alt='facebook' width={40} />
                <Image src={assets.twitter_icon} alt='facebook' width={40} />
                <Image src={assets.googleplus_icon} alt='facebook' width={40} />
            </div>
        </div>
    );
};

export default Footer;