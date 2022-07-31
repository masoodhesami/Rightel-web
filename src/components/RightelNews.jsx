import { SimpleGrid, Box } from '@chakra-ui/react'
import NewsBanner from './NewsBanner';
import NewsSlider from "./NewsSlider";

const RightelNews = () => {
    return (
        <SimpleGrid mb={5} columns={{ lg: '2', md: '2', sm: '1' }} spacingX='40px' spacingY='35px'>
            <Box>
                <NewsSlider />
            </Box>
            <Box>
                <NewsBanner />
            </Box>
        </SimpleGrid>

    );
}

export default RightelNews;