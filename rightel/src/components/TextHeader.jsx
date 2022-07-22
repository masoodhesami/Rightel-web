import { Box, Text, HStack } from '@chakra-ui/react'
const TextHeader = ({ mainTitle, subTitle, detail }) => {
    return (
        <Box mt={{ lg: '12', md: '12', sm: "20" }} mb='4' display={'flex'} justifyContent='space-between'>
            <Text bgClip='text' borderBottom={'2px'} borderBottomColor="#EA7C16" bgGradient='linear(to-tr, #902070 ,  #EA7C16)' > {mainTitle} </Text>
            <HStack spacing={'2'}>
                <Text cursor={'pointer'} display={'inline-block'} color={'#902070'}>{subTitle}</Text>
                <Text display={'inline-block'} color={'#525151'}>-</Text>
                <Text cursor={'pointer'} display={'inline-block'} color={'#888888'}> {detail} </Text>
            </HStack>
        </Box>
    );
}

export default TextHeader; 