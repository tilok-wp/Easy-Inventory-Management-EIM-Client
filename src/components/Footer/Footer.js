import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='bg-gray-200 py-5'>
            <div className='container md:mx-auto md:flex md:justify-between text-center'>
                <div>
                    <a href="#" target="_blank" >Facebook</a>
                    <a className='mx-5' href="#" target="_blank" >Youtube</a>
                    <a href="#" target="_blank" >Twitter</a>
                </div>
                <div className='md:order-3'>
                    <Link className='mr-3' to='/privacy'> privacy</Link>
                    <Link to='/terms-condition'> terms & condition</Link>
                </div>
                <div className='md:order-2'>
                    <p>Copyright &copy;{new Date().getFullYear()} <strong><Link to={'/'} title="Easy Inventory Management">EIM</Link></strong> all right reserved.</p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;