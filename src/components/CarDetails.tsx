import React from 'react';

interface CarDetailsProps {
    car: {
        model: string;
        make: string;
        year: number;
        price: number;
    };
}

const CarDetails: React.FC<CarDetailsProps> = ({ car }) => {
    return (
        <div>
            <h3>{car.model}</h3>
            <p>Make: {car.make}</p>
            <p>Year: {car.year}</p>
            <p>Price: ${car.price}</p>
        </div>
    );
};

export default CarDetails;
