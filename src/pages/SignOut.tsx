import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SignOut: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Clear user authentication data here
        navigate('/');
    }, [navigate]);

    return (
        <div>
            <h1>Signing Out...</h1>
        </div>
    );
};

export default SignOut;
