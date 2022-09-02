import React from "react";
import ReactDOM from "react-dom";
import * as S from "./carte-styled";
import Tabs from "../../components/tabs/tabs";
import SoftDrink from "./carte-category/soft-drink";
import {Pizza} from "./carte-category/pizza";

export default function Carte(){

    return (
        <S.Carte>
            <S.CarteTitle>Carte</S.CarteTitle>
            <Tabs>
                <div id="pizza" label="Pizza"> 
                    {Pizza}
                </div>
                <div id="soft-drinks" label="Soft Drinks">
                    {Pizza}
                </div>
                <div id="salad" label="Salads" >
                    {Pizza}
                </div>
                <div id="dessert" label="Desserts">
                    {Pizza}
                </div>
            </Tabs>
        </S.Carte>
    );
}

if(document.getElementById('carte')){
    ReactDOM.render(<Carte />, document.getElementById('carte'));
}