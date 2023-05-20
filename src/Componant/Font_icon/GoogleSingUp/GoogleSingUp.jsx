import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import { FaGooglePlusSquare } from 'react-icons/fa';
import '../GoogleSingUp/GoogleSingUp.css'
const GoogleSingUp = () => {
    return (
        <>
             <Button type="sub" className="w-0"><FaGooglePlusSquare  className='Google'/></Button> 
        </>
    );
};

export default GoogleSingUp;