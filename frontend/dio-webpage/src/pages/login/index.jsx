import { MdEmail, MdLock } from 'react-icons/md'
import { useNavigate } from 'react-router-dom';

import { Button } from '../../components/button';
import { Header } from '../../components/header';
import { Input } from '../../components/input';

import { Container, Title, Column, CreateText, ForgotText, Row, SubtitleLogin, TitleLogin, Wrapper } from './styles'

const Login = () => {
    const navigate = useNavigate();

    const handleClickFeed = () => {
        navigate('/feed')
    }

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominas as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Faça seu cadrastro</TitleLogin>
                    <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                    <form>
                        <Input placeholder="E-mail" type="email" leftIcon={<MdEmail />} />
                        <Input placeholder="Senha" type="password" leftIcon={<MdLock />}/>
                        <Button title="Entrar" variant="secondary" onClick={handleClickFeed}/>
                    </form>
                    <Row>
                        <ForgotText>Esqueci minha senha</ForgotText>
                        <CreateText>Crear Conta</CreateText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}
export { Login }