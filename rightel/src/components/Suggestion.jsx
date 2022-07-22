import { Box, Center, SimpleGrid, Image, Text, Badge, Flex } from '@chakra-ui/react'
import { CheckIcon } from "@chakra-ui/icons"

const Suggestion = () => {
    return (
        <SimpleGrid mb={5} columns={{ lg: '3', md: '3', sm: '1' }} spacingX='40px' spacingY='20px'>
            <Box cursor={'pointer'} px={'2'} textAlign={'center'} boxShadow={'1px 1px 8px #DFA4DF'} rounded={'md'} bg='#FCEFFC'>
                <Center mt={'7'}>
                    <Image src='https://s24.picofile.com/file/8451693700/01.png' alt='icon_1' w={{ lg: '25%', md: '25%', sm: "18%" }} />
                </Center>
                <Text mt={'2'} fontSize={{ lg: 'md', md: 'md', sm: 'sm' }} color={'#6A6767'}>مشخصات بسته آغازین</Text>
                <Text mb={'3'} mt={'3'} fontSize={{ lg: 'sm', md: 'sm', sm: 'xs' }} color={'#999595'}><CheckIcon color={'tomato'} pl='1' />
                    با اپلیکیشن "رایتل من" سیم‌کارت
                    خود را مدیریت نمایید</Text>
            </Box>
            <Box cursor={'pointer'} px={'2'} textAlign={'center'} boxShadow={'1px 1px 8px #DFA4DF'} rounded={'md'} bg='#FCEFFC'>
                <Flex justifyContent={'start'} pt='1'>
                    <Badge variant='subtle' colorScheme='green'>
                        ویژه
                    </Badge>
                </Flex>
                <Center mt={'3'}>
                    <Image src='https://s25.picofile.com/file/8451693868/fmu1.png' alt='icon_2' w={{ lg: '37%', md: '37%', sm: "25%" }} />
                </Center>
                <Text mt={'2'} fontSize={{ lg: 'md', md: 'md', sm: 'sm' }} color={'#6A6767'}>مشخصات بسته آغازین</Text>
                <Text mb={'3'} mt={'3'} fontSize={{ lg: 'sm', md: 'sm', sm: 'xs' }} color={'#999595'}> <CheckIcon color={'tomato'} pl='1' />
                    با اپلیکیشن "رایتل من" سیم‌کارت
                    خود را مدیریت نمایید</Text>
            </Box>
            <Box cursor={'pointer'} px={'2'} textAlign={'center'} boxShadow={'1px 1px 8px #DFA4DF'} rounded={'md'} bg='#FCEFFC'>
                <Center mt={'8'}>
                    <Image src='https://s24.picofile.com/file/8451693892/amu1.png' alt='icon_3' w={{ lg: '18%', md: '18%', sm: '14%' }} />
                </Center>
                <Text mt={'2'} fontSize={{ lg: 'md', md: 'md', sm: 'sm' }} color={'#6A6767'}>مشخصات بسته آغازین</Text>
                <Text mb={'3'} mt={'3'} fontSize={{ lg: 'sm', md: 'sm', sm: 'xs' }} color={'#999595'}> <CheckIcon color={'tomato'} pl='1' />
                    با اپلیکیشن "رایتل من" سیم‌کارت
                    خود را مدیریت نمایید</Text>
            </Box>
        </SimpleGrid>
    );
}

export default Suggestion;