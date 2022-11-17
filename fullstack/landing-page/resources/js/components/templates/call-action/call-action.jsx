import React from "react";
import ReactDOM from "react-dom";
import * as S from "./call-action-styled";
import ContactDiv from "../../popup/contact-popup";

export default function CallAction(){
    return (
        <S.CallActionContainer>
            <S.CallActionTitle>Call to Action</S.CallActionTitle>
            <S.CallActionText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quam orci, imperdiet vel imperdiet eu, pulvinar eget magna. Integer ullamcorper pretium tempor. </S.CallActionText>
            <ContactDiv textContent={"SEND MESSAGE"}/>
        </S.CallActionContainer>
    );
}

if(document.getElementById('call-action')){
    ReactDOM.render(<CallAction />, document.getElementById('call-action'));
}
