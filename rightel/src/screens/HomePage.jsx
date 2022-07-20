import { Container } from '@chakra-ui/react'
import Header from "../components/Header";
import Navbar from '../components/Navbar.tsx';


const HomePage = () => {
    return (
        <Container maxW='container.xl' color='white'>
            <Header />
            <Navbar/>
        </Container>
    );
}

export default HomePage;