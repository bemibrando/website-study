import React from "react";
import ReactDOM from "react-dom";
import * as S from "./carte-styled";
import Tabs from "../../components/tabs/tabs";
/*#region SOFT DRINKS*/
import "./soft-drinks/coca-cola";
/*#endregion*/

export default function Carte(){
    return (
        <S.Carte>
            <S.CarteTitle>Menu</S.CarteTitle>
            <Tabs>
                <div id="pizza" label="Pizza" />
                <div id="soft-drinks" label="Soft Drinks" />
                <div id="salad" label="Salads" />
                <div id="dessert" label="Desserts" />
            </Tabs>
        </S.Carte>
    );
}

if(document.getElementById('carte')){
    ReactDOM.render(<Carte />, document.getElementById('carte'));
}