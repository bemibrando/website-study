import React, {useState} from "react";
import ReactDOM from "react-dom";
import * as S from "../../components/templates/call-action/call-action-styled";
import ContactDiv from "../../components/popup/contact-popup";

export default function CallAction(){
    return (
        <S.CallActionContainer>
            <S.CallActionTitle>Grow your business!</S.CallActionTitle>
            <S.CallActionText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quam orci, imperdiet vel imperdiet eu, pulvinar eget magna. Integer ullamcorper pretium tempor. </S.CallActionText>
            <ContactDiv textContent={"COMECE AGORA"}/>
        </S.CallActionContainer>
    );
}

if(document.getElementById('grow-your-business')){
    ReactDOM.render(<CallAction />, document.getElementById('grow-your-business'));
}
