import React, {useState} from "react";
import ReactDOM from "react-dom";
import * as S from "../../components/templates/carousel/carousel-styled";
import ContactDiv from "../../components/popup/contact-popup";

export default function Carousel(){

    return (
        <S.CarouselContainer>
            <S.CarouselContentContainer>
                <S.CarouselTitle>Web Development</S.CarouselTitle>
                <S.CarouselText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum convallis sed turpis sed luctus. Nulla mattis urna mattis tortor finibus, et vehicula magna tincidunt.</S.CarouselText>
                <ContactDiv textContent={"Solicitar Proposta"}/>
            </S.CarouselContentContainer>
        </S.CarouselContainer>
    );
}

if(document.getElementById('carousel')){
    ReactDOM.render(<Carousel />, document.getElementById('carousel'));
}
