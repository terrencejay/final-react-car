import React, { useState } from 'react';
import CarDetails from './CarDetails';
import CarUpdateForm from './CarUpdateForm';
import { Car } from '../types';

interface DataTableProps {
    cars: Car[];
    onUpdateCar: (car: Car) => void;
    onDeleteCar: (carId: string) => void;
}

const DataTable: React.FC<DataTableProps> = ({ cars, onUpdateCar, onDeleteCar }) => {
    const [editingCar, setEditingCar] = useState<Car | null>(null);

    return (
        <div>
            {cars.map((car) => (
                <div key={car.id}>
                    {editingCar && editingCar.id === car.id ? (
                        <CarUpdateForm car={editingCar} onSubmit={onUpdateCar} />
                    ) : (
                        <>
                            <CarDetails car={car} />
                            <button onClick={() => setEditingCar(car)}>Edit</button>
                            <button onClick={() => onDeleteCar(car.id)}>Delete</button>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};

export default DataTable;
