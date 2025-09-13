import { logo, profile } from "@assets/index";
import { Container, Header, Logo, ProfileImage } from "./styles";

const Home: React.FC = () => {
    return (
        <Container>
            <Header>
                <Logo source={logo}/>
                <ProfileImage source={profile}/>
            </Header>
        </Container>
    )
}

export default Home;