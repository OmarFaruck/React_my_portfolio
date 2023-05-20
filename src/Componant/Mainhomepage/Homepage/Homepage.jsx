import React from 'react';
import MainContact from '../MainContact/MainContact';
import Mycourseplan from '../Mycourseplan/Mycourseplan';
import Mypage from '../Mypage/Mypage';
 

const Homepage = () => {
    return (
        <>
             <Mypage/>
             <Mycourseplan/>
             <MainContact /> 
        </>
    );
};

export default Homepage;