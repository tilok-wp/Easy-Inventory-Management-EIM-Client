import React from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loader from '../Loader/Loader';
import LoingWithSocial from '../LoingWithSocial/LoingWithSocial';
import PageTitleBar from '../PageTitleBar/PageTitleBar';

const Register = () => {
    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";


    const { register, handleSubmit } = useForm();
    const onSubmitRegister = async (data) => {
        const email = data.email
        const password = data.password
        const displayName = data.displayName

        createUserWithEmailAndPassword(email, password)
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName })
        // navigate(from, { replace: true })
    }
    if (user) {
        navigate(from, { replace: true })
    }

    if (loading || updating) {
        return <Loader></Loader>
    }
    let errorMessage
    if (error || updateError) {
        errorMessage = <p className='text-red-700 py-3'>{error?.message || updateError.message}</p>
    }

    return (
        <div className='py-20 bg-slate-100 px-5'>
            <h3 className="my-5 text-center text-3xl uppercase">Register With Email</h3>
            <div className='md:w-1/3 mx-auto'>
                <form onSubmit={handleSubmit(onSubmitRegister)}>
                    <input className='shadow p-5 w-full mb-5 rounded-lg' placeholder='Full Name' type="text" {...register("displayName", { required: true })} />
                    <input className='shadow p-5 w-full mb-5 rounded-lg' placeholder='Email' type="email" {...register("email", { required: true })} />
                    <input className='shadow p-5 w-full mb-5 rounded-lg' placeholder='Password' type='password' {...register("password", { required: true })} />
                    <input type="submit" value="Register" className='cursor-pointer bg-color-primary hover:bg-gray-800 font-semibold px-12 py-3 mt-3 mx-auto text-white  rounded block' />
                </form>
                {errorMessage}
                <p className='text-xl my-10'>Already registered? <Link className='font-bold' to='/login'>Login</Link> </p>
                <LoingWithSocial></LoingWithSocial>
            </div>
            <PageTitleBar title='Register'></PageTitleBar>
        </div>
    );
};

export default Register;