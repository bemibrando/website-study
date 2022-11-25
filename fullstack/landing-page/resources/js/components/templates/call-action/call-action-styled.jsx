import styled from "styled-components";

export const CallActionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-self: center;
    align-items: center;

    width: 80%;
    text-align: center;
    margin: 2rem 0;
`;

export const CallActionTitle = styled.h2`
`;

export const CallActionText = styled.p`
    padding: .75rem 0;
`;

export const CallActionLink = styled.a`
    padding: .75rem 0;
    width: auto;
`;

export const CallActionButton = styled.div`
    padding: 0.5rem 1rem;
    margin: .5rem 0;
    width: fit-content;
    border: .15rem solid var(--purple-color);
    color: var(--purple-color);
    border-radius: var(--border-radius);

    &:hover{
        cursor: pointer;
        background-color: var(--purple-color);
        color: var(--white-color);
    }
`;
