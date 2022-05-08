import axios from 'axios';
import React, { useEffect, useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loader from '../Loader/Loader';
import LoingWithSocial from '../LoingWithSocial/LoingWithSocial';
import PageTitleBar from '../PageTitleBar/PageTitleBar';

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    const refResetEmail = useRef('')

    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const { register, handleSubmit } = useForm();
    const onSubmitLogin = async (inputData, e) => {
        const email = inputData.email
        const password = inputData.password
        await signInWithEmailAndPassword(email, password)
        e.target.reset()
        const { data } = await axios.post('https://secure-earth-46160.herokuapp.com/generate-token', { email })
        localStorage.setItem('secretToken', data.secretToken)

    };

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }

    }, [user, navigate, from])
    const passResetHandaller = async () => {
        const email = refResetEmail.current.value
        if (email) {
            sendPasswordResetEmail(email)
            toast.success('Rest email send. Please check your inbox.');
        } else {
            toast.info('Please enter your register email.');
        }
    }
    if (loading || sending) {
        return <Loader></Loader>
    }
    let errorMessage = ''
    if (error) {
        const passwordErr = error?.message.includes('wrong-password')
        // console.log(passwordErr)
        if (passwordErr) {
            errorMessage = 'Email and Password not matched. Please try with Write info'
        } else {
            errorMessage = error?.message
        }
        errorMessage = <p className='text-red-700 py-3 text-xl'>{errorMessage}</p>

    }



    return (
        <div className='py-20 bg-slate-100 px-5'>
            <h3 className="my-5 text-center text-3xl uppercase">Login Please</h3>
            <div className='md:w-1/3 mx-auto'>
                <form onSubmit={handleSubmit(onSubmitLogin)}>
                    <input className='shadow p-5 w-full mb-5 rounded-lg' ref={refResetEmail} placeholder='Email' type="email" {...register("email", { required: true })} />
                    <input className='shadow p-5 w-full mb-5 rounded-lg' placeholder='Password' type='password' {...register("password", { required: true })} />
                    <input type="submit" value="Login" className='cursor-pointer bg-color-primary hover:bg-gray-800 font-semibold px-12 py-3 mt-3 mx-auto text-white  rounded block' />

                </form>
                {errorMessage}
                <p className='text-xl mt-10 mb-3'>Are you new user? <Link className='font-bold' to='/register'> Register </Link> </p>
                <p className='text-xl my-3'>Forgot your password? <button onClick={passResetHandaller} className='font-bold' > Reset password</button> </p>
                <LoingWithSocial></LoingWithSocial>

            </div>
            <PageTitleBar title='Login'></PageTitleBar>
        </div>
    );
};

export default Login;