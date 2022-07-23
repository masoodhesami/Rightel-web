import { Container } from '@chakra-ui/react'
import Header from "../components/Header";
import MyRightel from '../components/MyRightel';
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
            <TextHeader mainTitle='پیشنهادات ویژه' subTitle='ویژه' detail='خدمات ارتباطی نوین' setDivider={true} />
            <Suggestion />
            <TextHeader mainTitle='اپلیکیشن رایتل من' subTitle='' detail='' setDivider={false} />
            <MyRightel />
        </Container>
    );
}

export default HomePage;