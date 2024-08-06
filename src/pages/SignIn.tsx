import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

interface SignInFormInputs {
    username: string;
    password: string;
}

const SignIn: React.FC = () => {
    const { register, handleSubmit } = useForm<SignInFormInputs>();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<SignInFormInputs> = (data) => {
        console.log(data);
        // You can add authentication logic here
        navigate('/dashboard');
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                Username:
                <input {...register('username')} />
            </label>
            <label>
                Password:
                <input type="password" {...register('password')} />
            </label>
            <button type="submit">Sign In</button>
        </form>
    );
};

export default SignIn;
