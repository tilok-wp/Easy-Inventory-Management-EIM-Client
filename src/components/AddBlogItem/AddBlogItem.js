import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import PageTitleBar from '../PageTitleBar/PageTitleBar';
const axios = require('axios')

const AddBlogItem = () => {
    const navigate = useNavigate()
    const [user] = useAuthState(auth)

    const { register, handleSubmit } = useForm();

    const onSubmitBlog = async (data) => {
        const imageUrl = data.imageUrl
        const blogHeading = data.blogHeading
        const blogDescription = data.blogDescription
        const authorEmail = user?.email
        // console.log(data)
        const blog = { imageUrl, blogHeading, blogDescription, authorEmail }
        axios.post('http://localhost:5000/blogs', blog)
            .then(res => {
                const { data, status } = res
                if (data.insertedId && status === 200) {
                    toast.success(`New blog item added!! ID: ${data.insertedId}`)
                    // navigate('/blogs')
                } else {
                    toast.error('Some thing wrong!! Try again')
                }
            })

    }
    return (
        <section className='py-20 px-3 md:px-0'>
            <h3 className='text-center text-3xl uppercase mb-5'>Add New Blog</h3>
            <form className=' md:w-1/2 md:mx-auto' onSubmit={handleSubmit(onSubmitBlog)}>
                <input className='shadow p-5 w-full mb-5 rounded-lg' placeholder='Image Url' type="text" {...register("imageUrl", { required: true })} />
                <input className='shadow p-5 w-full mb-5 rounded-lg' placeholder='Blog heading' type="text" {...register("blogHeading", { required: true })} />
                <textarea className='resize-none shadow p-5 w-full mb-5 rounded-lg' placeholder='Description' {...register("blogDescription", { required: true })} />
                <input type="submit" value="Submit" className='cursor-pointer bg-color-primary hover:bg-gray-800 font-semibold px-12 py-3 mt-3 mx-auto text-white  rounded block' />
            </form>
            <PageTitleBar title='Add Blog'></PageTitleBar>
        </section>
    );
};

export default AddBlogItem;