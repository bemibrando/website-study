import styled from "styled-components";

export const CarouselContainer = styled.div`
    height: var(--section-height);
    width: var(--section-width);

    display: flex;
    align-items: center;/*
    cursor: grab;*/
    
    -webkit-user-select: none; /* Safari */  
    -ms-user-select: none; /* IE 10 and IE 11 */  
    user-select: none; 
    
    &:active{/*
        cursor: grabbing;
        cursor: -webkit-grabbing;*/
    }
`;

export const CarouselInner = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    
    width: 100%;
    height: 100%;
    
    transition: ${props => !props.transitionEnabled ? "none" : undefined};
`;

export const CarouselLeft = styled.div`
    position: absolute;
    z-index: 1;
    left: 0;
    top: 0;
    height: var(--section-height);
    width: 15vw;
    background-color: transparent;
`;

export const CarouselRight = styled.div`
    position: absolute;
    z-index: 1;
    right: 0;
    top: 0;
    height: var(--section-height);
    width: 15vw;
    background-color: transparent;
`;

export const CarouselInnerImage = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
`;

export const CarouselImage = styled.img`
    width: 100%;
    background-image: url(${props => props.src});
    background-position: right;
    background-repeat: no-repeat;
    pointer-events: none;
    
    transform: translateX(${props => props.currIndex*-100}vw);
`;

export const CarouselContentContainer = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const CarouselTitle = styled.h1`
    width: 60%;
    font-size: var(--font-size-lg);

    @media screen and (min-width: 1240px) {
        width: 100%;
    }
`;

export const CarouselText = styled.p`
    width: 45%;
    font-size: var(--font-size-p);
    margin: .5rem 0 1rem;

    
    @media screen and (min-width: 1240px) {
        width: 60%;
    }
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
