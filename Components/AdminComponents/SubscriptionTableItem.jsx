import React from 'react';

const SubscriptionTableItem = ({ email, date, _id, deleteEmail }) => {
    return (
        <tr className='bg-white border-b text-left'>
            <th scope='row' className='items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                {email || 'No Email Provided'}
            </th>
            <td className='px-6 py-4'>
                {date ? new Date(date).toDateString() : 'No Date Provided'}
            </td>
            <td className='px-6 py-4 cursor-pointer' onClick={() => deleteEmail(_id)}>
                x
            </td>
        </tr>
    );
};

export default SubscriptionTableItem;