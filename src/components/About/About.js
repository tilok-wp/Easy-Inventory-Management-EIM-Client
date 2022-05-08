import React from 'react';
import PageTitleBar from '../PageTitleBar/PageTitleBar';

const About = () => {
    return (
        <div className='py-20'>
            <h3 className='text-center text-3xl uppercase mb-10'>About</h3>
            <p>About company text</p>

            <PageTitleBar title='About'></PageTitleBar>
        </div>
    );
};

export default About;