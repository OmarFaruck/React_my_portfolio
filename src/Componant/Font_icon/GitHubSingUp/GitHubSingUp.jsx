import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import { FaGithubSquare } from 'react-icons/fa';
import '../GitHubSingUp/GitHubSingUp.css'
const GitHubSingUp = () => {
    return (
        <>
            <Button><FaGithubSquare  className='github'/></Button> 
        </>
    );
};

export default GitHubSingUp;