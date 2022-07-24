import { SimpleGrid, Box, Skeleton, Image } from '@chakra-ui/react'
import { useState } from 'react';
import NewsBanner from './NewsBanner';
import NewsSlider from "./NewsSlider";

const RightelNews = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    setTimeout(() => {
        setIsLoaded(true)
    }, 1500);
    return (
        <SimpleGrid mb={5} columns={{ lg: '2', md: '2', sm: '1' }} spacingX='40px' spacingY='35px'>
            <Skeleton isLoaded={isLoaded}>
                <Box>
                    <NewsSlider />
                </Box>
            </Skeleton>
            <Skeleton isLoaded={isLoaded}>
                <Box>
                    <NewsBanner />
                </Box>
            </Skeleton>
        </SimpleGrid>

    );
}

export default RightelNews;