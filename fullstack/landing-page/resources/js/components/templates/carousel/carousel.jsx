import React, {useState} from "react";
import ReactDOM from "react-dom";
import * as S from "./carousel-styled";

export default function Carousel(props){
    const { children, show, infiniteLoop } = props;

    const [currImg, setCurrImg] = useState(0);
    const [length, setLength] = useState(children.length);

    const [isRepeating, setIsRepeating] = useState(true);
    const [transitionEnabled, setTransitionEnabled] = useState(true);

    const [touchPosition, setTouchPosition] = useState(null);

//#region --- functions to control buttons click
    const next = () => {
        if(currImg < length - 1){
            setCurrImg(prevImg => prevImg + 1);
        }else if(currImg === length - 1){
            setCurrImg(0);
        }
    }
    const prev = () => {
        if(currImg > 0){
            setCurrImg(prevImg => prevImg - 1);
        }else if(currImg === 0){
            setCurrImg(length - 1);
        }
    }
//#endregion

//#region --- functions to control mouse swipe
    const onMouseDown = (e) => {
        setTouchPosition(e.clientX);
    };

    const onMouseUp = (e) => {
        const currentPosition = e.clientX;

        if (touchPosition === null) {
            return;
        }

        const diff = touchPosition - currentPosition;

        console.log(diff);

        if (diff > 5) {
            next();
        }
        if(diff < -5){
            prev();
        }

        setTouchPosition(null);
    };

//#region --- functions to control touch swipe
    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX;
        setTouchPosition(touchDown);
    };

    const handleTouchMove = (e) => {
        const touchDown = touchPosition;

        if(touchDown === null){
            return;
        }

        const currentTouch = e.touches[0].clientX;
        const diff = touchDown - currentTouch;

        if(diff > 5){
            next();
        }

        if(diff < -5){
            prev();
        }
        
        setTouchPosition(null);
    };

    const handleTransitionEnd = () => {
        if(isRepeating){
            if(currImg === 0){
                setTransitionEnabled(false);
                setCurrImg(length-1);
            }else if(currImg === length-1){
                setTransitionEnabled(false);
                setCurrImg(0);
            }
        }
    }
//#endregion
    return (
        <S.CarouselContainer onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onMouseDown={onMouseDown} onMouseUp={onMouseUp}>
            <S.CarouselLeft onClick={prev}></S.CarouselLeft>
            <S.CarouselInner transitionEnabled={transitionEnabled} onTransitionEnd={() => handleTransitionEnd()}>
                <S.CarouselInnerImage currIndex={currImg}>
                    <S.CarouselImage src={banners[currImg].img} alt={banners[currImg].alt} />
                </S.CarouselInnerImage>
            </S.CarouselInner>
            <S.CarouselRight onClick={next}></S.CarouselRight>
        </S.CarouselContainer>
    );
}

if(document.getElementById('carousel')){
    ReactDOM.render(<Carousel />, document.getElementById('carousel'));
}
