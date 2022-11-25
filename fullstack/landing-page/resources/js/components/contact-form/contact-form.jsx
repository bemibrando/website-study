import React, { useState } from "react";
import * as S from "./contact-form-styled";
import PlusSVG from "../../../_svg/plus.svg";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import flags from 'react-phone-number-input/flags'

const FormInput = (props) => {
    const [focused, setFocused] = useState(false);
    const {label, onChange, errorMessage, id, ...inputProps } = props;

    const handleFocus = (e) => {
        setFocused(true);
        console.log(focused.toString());
    };

    return (
        <S.InputDiv>
            <S.Input
                {...inputProps}
                onChange={onChange}
                onBlur={(e) => handleFocus(e)}
                focused={focused.toString()}
            />
            <S.errorMessage>{errorMessage}</S.errorMessage>
        </S.InputDiv>
    );
}

export default function ContactForm(){
    const [values, setValues] = React.useState({
        name: "",
        phone: "",
        email: "",
        file: "",
        message: "",
    });

    const inputs = [
        {
            id: "input-name",
            name: "name",
            type: "text",
            placeholder: "Nome Completo",
            errorMessage: "Por favor, preencha o seu Nome Completo",
            label: "Nome",
            pattern: "john",
            required: true,
            autoFocus: true,
        },
        {
            id: "input-phone",
            name: "phone",
            type: "text",
            errorMessage: "Por favor, preencha o seu testes",
            pattern: "^[0-9]{2} [0-9]{4}-[0-9]{4}$",
            label: "Celular",
        },
        {
            id: "input-email",
            name: "email",
            type: "text",
            placeholder: "Seu melhor e-mail",
            errorMessage: "Por favor, preencha o seu Nsdfadfsdo",
            pattern: "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$",
            label: "Email",
        },
        {
            id: "input-file",
            name: "file",
            type: "file",
            placeholder: "Selecione um arquivo",
            errorMessage: "Por favor, preencha o sfasfdasfsdf",
            label: "Arquivo",
        },
        {
            id: "input-message",
            name: "message",
            type: "text",
            placeholder: "Digite sua mensagem aqui...",
            errorMessage: "Por favor, preencha",
            pattern: "^[A-Za-z0-9]{3,16}$",
            label: "Assunto",
            required: true,
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
        console.log(values);
    };

    const onPhoneChange = (phoneNumber) => {
        setValues({ ...values, phone: phoneNumber });
        console.log(values);
    };

    return (
        <S.ContactForm onSubmit={handleSubmit}>
            {inputs.map((item) => {
                switch (item.id) {
                    case "input-phone":
                        return (
                            <PhoneInput
                                key={item.id}
                                {...item}
                                international
                                withCountryCallingCode
                                countryCallingCodeEditable={false}
                                error={true}
                                defaultCountry="BR"
                                flags={flags}
                                flagUrl="https://flag.pk/flags/4x3/{xx}.svg"

                                value={values[item.name]}
                                onChange={onPhoneChange}
                            />
                        );
                    case "input-file":
                        return(
                            <S.FileButton>
                                <FormInput
                                    key={item.id}
                                    {...item}
                                    value={values[item.name]}
                                    onChange={onChange}
                                />
                                <S.FileSVG src={PlusSVG} />
                                Adicionar Arquivo
                            </S.FileButton>
                        );
                    case "input-message":
                        return(
                            <S.MessageInput
                                key={item.id}
                                {...item}
                                value={values[item.name]}
                                onChange={onChange}
                            />
                        );
                    default:
                        return (
                            <FormInput
                                key={item.id}
                                {...item}
                                value={values[item.name]}
                                onChange={onChange}
                            />
                        );
                }
            })}
            <S.ContactSubmit type="submit" value="submit">Enviar</S.ContactSubmit>
        </S.ContactForm>
    );
}
