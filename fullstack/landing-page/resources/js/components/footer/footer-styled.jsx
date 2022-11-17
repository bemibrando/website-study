import styled from 'styled-components';

export const FooterContainer = styled.div`
    align-items: center;
    width: var(--section-width);
    height: 100%;
    color: var(--dark-blue-color);

    padding: 0rem 1rem;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
        'about contact'
        'copyright copyright';
    grid-gap: .25rem;

    @media (max-width: 768px) {
        grid-template-areas:
            "about about"
            "contact contact"
            "copyright copyright";
    }
`;

/*#region DREAMSLAB_ABOUT*/
export const FooterAboutContainer = styled.div`
    grid-area: about;
    width: 100%;
    height: 100%;
    z-index: var(--z-footer);
`;

export const FooterAboutTitle = styled.h1`
`;

export const FooterAboutText = styled.p`
`;
/*#endregion*/

/*#region DREAMSLAB_CONTACT*/
export const FooterContactContainer = styled.div`
    grid-area: contact;
    height: 100%;
    width: 100%;
    text-align: right;
    align-items: end;
    justify-content: end;

    grid-template-area:
        "link link"
        "social social";

    @media (max-width: 768px) {
        grid-template-area:
            "link social"
            "link social";
        text-align: center;
        align-items: center;
        justify-content: center;
    }
`;

export const FooterLinkContainer = styled.div`
    grid-area: link;
    margin 1rem 0;
    width: 100%;

    display: flex;
    justify-content: flex-end;

    @media screen and (max-width: 768px) {
        justify-content: center;
    }

`;

export const FooterLink = styled.a`
    width: fit-content;
    color: var(--dark-blue-color);

    line-height: 1.3rem;
    overflow: hidden;
    transition: all .2s ease-in-out;

    &::after{
        content: "";
        display: block;
        width: 0;
        left: 0;
        top: 2px;
        height: 1px;
        margin: auto;
        background-color: var(--dark-purple-color);
        transition: width .2s ease;
    }
    &:hover{
        color: var(--dark-purple-color);
        &::after{
            width: 100%;
        }
    }
`;

export const FooterSocialMediaContainer = styled.div`
    grid-area: social;
    height: 100%;
    width: 100%;
    display: inherit;
    grid-template-columns: repeat(3, 1fr);
`;

export const FooterSVGLink = styled.a`
    width: 100%;
    height: 100%;
`;

export const FooterSVG = styled.img`
    width: 2.5rem;
    height: 2.5rem;
    filter: var(--SVG-dark-blue-color);

    &:hover{
        filter: var(--SVG-purple-color);
    }
`;
/*#endregion*/

export const FooterCopyright = styled.div`
    grid-area: copyright;
    width: 100%;
    text-align: center;
`;
