import React from 'react';
import { loadSaddlery } from '../features/car/carSlice.js';
import { useDispatch, useSelector } from 'react-redux'

function Saddlery (){
    const saddlery = useSelector(state => state.car.data.saddlery);
    const currentSaddlery = useSelector(state => state.car.currentCar.saddlery);
    const currentVersion = useSelector(state => state.car.currentCar.version);
    const dispatch = useDispatch();

    function handleClick(event, nameSaddlery){
        event.preventDefault();
        let saddlerySelected = saddlery.find(function (saddle) {
            return saddle.name === nameSaddlery;
        });
        dispatch( loadSaddlery(saddlerySelected) );
    }

    return (
        <div className="text-white">
            <h3 className='text-center menuTitle m-0 mb-3'>
                Sellerie
            </h3>
            {saddlery.map( saddlery => (currentVersion.name === "Pure" ? saddlery.version === "Pure" && <div key= {saddlery.name} className={saddlery.name === currentSaddlery.name ? "border p-2 mb-2 itemSelect" : "borderPassive p-2 mb-2 itemSelect"} onClick={(event) => handleClick(event, saddlery.name)} >
                    <h3 className='text-center'>
                        {saddlery.name}
                    </h3>
                    <div className='d-flex justify-content-around align-items-center'>
                        <img src={ saddlery.img.selection } alt={saddlery.name} width="50%"/>
                        <p className='pt-3 text-warning fw-bolder fs-4'>
                            {saddlery.price} €
                        </p>
                    </div>
                    
                </div> : 
                    saddlery.version === "Legende" && <div key= {saddlery.name} className={saddlery.name === currentSaddlery.name ? "border p-2 mb-2 itemSelect" : "borderPassive p-2 mb-2 itemSelect"} onClick={(event) => handleClick(event, saddlery.name)} >
                    <h3 className='text-center'>
                        {saddlery.name}
                    </h3>
                    <div className='d-flex justify-content-around align-items-center'>
                        <img src={ saddlery.img.selection } alt={saddlery.name} width="50%"/>
                        <p className='pt-3 text-warning fw-bolder fs-4'>
                        <span className='text-white'>Prix: </span><br />
                            {saddlery.price} €
                        </p>
                    </div>
                    
                </div>)
            )}
        </div>
    )
}

export default Saddlery;