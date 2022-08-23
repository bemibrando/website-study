import React from "react";
import * as S from "./burger-menu-styled";
import { bool, func } from 'prop-types';

const BurgerMenu = (props) => {
    return(
        <S.HamburgerButton open={props.open} onClick={() => props.setOpen(!props.open)}>
            <S.HamburgerLine open={props.open.toString()} />
            <S.HamburgerLine open={props.open.toString()} />
            <S.HamburgerLine open={props.open.toString()} />
        </S.HamburgerButton>
    )
}

BurgerMenu.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
};

export default BurgerMenu;
