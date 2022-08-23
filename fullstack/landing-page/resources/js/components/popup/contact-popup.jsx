import React, { useState, useRef} from 'react';
import { useOnClickOutside } from "../../../hooks/hooks";
import * as S from './contact-popup-styled';
import ContactForm from "../contact-form/contact-form";
import testImage from "../../../_imgs/test.jpg";

export function ContactPopup(props){
    return (props.trigger) ? (
        <>
            <S.ContactContainer>
            <S.ContactExit onClick={() => props.setTrigger(false)}>X</S.ContactExit>
            <S.FormTitle>Entre em contato conosco</S.FormTitle>
            <ContactForm onClick={() => props.setTrigger(true)}/>
            <S.ContactFigure>
                <S.ContactImg src={testImage} alt=""/>
            </S.ContactFigure>
            </S.ContactContainer>
            <S.ContactBG onClick={() => props.setTrigger(false)}/>
        </>
    ) : "";
}

export function ContactButton(props){
    return (
        <S.ContactButtonDiv>
            <S.ContactButton onClick={() => props.setButtonPopup(true)}>{props.textContent}</S.ContactButton>
        </S.ContactButtonDiv>
    )
}

export default function ContactDiv(props){
    const [buttonPopup, setButtonPopup] = useState(true);
    const node = useRef();

    useOnClickOutside(node, () => setButtonPopup(false));

    return (
            <S.ContactDiv ref={node}>
                <ContactButton setButtonPopup={setButtonPopup} textContent={props.textContent}/>
                <ContactPopup trigger={buttonPopup} setTrigger={setButtonPopup}/>
            </S.ContactDiv>
    )
}
