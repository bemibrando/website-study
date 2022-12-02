import React from "react";
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/logo-dio.png"
import { Button } from "../button";

import { 
    Wrapper,
    SearchInputContainer,
    Container,
    Row,
    Input,
    Menu,
    MenuRight,
    UserPicture,
} from "./style";
import { IHeader } from "./types";

const Header = ({user_auth}: IHeader) => {    
    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/login')
    }
    const handleClickHome = () => {
        navigate('/')
    }
    const handleClickFeed = () => {
        navigate('/feed')
    }

    return (
        <Wrapper>
            <Container>
                <Row>
                    {user_auth? (<>
                        <img src={logo} alt="Dio.'s logo" onClick={handleClickFeed}/>
                        <SearchInputContainer>
                            <Input placeholder='Search...' />
                        </SearchInputContainer>
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>
                    </>) 
                    :
                        <img src={logo} alt="Dio.'s logo" onClick={handleClickHome}/>
                    }
                </Row>
                <Row>
                    {user_auth? (<>
                        <UserPicture src="https://avatars.githubusercontent.com/u/102377919?v=4" />
                    </>)
                    : (<>
                        <MenuRight href="#">Home</MenuRight>
                        <Button title='Sign in' onClick={handleClickSignIn}/>
                        <Button title='Register' />
                    </>)
                    }
                </Row>
            </Container>
        </Wrapper>
    )
}

export { Header }