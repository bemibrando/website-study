import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Title = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 320px;
    margin-bottom: 20px;
    line-height: 44px;

    color: #fff;
`

export const TitleRegister = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 25rem;
    margin-bottom: 20px;
    line-height: 44px;
`

export const SubtitleRegister = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    width: 320px;
    margin-bottom: 35px;
    line-height: 25px;
`

export const AlreadyHaveText = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
`

export const LoginText = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;

    color: #92e307;
`

export const RegisterText = styled.p`
    margin-top: 1.75rem;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 19px;
`

export const Wrapper = styled.div`
    max-width: 20rem;
`

export const Column = styled.div`
    flex: 1;
`

export const Row = styled.div`
    display: flx;
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
    gap: .25rem;
`