import React from 'react';
import PageTitleBar from '../PageTitleBar/PageTitleBar';

const TermsCondition = () => {
    return (
        <div className='py-20 md:w-3/4 mx-auto'>
            <h3 className='text-center text-3xl uppercase mb-10'>Tarms and condition</h3>
            <h4 className='text-xl mt-5'>Some terms and condition as follows:</h4>

            <p>

                f you have a website or software application, you will likely need to have Terms of Service or as some people call it – Terms of Use for it. Terms of Service or Terms and Conditions (T&C) will, in legal terms, limit your business or personal liability.

                It is highly recommended to have robust and comprehensive Terms and Conditions for any website, online business, or application. It will provide you with proper protection in case some of your customers or users will decide to take legal action against your business.

                The best practice is only to allow using your service to people that agree with your Terms & Conditions, Disclaimer and Privacy Policy. This way, your website, business, or app will be protected from potential legal dangers.
            </p>
            <PageTitleBar title='Terms&Condition'></PageTitleBar>
        </div>
    );
};

export default TermsCondition;