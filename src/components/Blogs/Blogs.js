import React, { useEffect, useState } from 'react';
import PageTitleBar from '../PageTitleBar/PageTitleBar';
import Blog from '../Blog/blog';
import { Link } from 'react-router-dom';


const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className='py-20'>
            <h3 className='text-center text-3xl uppercase mb-5'>Blogs</h3>

            <div className='blog-container container md:mx-auto mx-3 grid md:grid-cols-2 gap-8'>
                {
                    blogs.map(item => <Blog
                        key={item._id}
                        item={item}
                    ></Blog>)
                }
            </div>
            <div className='text-center mt-8'>
                <Link to='/add-blog' className='bg-color-primary hover:bg-gray-800 px-10 py-3 mt-3 text-white rounded inline-block font-bold'>Add blog</Link>

            </div>

            <PageTitleBar title='Blogs'></PageTitleBar>
        </div>
    );
};

export default Blogs;