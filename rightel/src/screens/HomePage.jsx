import { Container } from '@chakra-ui/react'
import Header from "../components/Header";
import Navbar from '../components/Navbar.tsx';
import Services from '../components/Services';
import SlideShow from '../components/SlideShow';
import Suggestion from '../components/Suggestion';
import TextHeader from '../components/TextHeader';


const HomePage = () => {
    return (
        <Container maxW='container.xl' color='white'>
            <Header />
            <Navbar />
            <SlideShow />
            <Services />
            <TextHeader mainTitle='پیشنهادات ویژه' subTitle='ویژه' detail='خدمات ارتباطی نوین' />
            <Suggestion />
        </Container>
    );
}

export default HomePage;