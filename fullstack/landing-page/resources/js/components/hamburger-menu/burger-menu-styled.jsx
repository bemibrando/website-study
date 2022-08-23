import styled from "styled-components";

export const HamburgerButton = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 2.5rem;
    height: 2.5rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: var(--z-menu-button);


    &:focus {
        outline: none;
    }

    @media screen and (min-width: 768px) {
        display: none;
    }
`;

export const HamburgerLine = styled.span`
    display: block;
    width: 2.5rem;
    height: .25rem;
    background-color: var(--purple-color);
    margin-block: .22rem;
    border-radius: .25rem;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
        transform: ${ props  => props.open == "true" ? "rotate(45deg)" : "rotate(0)"};
    }
    &:nth-child(2) {
        opacity: ${ props  => props.open == "true" ? "0" : "1"};
    }
    &:nth-child(3) {
        transform: ${ props  => props.open == "true" ? "rotate(-45deg)" : "rotate(0)"};
    }
`;
