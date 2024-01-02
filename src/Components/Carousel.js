import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { loadImg } from '../features/car/carSlice.js';

function Carousel (){
    const dispatch = useDispatch();
    let currentCar = useSelector(state => state.car.currentCar);
    let currentSection = useSelector(state => state.car.currentSection);
    let imgs = useSelector(state => state.car.currentImg);

    useEffect(() => {
        let newImgs = []
        switch (currentSection) {
            case "/":
                const currentColorId = currentCar.color.id;
                const currentRimId = currentCar.rims.id;
                newImgs = currentCar.version.img[currentColorId][currentRimId];
                dispatch(loadImg(newImgs));
                break;
            case "/color":
                dispatch(loadImg(currentCar.version.img[currentCar.color.id][currentCar.rims.id]));
                break;
            case "/rims":
                newImgs = currentCar.version.img[currentCar.color.id][currentCar.rims.id];
                let imgRims = currentCar.rims.img[currentCar.color.id];
                newImgs = [imgRims, ...newImgs];
                dispatch(loadImg(newImgs));
                break;
            case "/saddlery":
                newImgs = currentCar.saddlery.img.carousel;
                dispatch(loadImg(newImgs));
                break;
            case "/equipment":
                newImgs = [];
                for (let item of currentCar.equipment){
                    newImgs.unshift(item.img);
                }
                dispatch(loadImg(newImgs));
                break;
            case "/accessory":
                newImgs = [];
                if (currentCar.accessory.length > 0) {
                    for (let item of currentCar.accessory){
                        newImgs.unshift(item.img);
                    }
                }
                else {
                    newImgs.unshift("assets/images/configurateur/equipements/selection/design.jpg")
                }
                dispatch(loadImg(newImgs));
                break;
            default:
                break;
        }
    }, [currentCar, currentSection]);


    function displayCarousel(imgs){
        
        let indexIndicator = 0;
        let indexFirst = 0;
        
        return (
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    {imgs.map(function (img) {
                        let index = indexIndicator;
                        indexIndicator++;
                        return (
                            ((currentSection === "/") || (currentSection === "/color") || (currentSection === "/saddlery")) ?
                            <button id={index} key={ index} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index} className={ index === 0 ? "buttonIndicator active" : "buttonIndicator"} aria-current="true" aria-label={"Slide " + indexIndicator}></button>
                            :
                            <button key={ index + currentSection + (Math.floor(Math.random() * 10000))} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index} className={ index === 0 ? "buttonIndicator active" : "buttonIndicator"} aria-current="true" aria-label={"Slide " + indexIndicator}></button>
                        )
                    })}
                </div>
                <div className="carousel-inner">
                    {imgs.map(function (img) {
                        let index = indexFirst;
                        indexFirst++;
                        return(
                            ((currentSection === "/") || (currentSection === "/color") || (currentSection === "/saddlery")) ?
                            <div id={index + "img"} key={ index + "img"} className={"carousel-item" + (index === 0 ? " active" : "")}>
                                <img src={img} className="d-block" alt={currentCar.version.name} />
                            </div>
                            :
                            <div key={ index + currentSection + (Math.floor(Math.random() * 10000) + 1) + "img"} className={"carousel-item" + (index === 0 ? " active" : "")}>
                                <img src={img} className="d-block" alt={currentCar.version.name} />
                            </div>
                        )
                    })}
                </div>
                {imgs.length > 1 ? 
                    (<div><button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button></div>) 
                : 
                    null}
                
            </div>
            
        )
    }


    return (
        <div className='col-xl-9 col-md-8 col-12'>
            {displayCarousel(imgs)}
        </div>
    )
}

export default Carousel;