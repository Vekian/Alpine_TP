import React, { useEffect } from 'react';
import Carousel from './Carousel';
import Menu from './Menu';
import Breadcrumb from './Breadcrumb';
import { BrowserRouter as Router } from 'react-router-dom';
import { loadVersion, loadColor, loadRims, loadSaddlery, loadSection, loadEquipment } from '../features/car/carSlice.js';
import { useDispatch, useSelector } from 'react-redux'

function Configurator(){
    const car = useSelector(state => state.car.data);
    const dispatch = useDispatch();

    useEffect(() => {
        let versionDefault = car.versions[0];
        let colorDefault = car.colors[0];
        let rimDefault = car.rims.find(function (rim) {
                return rim.version === versionDefault.name;
            });
        let saddleryDefault = car.saddlery.find(function (saddle) {
            return saddle.version === versionDefault.name;
        });

        for (let equipment of car.equipment) {
            for (let item of equipment.items) {
                if (item.default) {
                    dispatch( loadEquipment(item) );
                }
            }
        }

        
        dispatch( loadSection("/"));
        dispatch( loadVersion(versionDefault) );
        dispatch( loadColor(colorDefault) );
        dispatch( loadRims(rimDefault) );
        dispatch( loadSaddlery(saddleryDefault) );
    }, []);

     return (
        <div className='d-flex flex-column'>
            <Router>
                <div >
                <Breadcrumb /> 
                </div>
                <div className="d-flex flex-wrap menuCarousel">
                    <Carousel />
                    <Menu />
                </div>
            </Router>
        </div>
        
     )
}

export default Configurator