import React from "react";
import ReactDOM from "react-dom";
import * as S from "../../components/templates/short-article/short-article-styled";
import test from "../../../_imgs/test.jpg";

export default function ShortArticle(){
    return (
        <S.ShortArticleContainer>
            <S.ArticleContainer>
                <S.ArticleFigure>
                    <S.ArticleImg  src={test}/>
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
            <S.ArticleContainerInverse>
                <S.ArticleFigure>
                    <S.ArticleImg  src={test}/>
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
            </S.ArticleContainerInverse>
        </S.ShortArticleContainer>
    );
}

if(document.getElementById('short-article')){
    ReactDOM.render(<ShortArticle />, document.getElementById('short-article'));
}
