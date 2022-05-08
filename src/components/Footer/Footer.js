import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='bg-gray-200 py-5'>
            <div className='container md:mx-auto md:flex md:justify-between text-center'>
                <div>

                    <a href="https://www.facebook.com/TilokPaul" target="_blank" rel="noopener noreferrer" >Facebook</a>
                    <a className='mx-5' href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" >Youtube</a>
                    <a href="https://twitter.com/tilokpaul" target="_blank" rel="noopener noreferrer" >Twitter</a>

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