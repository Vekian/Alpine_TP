import React from 'react';
import { loadEquipment, removeEquipment } from '../features/car/carSlice.js';
import { useDispatch, useSelector } from 'react-redux'

function Equipment (){
    const equipments = useSelector(state => state.car.data.equipment);
    const currentEquipment = useSelector(state => state.car.currentCar.equipment);
    const dispatch = useDispatch();
    let index = 0;

    function handleClick(event, nameItem, nameEquipment){
        event.preventDefault();
        let equipmentSelected = equipments.find(function (equipment) {
            return equipment.name === nameEquipment;
        });
        let itemSelected = equipmentSelected.items.find(function (item) {
            return item.name === nameItem;
        });
        if (itemSelected.category && (!(currentEquipment.find((item) => item.name === itemSelected.name)))){
            let oldItem = currentEquipment.find((item) => item.category === itemSelected.category);
            if (!oldItem) {
                dispatch( loadEquipment(itemSelected) );
            }
            else {
                dispatch( removeEquipment(oldItem) );
                dispatch( loadEquipment(itemSelected) );
            }
        }
        else if (!(currentEquipment.find((item) => item.name === itemSelected.name))) {
            dispatch( loadEquipment(itemSelected) );
        }
        else if (!itemSelected.required) {
            dispatch( removeEquipment(itemSelected) );
        }
    }

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
        <div className="accordion" id="accordionEquipment">
            <h3 className='text-center menuTitle m-0 mb-3'>
                Equipement
            </h3>
            {equipments.map( equipment => {
            let numberofItems = countItemInCategory(equipment, currentEquipment);
            let priceCategory = countPriceItem (equipment, currentEquipment);
            return (
                <div key={equipment.id} className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button bg-gradient text-white ps-4 pe-4" type="button" data-bs-toggle="collapse" data-bs-target={"#" + equipment.id} aria-expanded={equipment.id === "int-perso" ? "true" : "false"} aria-controls={equipment.id}>
                            <span className='col-7  fs-5'>{equipment.name}</span><span className=" col-5 text-warning text-center"> {numberofItems > 0 ? numberofItems + ` équipement${numberofItems > 1 ? "s: " : ": "}` + priceCategory + " €" : null}</span>
                        </button>
                    </h2>
                    <div id={equipment.id} className={`accordion-collapse collapse ${equipment.id === "int-perso" ? "show" : ""}`} aria-labelledby="headingOne">
                        <div className="accordion-body bg-dark text-white p-2">
                            {equipment.items.map( function (item) { 
                                index++;
                                return (
                                <div key={equipment.id + index} className={currentEquipment.find((currentItem) => currentItem.name === item.name) ? "border p-2 mb-2 itemSelect" : "borderPassive p-2 mb-2 itemSelect"} onClick={(event) => handleClick(event, item.name, equipment.name)} >
                                    <h3 className='text-center'>
                                        {item.name}
                                    </h3>
                                    {item.required ? <h6 className='text-success text-center'>Obligatoire</h6> : null}
                                    <div className='d-flex justify-content-around align-items-center'>
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

export default Equipment;