import React from 'react';
import {Home} from "./Home";
import {Contact} from "./Contact";
import {FoodMenu} from "./FoodMenu";
import {AboutUs} from "./AboutUs";

export function MainPage() {
    return(
        <>
            <Home />
            <FoodMenu />
            <AboutUs />
            <Contact />
        </>
    )
}