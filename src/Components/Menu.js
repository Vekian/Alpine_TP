import React, { useEffect } from 'react';
import { loadSection } from '../features/car/carSlice.js';
import { useDispatch } from 'react-redux';
import { Routes, Route, useLocation } from 'react-router-dom';
import Version from './Version';
import Color from './Color';
import Summary from './Summary';
import Rims from './Rims';
import Saddlery from './Saddlery';
import Equipment from './Equipment';
import Accessory from './Accessory';

function Menu() {
    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadSection(location.pathname));
    }, [location.pathname, dispatch])
    
    return (
        <div className='col-xl-3 col-md-4 col-12 text-white pb-0'>
            <div className=' menuConfigurator p-2'>
                <Routes>
                    <Route path="/" element={<Version />} />
                    <Route path="/color" element={<Color />} />
                    <Route path="/rims" element={<Rims />} />
                    <Route path="/saddlery" element={<Saddlery />} />
                    <Route path="/equipment" element={<Equipment />} />
                    <Route path="/accessory" element={<Accessory />} />
                </Routes>
            </div>    
            <div className=''>
                <Summary />
            </div>
        </div>
    );
}

export default Menu;