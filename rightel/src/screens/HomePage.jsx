import { Container } from '@chakra-ui/react'
import Header from "../components/Header";
import Navbar from '../components/Navbar.tsx';
import SlideShow from '../components/SlideShow';


const HomePage = () => {
    return (
        <Container maxW='container.xl' color='white'>
            <Header />
            <Navbar />
            <SlideShow />
        </Container>
    );
}

export default HomePage;