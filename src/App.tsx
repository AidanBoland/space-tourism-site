import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.scss';

import Navbar from './components/navbar/navbar';

import Home from './pages/home';
import Destination from './pages/destination';
import Crew from './pages/crew';
import Technology from './pages/technology';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/destination' element={<Destination />} />
                <Route path='/crew' element={<Crew />} />
                <Route path='/technology' element={<Technology />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
