import styled from "styled-components";

export const CarouselContainer = styled.div`
    width: 100wv;
    height: var(--section-height);

    display: flex;
    align-items: center;
`;

export const CarouselContentContainer = styled.div`
    max-width: var(--section-width);
    margin: 0 auto;
`;

export const CarouselTitle = styled.h1`
    width: 60%;
    font-size: var(--font-size-lg);
`;

export const CarouselText = styled.p`
    width: 45%;
    font-size: var(--font-size-p);
    margin: .5rem 0 1rem;
`;
export const CarouselLink = styled.a`
    width: auto;
`;

export const CarouselButton = styled.div`
    width: fit-content;
    font-size: var(--font-size-button);
    border: .15rem solid var(--purple-color);
    color: var(--purple-color);
    border-radius: var(--border-radius);
    padding: .25rem 1rem;

    &:hover{
        cursor: pointer;
        background-color: var(--purple-color);
        color: var(--white-color);
    }
`;
