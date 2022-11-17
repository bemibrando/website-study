import React from "react";
import ReactDOM from "react-dom";
import * as S from "./quote-styled"

export default function Quotes(){
    return (
      <S.QuotesContainer>
          <S.QuoteTitle>Quote</S.QuoteTitle>
            <S.QuoteText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum convallis sed turpis sed luctus. Nulla mattis urna mattis tortor finibus, et vehicula magna tincidunt.</S.QuoteText>
        </S.QuotesContainer>
    );
}

if(document.getElementById('quotes')){
    ReactDOM.render(<Quotes />, document.getElementById('quotes'));
}
