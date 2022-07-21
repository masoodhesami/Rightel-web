import { Container } from '@chakra-ui/react'
import Header from "../components/Header";
import Navbar from '../components/Navbar.tsx';
import Services from '../components/Services';
import SlideShow from '../components/SlideShow';


const HomePage = () => {
    return (
        <Container maxW='container.xl' color='white'>
            <Header />
            <Navbar />
            <SlideShow />
            <Services />
        </Container>
    );
}

export default HomePage;