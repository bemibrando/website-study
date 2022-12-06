import React from "react";
import { useForm } from "react-hook-form";
import { MdEmail, MdLock, MdPerson } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button";
import { Header } from "../../components/header";
import { Input } from "../../components/input";
import { api } from "../../services/api";
import { IUser } from "../../types";
import { Container, Title, Column, Wrapper, TitleRegister, SubtitleRegister, Row, AlreadyHaveText, LoginText, RegisterText } from "./styles";
import { IFormData } from "./types";

const Register = () => {
    const navigate = useNavigate();
    
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormData>({
        reValidateMode: "onChange",
        mode: "onChange",
    });

    const onSubmit = async (formData: IFormData) => {
        try {
            const { data } = await api.get<IUser[]>(
                `/users?email=${formData.email}&senha=${formData.senha}`
            );

            if(!data.length && !data[0].id){
                navigate("/feed");
                return;
            }

            alert("Usuário já existe");
        } catch (e){
            //TODO: HOUVE UM ERRO
        }
    }

    return (
        <>
        <Header />
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleRegister>
                        Comece agora grátis
                    </TitleRegister>
                    <SubtitleRegister>
                        Crie sua conta e make the change._
                    </SubtitleRegister>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input
                            placeholder="Nome completo"
                            leftIcon={<MdPerson />}
                            name="nome"
                            control={control}
                        />
                        {errors.name && <span>Nome é obrigatório</span>}
                        <Input
                            placeholder="E-mail"
                            leftIcon={<MdEmail />}
                            name="email"
                            control={control}
                        />
                        {errors.email && <span>E-mail é obrigatório</span>}
                        <Input
                            type="password"
                            placeholder="Senha"
                            leftIcon={<MdLock />}
                            name="senha"
                            control={control}
                        />
                        {errors.senha && <span>Senha é obrigatório</span>}
                        <Button title="Criar minha conta" variant="secondary" type="submit" />
                    </form>
                    <RegisterText>
                        Ao clicar em "criar minha conta grátis",
                        declaro que aceito as Políticas de
                        Privacidade e os Termos de Uso da DIO.
                    </RegisterText>
                    <Row>
                        <AlreadyHaveText>
                            Já tenho conta.
                        </AlreadyHaveText>
                        <LoginText>
                            Fazer login
                        </LoginText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
        </>
    );
};

export { Register };