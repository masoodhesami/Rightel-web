import { Container, Skeleton } from '@chakra-ui/react'
import Header from "../components/Header";
import MyRightel from '../components/MyRightel';
import Navbar from '../components/Navbar.tsx';
import RightelNews from '../components/RightelNews';
import Services from '../components/Services';
import SlideShow from '../components/SlideShow';
import Suggestion from '../components/Suggestion';
import TextHeader from '../components/TextHeader';
import { useState } from 'react';


const HomePage = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    setTimeout(() => {
        setIsLoaded(true)
    }, 2000);
    return (
        <Container maxW='container.xl' color='white'>
            <Header />
            <Navbar />
            <Skeleton isLoaded={isLoaded}>
                <SlideShow />
            </Skeleton>
            <Skeleton isLoaded={isLoaded}>
                <Services />
            </Skeleton>
            <TextHeader mainTitle='پیشنهادات ویژه' subTitle='ویژه' detail='خدمات ارتباطی نوین' setDivider={true} />
            <Suggestion />
            <TextHeader mainTitle='اپلیکیشن رایتل من' subTitle='' detail='' setDivider={false} />
            <MyRightel />
            <TextHeader mainTitle='اخبار رایتل' subTitle='' detail='' setDivider={false} />
            <Skeleton isLoaded={isLoaded}>
                <RightelNews />
            </Skeleton>
        </Container>
    );
}

export default HomePage;