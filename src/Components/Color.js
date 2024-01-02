import React from 'react';
import { loadColor } from '../features/car/carSlice.js';
import { useDispatch, useSelector } from 'react-redux'

function Color (){
    let colors = useSelector(state => state.car.data.colors);
    let currentColor = useSelector(state => state.car.currentCar.color);
    const dispatch = useDispatch();

    function handleClick(event, nameColor){
        event.preventDefault();
        let colorSelected = colors.find(function (color) {
            return color.name === nameColor;
        });
        dispatch( loadColor(colorSelected) );
    }

    return (
        <div className="text-white">
            <h3 className='text-center menuTitle m-0  mb-3'>
                Couleur
            </h3>
            {colors.map( color => <div key= {color.name} className={color.name === currentColor.name ? "border p-2 mb-2 itemSelect" : "borderPassive p-2 mb-2 itemSelect"} onClick={(event) => handleClick(event, color.name)} >
                    <h3 className='text-center'>
                        {color.name}
                    </h3>
                    <div className='d-flex justify-content-around align-items-center'>
                        <img src={ color.img } alt={color.name} width="50%"/>
                        <p className='pt-3 text-warning fw-bolder fs-4'>
                        <span className='text-white'>Prix: </span><br />
                            {color.price} €
                        </p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Color;