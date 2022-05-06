import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const AddBlogItem = () => {
    const navigate = useNavigate()

    const { register, handleSubmit } = useForm();

    const onSubmitBlog = async (data) => {
        const imageUrl = data.imageUrl
        const blogHeading = data.blogHeading
        const blogDescription = data.blogDescription
        console.log(data)
        // navigate('/blogs')
    }
    return (
        <div className='py-20'>
            <h3 className='text-center text-3xl uppercase mb-5'>Add New Blog</h3>
            <form className=' md:w-1/2 mx-auto' onSubmit={handleSubmit(onSubmitBlog)}>
                <input className='shadow p-5 w-full mb-5 rounded-lg' placeholder='Image Url' type="text" {...register("imageUrl", { required: true })} />
                <input className='shadow p-5 w-full mb-5 rounded-lg' placeholder='Blog heading' type="text" {...register("blogHeading", { required: true })} />
                <textarea className='shadow p-5 w-full mb-5 rounded-lg' placeholder='Description' {...register("blogDescription", { required: true })} />
                <input type="submit" value="Submit" className='cursor-pointer bg-color-primary hover:bg-gray-800 font-semibold px-12 py-3 mt-3 mx-auto text-white  rounded block' />
            </form>

        </div>
    );
};

export default AddBlogItem;