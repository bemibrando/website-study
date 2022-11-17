import styled from "styled-components";

export const ContactForm = styled.form`
    height: auto;
    position: relative;
    padding: 2rem;
    background-color: var(--light-purple-color);
    width: 45%;
    margin: 0;
    text-align: center;
`;

export const InputDiv = styled.div`
    margin: 1rem;
`;

export const Input = styled.input`
    &:invalid{
        border: ${props => props.focused == "true" ? "1px solid red" : "1px solid var(--purple-color)"};
    }
    &:invalid ~ span{
        display: ${props => props.focused == "true" ? "block" : "none"};
    }

    padding: .5rem 1rem;
    border: 1px solid var(--purple-color);
    border-radius: var(--border-radius);
    width: 100%;
    box-sizing: border-box;
    color: var(--black-color);
    font-size: var(--font-size-p);

    &[type="file"]{
        display: none;
        visibility: hidden;
        height: fit-content;
    }
`;

export const FileButton = styled.label`
    color: var(--dark-purple-color);
    font-size: var(--font-size-p);

    border-radius: var(--border-radius);
    border: 1px solid var(--purple-color);
    padding: .5rem 1rem;
    margin: 1rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    height: fit-content;
    width: -webkit-fill-available;

    div{
        display: none;
        visibility: hidden;
    }

    &:hover{
        border: 1px solid var(--dark-purple-color);
        background-color: var(--light-purple-color);
        color: var(--purple-color);
    }
`;

export const FileSVG = styled.img`
    width: var(--font-size-p);
    filter: var(--SVG-dark-purple-color);
    margin-right: .5rem;

    ${FileButton}:hover &{
        filter: var(--SVG-purple-color);
    }
`;

export const MessageInput = styled.textarea`
    margin: 1rem;
    padding: .5rem 1rem;
    border: 1px solid var(--purple-color);
    border-radius: var(--border-radius);
    width: -webkit-fill-available;
    box-sizing: border-box;
    color: var(--black-color);
    font-size: var(--font-size-p);
    height: 5rem;
    resize: none;
`;

export const errorMessage = styled.span`
    color: red;
    display: none;
`;

export const ContactSubmit = styled.button`
    width: fit-content;
    height: fit-content;
    font-size: var(--font-size-button);
    border: .15rem solid var(--purple-color);
    color: var(--white-color);
    background-color: var(--purple-color);
    border-radius: var(--border-radius);
    padding: .25rem 1rem;
    margin: 1rem;

    &:hover{
        cursor: pointer;
        background-color: var(--purple-color);
        color: var(--light-purple-color);
    }
`;
