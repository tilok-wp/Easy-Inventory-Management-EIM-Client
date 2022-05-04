import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import LoingWithSocial from '../LoingWithSocial/LoingWithSocial';

const Register = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='py-20 bg-slate-100 px-5'>
            <h3 className="my-5 text-center text-3xl uppercase">Register Please</h3>
            <div className='md:w-1/3 mx-auto'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className='shadow p-5 w-full mb-5 rounded-lg' placeholder='Full Name' type="text" {...register("displayName", { required: true })} />
                    <input className='shadow p-5 w-full mb-5 rounded-lg' placeholder='Email' type="email" {...register("email", { required: true })} />
                    <input className='shadow p-5 w-full mb-5 rounded-lg' placeholder='Password' type='password' {...register("password", { required: true })} />
                    <input type="submit" value="Login" className='cursor-pointer bg-color-primary hover:bg-gray-800 font-semibold px-12 py-3 mt-3 mx-auto text-white  rounded block' />
                </form>
                <p className='text-xl my-10'>Already registered? <Link className='font-bold' to='/login'>Login</Link> </p>
                <LoingWithSocial></LoingWithSocial>
            </div>

        </div>
    );
};

export default Register;