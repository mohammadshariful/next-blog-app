// import { blog_data } from '@/Assets/assets';
import React, { useEffect, useState } from 'react';
import BlogItem from './BlogItem';
import axios from 'axios';

const BlogList = () => {
    const [menu, setMenu] = useState('All');
    const [blogsData, setBlogsData] = useState([]);

    const fetchBlogs = async () => {
        const response = await axios.get('/api/blog');
        if (response.status === 200) {
            // console.log(response);
            setBlogsData(response.data);
        }
    }

    useEffect(() => {
        fetchBlogs();
    }, [])

    // console.log(blogsData);

    const filteredData = menu === 'All' ? blogsData : blogsData.filter(item => item.category === menu);

    return (
        <div>
            <div className='flex justify-center gap-6 my-10 flex-wrap'>
                {['All', 'Technology', 'Startup', 'Lifestyle'].map((item) => (
                    <button
                        key={item}
                        className={`py-1 px-4 rounded-sm ${menu === item ? 'bg-black text-white' : 'bg-gray-200 text-black'}`}
                        onClick={() => setMenu(item)}
                    >
                        {item}
                    </button>
                ))}
            </div>
            <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
                {filteredData.map((item, index) => <BlogItem key={index} {...item} />)}
            </div>
        </div>
    );
};

export default BlogList;