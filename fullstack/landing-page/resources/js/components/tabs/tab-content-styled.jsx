import styled from "styled-components";

export const TabContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const TabContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 20px;
    justify-content: center;
    align-items: center;
    justify-items: center;
    padding: 20px;

    transition: none;

    @media(min-width: 1280px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    @media(max-width: 767px) {
        grid-template-columns: 1fr 1fr;
    }
`;

export const ContentLeft = styled.div`
    position: absolute;
    z-index: 1;
    left: 0;
    height: var(--section-height);
    width: 15vw;
    background-color: transparent;
`;

export const ContentRight = styled.div`
    position: absolute;
    z-index: 1;
    right: 0;
    height: var(--section-height);
    width: 15vw;
    background-color: transparent;
`;