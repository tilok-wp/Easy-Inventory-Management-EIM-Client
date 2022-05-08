import React, { useEffect } from 'react';
import googleIcon from '../../images/google.png'
import facebookIcon from '../../images/facebook.png'
import auth from '../../firebase.init';
import { useSignInWithGoogle, useSignInWithFacebook } from 'react-firebase-hooks/auth'
import Loader from '../Loader/Loader';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoingWithSocial = () => {
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

    const [signInWithGoogle, userGoogle, loadingGoogle] = useSignInWithGoogle(auth);
    const [signInWithFacebook, userFacebook, loadingFacebook] = useSignInWithFacebook(auth);

    const getTokenUse = async (email) => {
        const { data } = await axios.post('https://secure-earth-46160.herokuapp.com/generate-token', { email })
        localStorage.setItem('secretToken', data.secretToken)
    }

    useEffect(() => {
        if (userGoogle || userFacebook) {
            const email = userGoogle.user.email
            getTokenUse(email)
            navigate(from, { replace: true });
        }
    }, [userGoogle, userFacebook, from, navigate])

    if (loadingGoogle || loadingFacebook) {
        return <Loader></Loader>
    }

    return (
        <div>
            <div className='flex items-center py-5'>
                <div className='bg-gray-500 grow h-px fle mr-3'></div> <strong>OR LOGIN WITH</strong> <div className='grow bg-gray-500 h-px ml-3'></div>
            </div>
            <div className='text-center'>
                <button onClick={() => signInWithGoogle()} className='rounded-full p-3 border-8 m-2 border-gray-300 shadow-2xl'><img src={googleIcon} alt="GoogleIcon" /></button>
                <button onClick={() => signInWithFacebook()} className='rounded-full p-3 border-8 m-2 border-gray-300 shadow-2xl'><img src={facebookIcon} alt="GoogleIcon" /></button>
            </div>
        </div>
    );
};

export default LoingWithSocial;