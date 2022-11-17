import styled from "styled-components";

export const MenuNav = styled.nav`
    margin: 0 1rem;
    width: 100%;
    display: flex;
    justify-content: center;
    z-index: var(--z-menu);
`;

export const MenuList = styled.ul`
    width: 50%;
    display: flex;
    align-items: center;
    padding: .25rem;

    @media screen and (max-width: 767px) {
        display: grid;
        justify-content: center;
        background-color: var(--white-color);
        width: 100%;
        position: fixed;
        left: 0;
        top: 0;
        padding: 3rem 1.5rem;
        box-shadow: rgba(0, 0, 0, 0.15) 0 3rem 6.25rem 0;
        border-radius: 0 0 1.5rem 1.5rem;
        transition: .3s;

        transform: ${ props  => props.open == "true" ? "translateY(0)" : "translateY(-100%)"};
    }
`;

export const MenuListItem = styled.li`
    width: inherit;
    display: flex;
    align-items: center;

    @media screen and (max-width: 767px) {
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
    }
`;

export const MenuListItemLink = styled.a`
    width: 100%;
    padding: .5rem 1rem;
    color: var(--purple-color);
    border-radius: var(--border-radius);

    &:hover{
        cursor: pointer;
        background-color: var(--purple-color);
        color: var(--white-color);
    }
`;

export const ContactDivSmall = styled.div`
    margin: 1rem 0;
    @media screen and (min-width: 768px) {
        display: none;
    }
`;
