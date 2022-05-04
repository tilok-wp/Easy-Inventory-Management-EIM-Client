import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import LoingWithSocial from '../LoingWithSocial/LoingWithSocial';

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);

    const { register, handleSubmit } = useForm();
    const onSubmitLogin = async data => {
        await signInWithEmailAndPassword(data.email, data.password)
    };


    return (
        <div className='py-20 bg-slate-100 px-5'>
            <h3 className="my-5 text-center text-3xl uppercase">Login Please</h3>
            <div className='md:w-1/3 mx-auto'>
                <form onSubmit={handleSubmit(onSubmitLogin)}>
                    <input className='shadow p-5 w-full mb-5 rounded-lg' placeholder='Email' type="email" {...register("email", { required: true })} />
                    <input className='shadow p-5 w-full mb-5 rounded-lg' placeholder='Password' type='password' {...register("password", { required: true })} />
                    <input type="submit" value="Login" className='cursor-pointer bg-color-primary hover:bg-gray-800 font-semibold px-12 py-3 mt-3 mx-auto text-white  rounded block' />

                </form>
                <p className='text-xl mt-10 mb-3'>Are you new user? <Link className='font-bold' to='/register'> Register </Link> </p>
                <p className='text-xl my-3'>Forgot your password? <button className='font-bold' > Reset password</button> </p>
                <LoingWithSocial></LoingWithSocial>

            </div>

        </div>
    );
};

export default Login;