import React from "react";
import { FiThumbsUp } from 'react-icons/fi'

import { CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture } from './styles'

const Card = () => {
    return (
        <CardContainer>
            <ImageBackground src="https://media-exp1.licdn.com/dms/image/C4D16AQFwMi5DmiJmFg/profile-displaybackgroundimage-shrink_350_1400/0/1653576961569?e=1674691200&v=beta&t=WJJuK8Eb4fwqHMpG8Ctlqr1kFlScTbJf5kIKpLXvqSo"/>
            <Content>
                <UserInfo>
                    <UserPicture src="https://avatars.githubusercontent.com/u/102377919?v=4"/>
                    <div>
                        <h4>Pablo Henrique</h4>
                        <p>Há 8 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto para curso de HTML e CSS</h4>
                    <p>Projeto feito o curso de html e css no bootcamp dio do Global avanade...<strong>Saiba Mais</strong></p>
                </PostInfo>
                <HasInfo>
                    <h4>#HTML #CSS #Javascript</h4>
                    <p>
                        <FiThumbsUp /> 16
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>
    )
}

export { Card }