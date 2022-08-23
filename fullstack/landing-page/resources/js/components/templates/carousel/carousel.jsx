import React from "react";
import ReactDOM from "react-dom";
import * as S from "./carousel-styled";
import ContactDiv from "../../popup/contact-popup";

export default function Carousel(){
    return (
        <S.CarouselContainer>
            <S.CarouselImageContainer>
                <S.CarouselTitle>Desenvolvimento Web</S.CarouselTitle>
                <S.CarouselText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum convallis sed turpis sed luctus. Nulla mattis urna mattis tortor finibus, et vehicula magna tincidunt.</S.CarouselText>
                <ContactDiv textContent={"Solicitar Proposta"}/>
            </S.CarouselImageContainer>
        </S.CarouselContainer>
    );
}

if(document.getElementById('carousel')){
    ReactDOM.render(<Carousel />, document.getElementById('carousel'));
}
