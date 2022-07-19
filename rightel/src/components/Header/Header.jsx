import { Box, Container, Flex, HStack } from '@chakra-ui/react'
import LogoHolder from '../LogoHolder';
import ToggleBtn from '../ToggleBtn';
import Divider from '../Divider';
import SearchInput from '../SearchInput'
import UserImage from '../UserImage'

const Header = () => {
    return (<>
        <Container maxW='container.xl' color='white'>
            <Flex justifyContent={'space-between'}>
                <LogoHolder />
                <Box p='4'>
                    <HStack spacing='24px'>
                        <ToggleBtn />
                        <Divider />
                        <SearchInput />
                        <UserImage />
                    </HStack>
                </Box>
            </Flex>
        </Container>
    </>);
}

export default Header;