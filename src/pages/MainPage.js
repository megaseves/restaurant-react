import React from 'react';
import {Home} from "./Home";
import {Contact} from "./Contact";
import {FoodMenu} from "./FoodMenu";

export function MainPage() {
    return(
        <>
            <Home />
            <FoodMenu />
            <Contact />
        </>
    )
}