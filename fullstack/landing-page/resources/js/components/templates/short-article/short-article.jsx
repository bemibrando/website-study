import React from "react";
import ReactDOM from "react-dom";
import * as S from "./short-article-styled";

export default function ShortArticle(){
    return (
        <S.ShortArticleContainer>
            <S.ArticleContainer>
                <S.ArticleFigure>
                    <S.ArticleImg />
                </S.ArticleFigure>
                <S.ArticleContentContainer>
                    <S.ArticleTag>ABOUT</S.ArticleTag>
                    <S.ArticleTitle>Who we are</S.ArticleTitle>
                    <S.ArticleText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non pellentesque turpis. Cras aliquam, metus sed aliquet ullamcorper, odio turpis interdum sem, sit amet dapibus enim nunc nec nunc.</S.ArticleText>
                    <S.ArticleLink>
                        <S.ArticleButton>
                            Learn More
                        </S.ArticleButton>
                    </S.ArticleLink>
                </S.ArticleContentContainer>
            </S.ArticleContainer>
        </S.ShortArticleContainer>
    );
}

if(document.getElementById('short-article')){
    ReactDOM.render(<ShortArticle />, document.getElementById('short-article'));
}
