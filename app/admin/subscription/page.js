'use client';
import SubscriptionTableItem from '@/Components/AdminComponents/SubscriptionTableItem';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const EmailSubscriptionPage = () => {


    const [emails, setEmails] = useState([]);
    const fetchEmails = async () => {
        const response = await axios.get('/api/email');
        if (response.status === 200) {
            setEmails(response.data);
            // console.log(response);

        }
    }
    useEffect(() => {
        fetchEmails();
    }, [])

    const deleteEmail = async (id) => {
        const response = await axios.delete(`/api/email`, {
            params: {
                id
            }
        });
        if (response.status === 200) {
            toast.success(response?.data?.message);
            fetchEmails();
        }
        else {
            toast.error(response?.data?.message || "Failed to delete blog");
        }
    }




    return (
        <>
            <ToastContainer />

            <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16'>
                <h1>All Subscription</h1>
                <div className='relative h-[60vh] max-w-[850px] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide'>
                    <table className='w-full text-sm text-gray-500'>
                        <thead className='text-sm text-gray-700 text-left uppercase bg-gray-50'>
                            <tr>
                                <th scope='col' className='hidden sm:block px-6 py-3'>Email Subscription</th>
                                <th scope='col' className=' px-6 py-3'> Date</th>
                                <th scope='col' className=' px-6 py-3'>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {emails?.map((blog, index) => <SubscriptionTableItem key={index} {...blog} deleteEmail={deleteEmail} />)}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default EmailSubscriptionPage;