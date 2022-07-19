import {Box, HStack, Button } from '@chakra-ui/react'

const ToggleBtn = () => {
    return (
        <Box mb={"1"} borderRadius={'32'} w='170px' h='39' bg={'#EEE3EE'}>
            <HStack spacing='10px' mt={'1'} mr={'4'}>
                <Box>
                    <Button borderRadius={'27.5'} size={"sm"} color={"#707070"} bg={"white"} colorScheme='whiteAlpha'> شخصی </Button>
                </Box>
                <Box>
                    <Button _hover={{ background: "white", color: "gray.500" }} borderRadius={'27.5'} size={"sm"} color={"gray.400"} colorScheme='whiteAlpha' variant='ghost'>
                        سازمانی
                    </Button>
                </Box>
            </HStack>
        </Box>
    );
}

export default ToggleBtn;