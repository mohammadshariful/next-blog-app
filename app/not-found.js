import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div>
            <h1 className='text-red-500 text-center mt-10'>Page Not Found</h1>
            <p className='text-center mt-5'>The page you are looking for does not exist.</p>
            <p className='text-center mt-5'>Please check the URL for any errors.</p>
            <p className='text-center mt-5'>If you believe this is an error, please contact support.</p>
            <div className='flex justify-center mt-10'>
                <Link href={'/'} className='border bg-black text-white px-4 py-2 rounded-sm text-center inline-block mx-auto'>Go to home</Link>
            </div>
        </div>
    );
};

export default NotFound;