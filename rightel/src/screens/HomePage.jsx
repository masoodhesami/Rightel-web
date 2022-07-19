import { Container } from '@chakra-ui/react'
import Header from "../components/Header";
import NavItems from '../components/NavItems';

const HomePage = () => {
    return (
        <Container maxW='container.xl' color='white'>
            <Header />
            <NavItems />
        </Container>
    );
}

export default HomePage;