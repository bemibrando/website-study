import { Header } from '../../components/header';
import { Card } from '../../components/card';
import { UserInfo } from '../../components/userInfo';

import { Container, Column, Title, TitleHighlight } from './styles'

const Feed = () => {
    return (<>
        <Header user_auth={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
                <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
                <UserInfo percentual={35} name="Bianca Emi" image="https://avatars.githubusercontent.com/u/102377919?v=4" />
                <UserInfo percentual={35} name="Bianca Emi" image="https://avatars.githubusercontent.com/u/102377919?v=4" />
                <UserInfo percentual={35} name="Bianca Emi" image="https://avatars.githubusercontent.com/u/102377919?v=4" />
                <UserInfo percentual={35} name="Bianca Emi" image="https://avatars.githubusercontent.com/u/102377919?v=4" />
                <UserInfo percentual={35} name="Bianca Emi" image="https://avatars.githubusercontent.com/u/102377919?v=4" />
                
            </Column>
        </Container>
    </>)
}
export { Feed }