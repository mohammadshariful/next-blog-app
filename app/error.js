'use client';
import React from 'react';

const Error = ({ error }) => {
    return (
        <div>
            {error.message ? (
                <h1 className='text-red-500 text-center mt-10'>{error.message}</h1>
            ) : (
                <h1 className='text-red-500 text-center mt-10'>Something went wrong!</h1>
            )}
            <p className='text-center mt-5'>Please try again later.</p>
            <p className='text-center mt-5'>If the problem persists, contact support.</p>
            <p className='text-center mt-5'>Thank you for your patience.</p>
            <p className='text-center mt-5'>Error details: {error.toString()}</p>
            <p className='text-center mt-5'>We apologize for the inconvenience.</p>
            <p className='text-center mt-5'>Please refresh the page or try again later.</p>
            <p className='text-center mt-5'>If you need immediate assistance, please reach out to our support team.</p>
            <p className='text-center mt-5'>Thank you for your understanding.</p>
            <p className='text-center mt-5'>We are working to resolve the issue as quickly as possible.</p>
            <p className='text-center mt-5'>Your feedback is important to us, and we appreciate your patience during this time.</p>
            <p className='text-center mt-5'>If you have any questions or concerns, please feel free to contact us.</p>
            <p className='text-center mt-5'>We value your support and will do our best to assist you.</p>
            <p className='text-center mt-5'>Thank you for being a valued user.</p>
            <p className='text-center mt-5'>We are committed to providing you with the best experience possible.</p>
            <p className='text-center mt-5'>If you encounter any further issues, please let us know.</p>
            <p className='text-center mt-5'>We appreciate your understanding and cooperation.</p>
            <p className='text-center mt-5'>Your satisfaction is our priority, and we will work diligently to resolve this matter.</p>
            <p className='text-center mt-5'>Thank you for your continued support and trust in our service.</p>
        </div>
    );
};

export default Error;