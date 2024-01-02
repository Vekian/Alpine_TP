import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Breadcrumb (){
    const location = useLocation();

    useEffect(() => {
        let activeLinks = document.querySelectorAll('.headerBreadcrumb ul li.active');
        activeLinks.forEach(function (activeLink) {
            activeLink.classList.remove('active');
        });
        let links = document.querySelectorAll('.headerBreadcrumb ul li');
        let newActiveLink = document.getElementById(location.pathname);
        newActiveLink.classList.add('active');
        
        for (let link of links){
            if (link.classList.contains('active')) {
                break;
            }
            else {
                link.classList.add('active');
            }
        }


    }, [location.pathname])

    function getRouteName(currentRoute, direction){
        let routesNames = ["/", "/color", "/rims", "/saddlery", "/equipment", "/accessory"];
        let indexRoute = routesNames.findIndex( routeName => routeName === currentRoute);
        
        if (direction === "before" && indexRoute > 0) {
            return routesNames[indexRoute - 1];
        }
        else if (direction === "after" && indexRoute < routesNames.length - 1) {
            return routesNames[indexRoute + 1];
        }
    }

    return (
        <div className='d-flex justify-content-between align-items-center vh-15 headerBreadcrumb'>
                <span id="arrowLeft" className='col-xxl-2 col-md-2'><span><Link to={getRouteName(location.pathname, "before")}>&#x25C0;&#x25C0;</Link></span></span>
                <ul className="breadcrumb1 bc3x pt-3 ps-0 col-xxl-8 col-md-8 d-flex flex-wrap justify-content-center">
                    <li id="/"><Link to="/">Version</Link></li>
                    <li id="/color"><Link to="/color">Couleur</Link></li>
                    <li id="/rims"><Link to="/rims">Jantes</Link></li>
                    <li id="/saddlery"><Link to="/saddlery">Sellerie</Link></li>
                    <li id="/equipment"><Link to="/equipment">Equipement</Link></li>
                    <li id="/accessory"><Link to="/accessory">Accessoires</Link></li>
                </ul>
                <span id="arrowRight"  className='col-xxl-2 col-md-2'><span><Link to={getRouteName(location.pathname, "after")}>&#9658;&#9658;</Link></span></span>
        </div>
    )
}

export default Breadcrumb;