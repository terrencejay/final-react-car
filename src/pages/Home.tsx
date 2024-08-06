import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <div>
            <h1>Welcome to Car Inventory</h1>
            <Link to="/dashboard">Go to Dashboard</Link>
        </div>
    );
};

export default Home;
