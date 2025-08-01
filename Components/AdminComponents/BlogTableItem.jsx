import { assets } from '@/Assets/assets';
import Image from 'next/image';
import React from 'react';

const BlogTableItem = ({ authorImg, title, author, date, _id, deleteBlog }) => {
    return (
        <tr className='bg-white border-b'>
            <th scope='row' className='items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                <Image alt='' src={authorImg ? authorImg : assets.profile_icon} width={40} height={40} />
                <p>{author || 'No author'}</p>
            </th>
            <td className='px-6 py-4'>
                {title || 'No Title Provided'}
            </td>
            <td className='px-6 py-4'>
                {date ? new Date(date).toDateString() : 'No Date Provided'}
            </td>
            <td className='px-6 py-4 cursor-pointer' onClick={() => deleteBlog(_id)}>
                x
            </td>
        </tr>
    );
};

export default BlogTableItem;