import React from "react";
import ReactDOM from "react-dom";
import * as S from "./footer-styled";
import GitHubSVG from "../../../_svg/github.svg";
import {FooterLink} from "./footer-styled";

export default function PageFooter(){
    return(
        <S.FooterContainer>
            <S.FooterAboutContainer>
                <S.FooterAboutTitle>Restaurant</S.FooterAboutTitle>
                <S.FooterAboutText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </S.FooterAboutText>
            </S.FooterAboutContainer>
            <S.FooterContactContainer>
                <S.FooterLinkContainer>
                    <S.FooterLink href="#">maybe@email.com</S.FooterLink>
                </S.FooterLinkContainer>
                <S.FooterSocialMediaContainer>
                    <S.FooterSVGLink href="https://github.com/bemibrando" target="_blank" rel="noopener noreferrer">
                        <S.FooterSVG src={GitHubSVG} alt="GitHub logo"/>
                    </S.FooterSVGLink>
                    <S.FooterSVGLink href="https://github.com/bemibrando" target="_blank" rel="noopener noreferrer">
                        <S.FooterSVG src={GitHubSVG} alt="GitHub logo"/>
                    </S.FooterSVGLink>
                    <S.FooterSVGLink href="https://github.com/bemibrando" target="_blank" rel="noopener noreferrer">
                        <S.FooterSVG src={GitHubSVG} alt="GitHub logo"/>
                    </S.FooterSVGLink>
                </S.FooterSocialMediaContainer>
            </S.FooterContactContainer>
            <S.FooterCopyright>
                <p>This site is made with 💖 by <a href="https://github.com/bemibrando" target="_blank" rel="noopener noreferrer">Bianca Emi</a>.</p>
            </S.FooterCopyright>
        </S.FooterContainer>
    );
}

if(document.getElementById('page-footer')){
    ReactDOM.render(<PageFooter />, document.getElementById('page-footer'));
}
