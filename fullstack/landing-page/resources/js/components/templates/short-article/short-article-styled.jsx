import styled from "styled-components";

export const ShortArticleContainer = styled.div`
    margin: 1rem 0;
    padding: 1rem 0;
`;

export const ArticleContainer = styled.div`
    display: grid;
    grid-template-areas:
        "figure figure text";

    @media (max-width: 768px) {
        grid-template-areas:
            "figure"
            "text";
    }
`;

export const ArticleContainerInverse = styled.div`
    display: grid;
    grid-template-areas:
        "text figure figure";

    @media (max-width: 768px) {
        grid-template-areas:
            "figure"
            "text";

    }
`;

export const ArticleFigure = styled.figure`
    grid-area: figure;
    width: 100%;
`;

export const ArticleImg = styled.img`
    width: 100%;
`;

export const ArticleContentContainer = styled.div`
    grid-area: text;
    margin: 1rem .5rem;
    width: 100%;
`;

export const ArticleTag = styled.h6`
    color: var(--gray-color);
`;

export const ArticleTitle = styled.h3`
    margin: .5rem 0;
    font-size: var(--font-size-h1);
`;

export const ArticleText = styled.p`
    color: var(--purple-color);
`;

export const ArticleLink = styled.a`
`;

export const ArticleButton = styled.div`
    margin: .5rem 0;
    padding: .25rem 1rem;
    width: fit-content;
    border-radius: var(--border-radius);

    background-color: var(--purple-color);
    color: var(--white-color);

    &:hover{
        cursor: pointer;
        background-color: var(--dark-purple-color);
        color: var(--purple-color);
    }
`;
