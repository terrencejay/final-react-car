import React, { useState } from 'react';
import axios from 'axios';
import DataTable from './DataTable';
import CarForm from './CarForm';
import { Car, CarFormInputs } from '../types';

const API_URL = 'https://api.api-ninjas.com/v1/cars?limit=2&model=';
const API_KEY = 'Rcf1QFKKmyGSLtyV9XiDzQ==iktEMrdBhSwfyqZM';

const Dashboard: React.FC = () => {
    const [cars, setCars] = useState<Car[]>([]);
    const [model, setModel] = useState<string>('');

    const fetchCars = async (model: string) => {
        try {
            const response = await axios.get<Car[]>(`${API_URL}${model}`, {
                headers: { 'X-Api-Key': API_KEY }
            });
            setCars(response.data.map(car => ({ ...car, id: `${car.model}-${car.make}-${car.year}` })));
        } catch (error) {
            console.error(error);
        }
    };

    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        fetchCars(model);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setModel(event.target.value);
    };

    const handleAddCar = (data: CarFormInputs) => {
        const newCar: Car = { ...data, id: `${data.model}-${data.make}-${data.year}` };
        setCars([...cars, newCar]);
    };

    const handleUpdateCar = (updatedCar: Car) => {
        setCars(cars.map(car => (car.id === updatedCar.id ? updatedCar : car)));
    };

    const handleDeleteCar = (carId: string) => {
        setCars(cars.filter(car => car.id !== carId));
    };

    return (
        <div>
            <h1>Dashboard</h1>
            <form onSubmit={handleSearch}>
                <label>
                    Search by Model:
                    <input type="text" value={model} onChange={handleInputChange} />
                </label>
                <button type="submit">Search</button>
            </form>
            <CarForm onSubmit={handleAddCar} />
            <DataTable cars={cars} onUpdateCar={handleUpdateCar} onDeleteCar={handleDeleteCar} />
        </div>
    );
};

export default Dashboard;
