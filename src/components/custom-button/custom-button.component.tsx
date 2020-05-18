import React from 'react';

import './custom-button.styles.scss'

interface CustomButtonProps {
    children: any,
    googleSignIn?: boolean,
    onClick?: any,
}

const CustomButton = ({children, googleSignIn, ...otherProps}: CustomButtonProps) => (
    <button type={"submit"} className={`${googleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
);
export default CustomButton;
