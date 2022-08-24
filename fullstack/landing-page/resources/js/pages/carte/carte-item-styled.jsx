import styled from "styled-components";

export const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    max-width: 15rem;
`;

export const ItemTitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`;

export const ItemTitle = styled.h3`
    font-size: var(--font-size-h4);
`;

export const ItemText = styled.p`
`;

export const ItemPrice = styled.p`
    font-size: var(--font-size-h3);
`;

export const ItemFigure = styled.figure`
    width: 90%;
`;

export const ItemImage = styled.img`
    width: 100%;
`;