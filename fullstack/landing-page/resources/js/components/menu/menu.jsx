import React from "react";
import {bool, func} from 'prop-types';
import * as S from './menu-styled';
import ContactDiv from '../popup/contact-popup';

const Menu = (props) => {
    return(
        <S.MenuNav>
            <S.MenuList open={props.open.toString()}>
                <S.MenuListItem><S.MenuListItemLink href="#">Sobre</S.MenuListItemLink></S.MenuListItem>
                <S.MenuListItem><S.MenuListItemLink href="#">Serviços</S.MenuListItemLink></S.MenuListItem>
                <S.MenuListItem>
                    <S.ContactDivSmall>
                        <ContactDiv textContent={"Contato"}/>
                    </S.ContactDivSmall>
                </S.MenuListItem>
            </S.MenuList>
        </S.MenuNav>
    );
}

Menu.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
};

export default Menu;
