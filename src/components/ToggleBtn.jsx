import {Box, HStack, Button } from '@chakra-ui/react'

const ToggleBtn = () => {
    return (
        <Box boxShadow={'base'} mb={"1"} borderRadius={'32'} w={{lg:'170px',md:'170px',sm:'150px'}} h='39' bg={'#EEE3EE'}>
            <HStack spacing='10px' mt={'1'} mr={'4'}>
                <Box>
                    <Button fontSize={{lg:'sm' , md:'sm' ,sm:'xs'}} fontWeight={'light'} borderRadius={'27.5'} size={"sm"} color={"#707070"} bg={"white"} colorScheme='whiteAlpha'> شخصی </Button>
                </Box>
                <Box>
                    <Button fontSize={{lg:'sm' , md:'sm' ,sm:'xs'}}  fontWeight={'light'} _hover={{ color: "purple" }} borderRadius={'27.5'} size={"sm"} color={"gray.400"} colorScheme='whiteAlpha' variant='ghost'>
                        سازمانی
                    </Button>
                </Box>
            </HStack>
        </Box>
    );
}

export default ToggleBtn;