import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

const Navbar: React.FC = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Car Inventory
                </Typography>
                <Button color="inherit" component={Link} to="/">
                    Home
                </Button>
                <Button color="inherit" component={Link} to="/signin">
                    Sign In
                </Button>
                <Button color="inherit" component={Link} to="/dashboard">
                    Dashboard
                </Button>
                <Button color="inherit" component={Link} to="/signout">
                    Sign Out
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
