import React from "react";
import ReactDOM from "react-dom";
import * as S from "../../components/templates/quote/quote-styled";

export default function Quote(){
    return (
        <S.QuoteContainer>
            <S.QuoteTitle>No que acreditamos</S.QuoteTitle>
            <S.QuoteText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum convallis sed turpis sed luctus. Nulla mattis urna mattis tortor finibus, et vehicula magna tincidunt.</S.QuoteText>
        </S.QuoteContainer>
    );
}

if(document.getElementById('what-we-believe')){
    ReactDOM.render(<Quote />, document.getElementById('what-we-believe'));
}
