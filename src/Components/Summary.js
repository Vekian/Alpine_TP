import React, { useEffect } from 'react';
import { loadTotalPrice } from '../features/car/carSlice.js';
import { useDispatch, useSelector } from 'react-redux';

function Summary (){
    const currentCar = useSelector(state => state.car.currentCar);
    const dispatch = useDispatch();

    useEffect(() =>{
        getTotalPrice(currentCar);
    }, [currentCar]);

    function getTotalPrice(car){
        let totalPrice = 0;

        totalPrice += car.version.price + car.color.price + car.rims.price + car.saddlery.price;
        for (let item of currentCar.equipment){
            totalPrice += item.price;
        }
        for (let item of currentCar.accessory){
            totalPrice += item.price;
        }
        dispatch(loadTotalPrice(totalPrice));
    }

    return (
        <div className='ps-3 pe-3  pt-1 pb-1  d-flex justify-content-around align-items-center summary'>
            <p className='mb-0 pb-0 text-center fw-bolder totalPrice col-5'>
                <span>Prix total: </span><span className='text-warning'>{currentCar.totalPrice} €</span>
            </p>
            <button className='Btn ms-1' type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
            </button>
            <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header bg-black">
                            <h5 className="modal-title" id="exampleModalLabel">Récapitulatif de la commande</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body bg-dark">
                            <h2 className='text-center'>Résumé de votre commande: </h2>
                            <div className='text-center'>
                                <p>Version: {currentCar.version.name}, {currentCar.version.price} €</p>
                                <p>Couleur: {currentCar.color.name}, {currentCar.color.price} €</p>
                                <p>Jantes: {currentCar.rims.name}, {currentCar.color.price} €</p>
                                <p>Sellerie: {currentCar.saddlery.name}, {currentCar.color.price} €</p>
                                <p>
                                    Équipement:
                                </p>
                                    <ul className='text-start '>
                                        { currentCar.equipment.map((item) => 
                                            <li key={item.name} >{item.name} ({item.price} €), </li>
                                        )}
                                    </ul>
                                
                                <p>
                                    Accessoires:
                                </p>
                                    <ul className='text-start'>
                                        { currentCar.accessory.map((item) => 
                                            <li key={item.name} >{item.name} ({item.price} €), </li>
                                        )}
                                    </ul>
                                
                                <p>
                                    Prix total: {currentCar.totalPrice}
                                </p>
                            </div>
                        </div>
                        <div className="modal-footer bg-black">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Fermer</button>
                            <button type="button" className="btn btn-primary">Confirmer commande</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
    )
}

export default Summary;