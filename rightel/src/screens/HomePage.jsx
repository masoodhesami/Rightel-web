import { Container } from '@chakra-ui/react'
import Header from "../components/Header";
import Navbar from '../components/Navbar.tsx';
import Services from '../components/Services';
import SlideShow from '../components/SlideShow';
import TextHeader from '../components/TextHeader';


const HomePage = () => {
    return (
        <Container maxW='container.xl' color='white'>
            <Header />
            <Navbar />
            <SlideShow />
            <Services />
            <TextHeader mainTitle = 'پیشنهادات ویژه' subTitle = 'ویژه' detail = 'خدمات ارتباطی نوین'/>
        </Container>
    );
}

export default HomePage;