import React from "react";
import * as S from "../carte-item-styled";
import test from "../../../../_imgs/test.jpg";

export default function CocaCola7(){
    return (
        <S.ItemContainer>
            <S.ItemFigure>
                <S.ItemImage src={test} alt="Coca-Cola" />
            </S.ItemFigure>
            <S.ItemTitleContainer>
                <S.ItemTitle>Coca-Cola</S.ItemTitle>
                <S.ItemPrice>$8.00</S.ItemPrice>
            </S.ItemTitleContainer>
            <S.ItemText>
                <p>Coca-Cola is a carbonated soft drink manufactured by The Coca-Cola Company.</p>
            </S.ItemText>
        </S.ItemContainer>
    );
}