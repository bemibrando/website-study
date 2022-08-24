import React from "react";
import ReactDOM from "react-dom";
import * as S from "../carte-item-styled";

export default function CocaCola(){
    return (
        <S.ItemContainer>
            <S.ItemFigure>
                <S.ItemImage src="https://www.coca-cola.com/content/dam/journey/us/en/images/cc-logo.png" alt="Coca-Cola" />
            </S.ItemFigure>
            <S.ItemTitleContainer>
                <S.ItemTitle>Coca-Cola</S.ItemTitle>
                <S.ItemPrice>$1.00</S.ItemPrice>
            </S.ItemTitleContainer>
            <S.ItemText>
                <p>Coca-Cola is a carbonated soft drink manufactured by The Coca-Cola Company.</p>
            </S.ItemText>
        </S.ItemContainer>
    );
}

if(document.getElementById('what-we-believe')){
    ReactDOM.render(<CocaCola />, document.getElementById('soft-drinks'));
}
