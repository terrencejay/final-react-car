import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { CarFormInputs } from '../types';

interface CarFormProps {
    onSubmit: (data: CarFormInputs) => void;
}

const CarForm: React.FC<CarFormProps> = ({ onSubmit }) => {
    const { register, handleSubmit, reset } = useForm<CarFormInputs>();

    const handleFormSubmit: SubmitHandler<CarFormInputs> = (data) => {
        onSubmit(data);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)}>
            <label>
                Model:
                <input {...register('model')} />
            </label>
            <label>
                Make:
                <input {...register('make')} />
            </label>
            <label>
                Year:
                <input type="number" {...register('year')} />
            </label>
            <label>
                Price:
                <input type="number" {...register('price')} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default CarForm;
