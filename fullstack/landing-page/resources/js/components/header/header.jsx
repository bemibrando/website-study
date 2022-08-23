import React, {useRef, useState} from 'react';
import ReactDOM from 'react-dom';
import * as S from './header-styled';
import logo from '../../../_imgs/dice-icon.png';
import ContactDiv from '../popup/contact-popup';
import BurgerMenu from "../hamburger-menu/burger-menu";
import Menu from "../menu/menu";
import {useOnClickOutside} from "../../../hooks/hooks";

export default function PageHeader(){
    const [openMenu, setOpenMenu] = useState(false);
    const node = useRef();
    useOnClickOutside(node, () => setOpenMenu(false));

    return(
            <S.HeaderContainer ref={node}>
                <S.HeaderLogo>
                    <S.HeaderLogoImage src={logo} alt="Dice Icon, a cute 20 sided dice"/>
                    <S.HeaderLogoText>Restaurant Logo</S.HeaderLogoText>
                </S.HeaderLogo>
                <BurgerMenu open={openMenu} setOpen={setOpenMenu}/>
                <Menu  open={openMenu} setOpen={setOpenMenu} />
                <S.ContactDiv>
                    <ContactDiv textContent={"Contato"}/>
                </S.ContactDiv>
            </S.HeaderContainer>
    );
}

if(document.getElementById('page-header')){
    ReactDOM.render(<PageHeader />, document.getElementById('page-header'));
}
