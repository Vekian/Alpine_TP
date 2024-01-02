import React from 'react';
import { loadAccessory, removeAccessory } from '../features/car/carSlice.js';
import { useDispatch, useSelector } from 'react-redux'

function Accessory (){
    const accessorys = useSelector(state => state.car.data.accessory);
    const currentAccessory = useSelector(state => state.car.currentCar.accessory);
    const dispatch = useDispatch();
    let index = 0;

    function handleClick(event, nameItem, nameAccessory){
        event.preventDefault();
        let accessorySelected = accessorys.find(function (accessory) {
            return accessory.name === nameAccessory;
        });
        let itemSelected = accessorySelected.items.find(function (item) {
            return item.name === nameItem;
        });
        if (!(currentAccessory.find((item) => item.name === itemSelected.name))) {
            dispatch( loadAccessory(itemSelected) );
        }
        else {
            dispatch( removeAccessory(itemSelected) );
        }}
        function countItemInCategory(category, currentEquipment){
            let count = 0;
            for (let item of category.items){
                if (currentEquipment.find((currentItem) => currentItem.name === item.name)){
                    count++;
                }
            }
            return count;
        }
    
        function countPriceItem (category, currentEquipment){
            let price = 0;
            for (let item of category.items){
                if (currentEquipment.find((currentItem) => currentItem.name === item.name)){
                    price += item.price;
                }
            }
            return price;
        }

    return (
        <div className="accordion" id="accordionAccessory">
            <h3 className='text-center menuTitle m-0  mb-3'>
                Accessoires
            </h3>
            {accessorys.map( accessory => {
                let numberofItems = countItemInCategory(accessory, currentAccessory);
                let priceCategory = countPriceItem (accessory, currentAccessory);
                return (
                <div key={accessory.id} className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button bg-gradient text-white ps-4 pe-4" type="button" data-bs-toggle="collapse" data-bs-target={"#" + accessory.id} aria-expanded={accessory.id === "int-perso" ? "true" : "false"} aria-controls={accessory.id}>
                            <span className='col-7 fs-5'>{accessory.name}</span><span className='col-5 text-warning text-center'>{numberofItems > 0 ? numberofItems + ` accessoire${numberofItems > 1 ? "s: " : ": "}` + priceCategory + " €" : null}</span>
                        </button>
                    </h2>
                    <div id={accessory.id} className={`accordion-collapse collapse ${accessory.id === "transport" ? "show" : ""}`} aria-labelledby="headingOne">
                        <div className="accordion-body bg-dark text-white p-2">
                            {accessory.items.map( function (item) { 
                                index++;
                                return (
                                <div key={accessory.id + index} className={currentAccessory.find((currentItem) => currentItem.name === item.name) ? "border p-2 mb-2 itemSelect" : "borderPassive p-2 mb-2 itemSelect"} onClick={(event) => handleClick(event, item.name, accessory.name)} >
                                    <h3 className='text-center  pt-2'>
                                        {item.name}
                                    </h3>
                                    <div className='d-flex justify-content-around align-items-center pb-3'>
                                        <img src={ item.img } alt={item.name} width="50%"/>
                                        <p className='pt-3 text-warning fw-bolder fs-4'>
                                        <span className='text-white'>Prix: </span><br />
                                            {item.price} €
                                        </p>
                                    </div>
                                </div>
                                )
                            })
                            }
                        </div>
                    </div>
                </div>
            )}
            )}
            
        </div>
    )
}

export default Accessory;