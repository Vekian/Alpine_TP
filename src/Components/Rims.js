import React from 'react';
import { loadRims } from '../features/car/carSlice.js';
import { useDispatch, useSelector } from 'react-redux'

function Rims (){
    const rims = useSelector(state => state.car.data.rims);
    const currentRim = useSelector(state => state.car.currentCar.rims);
    const currentVersion = useSelector(state => state.car.currentCar.version);
    const dispatch = useDispatch();

    function handleClick(event, nameRim){
        event.preventDefault();
        let rimSelected = rims.find(function (rim) {
            return rim.name === nameRim;
        });
        dispatch( loadRims(rimSelected) );
    }

    return (
        <div className="text-white">
            <h3 className='text-center menuTitle m-0  mb-3'>
                Jantes
            </h3>
            {rims.map( rim => (currentVersion.name === "Pure" ? rim.version === "Pure" && <div key= {rim.name} className={rim.name === currentRim.name ? "border p-2 mb-2 itemSelect" : "borderPassive p-2 mb-2 itemSelect"} onClick={(event) => handleClick(event, rim.name)} >
                    <h3 className='text-center'>
                        {rim.name}
                    </h3>
                    <div className='d-flex justify-content-around align-items-center'>
                        <img src={ rim.img.selection } alt={rim.name} width="50%" onClick={(event) => handleClick(event, rim.name)} />
                        <p className='pt-3 text-warning fw-bolder fs-4'>
                            {rim.price} €
                        </p>
                    </div>
                </div> :
                    rim.version === "Legende" && <div key= {rim.name} className={rim.name === currentRim.name ? "border p-2 mb-2 itemSelect" : "borderPassive p-2 mb-2 itemSelect"} onClick={(event) => handleClick(event, rim.name)} >
                    <h3 className='text-center'>
                        {rim.name}
                    </h3>
                    <div className='d-flex justify-content-around align-items-center'>
                        <img src={ rim.img.selection } alt={rim.name} width="50%"/>
                        <p className='pt-3 text-warning fw-bolder fs-4'>
                        <span className='text-white'>Prix: </span><br />
                            {rim.price} €
                        </p>
                    </div>
                </div>) 
            )}
        </div>
    )
}

export default Rims;