import { Box, Flex, HStack } from '@chakra-ui/react'
import LogoHolder from './LogoHolder';
import ToggleBtn from './ToggleBtn';
import Divider from './Divider';
import SearchInput from './SearchInput'
import UserImage from './UserImage'

const Header = () => {
    return (<>
        <Flex mb={'2.5'} justifyContent={'space-between'}>
            <LogoHolder />
            <Box mt={'5'}>
                <HStack spacing='24px'>
                    <ToggleBtn />
                    <Divider />
                    <SearchInput />
                    <UserImage />
                </HStack>
            </Box>
        </Flex>
    </>);
}

export default Header;