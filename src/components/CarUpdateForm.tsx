import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Car, CarFormInputs } from '../types';

interface CarUpdateFormProps {
    car: Car;
    onSubmit: (updatedCar: Car) => void;
}

const CarUpdateForm: React.FC<CarUpdateFormProps> = ({ car, onSubmit }) => {
    const { register, handleSubmit, reset } = useForm<CarFormInputs>({
        defaultValues: {
            model: car.model,
            make: car.make,
            year: car.year,
            price: car.price
        }
    });

    const handleFormSubmit: SubmitHandler<CarFormInputs> = (data) => {
        onSubmit({ ...data, id: car.id });
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
            <button type="submit">Update</button>
        </form>
    );
};

export default CarUpdateForm;
