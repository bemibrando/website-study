import styled from 'styled-components';

export const ContactBG = styled.div`
    position: fixed;
    margin: 0;
    top: 0;
    left: 0;
    background-color: var(--purple-color);
    opacity: 0.35;
    width: 100vw;
    height: 100vh;
    z-index: var(--z-popup-bg);
`;

export const ContactDiv = styled.div`
    margin: 0;
    padding: 0;
    z-index: var(--z-popup);

`;

export const ContactContainer = styled.div`
    z-index: var(--z-popup);
    position: fixed;
    top: var(--popup-top);
    left: var(--popup-left);
    min-height: var(--popup-height);
    max-width: var(--popup-width);
    margin: auto;
    background-color: var(--light-purple-color);
    border-radius: var(--border-radius-large);
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 2rem;
`;

export const ContactExit = styled.div`
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: fit-content;
    height: fit-content;

    &:hover{
        cursor: pointer;
    }
`;

export const FormTitle = styled.h1`
    width: 100%;
`;

export const ContactFigure = styled.figure`
    width: 45%;
    margin: 0;
    padding: 1rem;
`;

export const ContactImg = styled.img`
    width: 100%;
`;

export const ContactButtonDiv = styled.div`
`;

export const ContactButton = styled.div`
    width: fit-content;
    height: fit-content;
    align-self: center;
    font-size: var(--font-size-button);
    border: .15rem solid var(--purple-color);
    color: var(--purple-color);
    border-radius: var(--border-radius);
    padding: .25rem 1rem;
    z-index: inherit;
    &:hover{
        cursor: pointer;
        background-color: var(--purple-color);
        color: var(--white-color);
    }
`;
