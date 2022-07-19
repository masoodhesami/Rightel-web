import { SearchIcon } from '@chakra-ui/icons'
import { Box, InputGroup, InputLeftElement, Input } from '@chakra-ui/react'

const SearchInput = () => {
    return (
        <Box w='185px' h='45'>
            <InputGroup>
                <InputLeftElement
                    pointerEvents='none'
                    children={<SearchIcon color='gray.500' />}
                />
                <Input color={'gray.500'} bg={'#EEE3EE'} borderRadius={"32"} type='tel' placeholder='جستجو' />
            </InputGroup>
        </Box>
    );
}

export default SearchInput;