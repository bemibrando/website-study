import styled from 'styled-components';

export const HeaderContainer = styled.div`
    max-width: var(--section-width);
    height: 100%;
    display: flex;
    align-items: center;
    margin: 0 auto;
    z-index: var(--z-index-header);

    @media screen and (max-width: 767px) {
        flex-wrap: wrap;
        justify-content: space-between;
    }
`;

export const HeaderLogo = styled.figure`
    display: flex;
    align-items: center;
    width: auto;
    padding: 0 1rem;

    &:hover {
        cursor: pointer;
    }
`;

export const HeaderLogoImage = styled.img`
    height: var(--header-height);
`;

export const HeaderLogoText = styled.figcaption`
    font: var(--font-logo);
    font-size: var(--font-size-logo);
`;

export const ContactDiv = styled.div`
    @media screen and (max-width: 767px) {
        display: none;
    }
`;
