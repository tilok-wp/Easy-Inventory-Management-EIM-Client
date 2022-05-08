import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loader from '../../components/Loader/Loader';
import auth from '../../firebase.init';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [sendEmailVerification, sending] = useSendEmailVerification(auth);
    const location = useLocation()

    if (loading || sending) {
        return <Loader></Loader>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    if (!user.emailVerified && user.providerData[0]?.providerId === 'password') {
        return <>
            <div className='py-24 text-center'>
                <h3 className='text-red-600 text-xl'>Email not verified.</h3>
                <h3 className='text-gray-600 mt-3'>Please verify  your email.</h3>
                <button
                    onClick={async () => {
                        await sendEmailVerification();
                        toast.success('Verification email Sent to your email. Please verify!!');
                    }}
                    className='bg-color-primary hover:bg-gray-800 px-9 py-3 mt-3 mx-auto text-white  rounded block'>Send verification email </button>
            </div>
        </>
    }

    return children
};

export default RequireAuth;