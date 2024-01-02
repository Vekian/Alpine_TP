import React from 'react';
import { loadVersion, loadRims, loadSaddlery } from '../features/car/carSlice.js';
import { useDispatch, useSelector } from 'react-redux'

function Version (){
    const versions = useSelector(state => state.car.data.versions);
    const rims = useSelector(state => state.car.data.rims);
    const saddlery = useSelector(state => state.car.data.saddlery);
    const currentVersion = useSelector(state => state.car.currentCar.version);
    const dispatch = useDispatch();

    function handleClick(event, nameVersion){
        event.preventDefault();
        let versionSelected = versions.find(function (version) {
            return version.name === nameVersion;
        });
        let rimSelected = rims.find(function (rim) {
            return rim.version === nameVersion;
        });
        let saddlerySelected = saddlery.find(function (saddle) {
            return saddle.version === nameVersion;
        });
        dispatch( loadVersion(versionSelected) );
        dispatch( loadRims(rimSelected) );
        dispatch( loadSaddlery(saddlerySelected) );
    }


    return (
        <div className="text-white">
            <h3 className='text-center menuTitle m-0 mb-3'>
                Version
            </h3>
            {versions.map( version => <div key= {version.name} className={version.name === currentVersion.name ? "border p-2 mb-2 itemSelect" : "borderPassive p-2 mb-2 itemSelect"}  onClick={(event) => handleClick(event, version.name)} >
                    <h3 className='text-center'>
                        {version.name}
                    </h3>
                    <div className='d-flex justify-content-around align-items-center'>
                        <img src={ version.img.selection } alt={version.name} width="50%" />
                        <p className='pt-3 text-warning fw-bolder fs-4'>
                        <span className='text-white'>Prix: </span><br />
                            {version.price} €
                        </p>
                    </div>
                </div>
            )}

        </div>
    )
}

export default Version;