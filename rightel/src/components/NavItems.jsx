import { Grid, GridItem, Text } from '@chakra-ui/react'

const NavItems = () => {
    return (
        <Grid
            templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
            gridTemplateRows={'40px 1fr 30px'}
            gridTemplateColumns={'150px 1fr'}
            h='200px'
            gap='1'
            color='blackAlpha.700'
            fontWeight='bold'
        >
            <GridItem boxShadow='base' rounded={'sm'} pl='1' pr={'1'} bg='#EEE3EE' area={'header'}>
                <Grid color={'#6A6767'} pt={'1'} fontSize={{ base: 'sm', md: "sm", lg: "sm", sm: '10px' }} fontWeight={'light'} textAlign={'center'} templateColumns='repeat(8, 1fr)' gap={3}>
                    <GridItem _hover={{ cursor: "pointer", bg: '#fff', rounded: "md" }} w='100%' h='8'>
                        <Text pt={'2'}> محصولات</Text>
                    </GridItem>
                    <GridItem _hover={{ cursor: "pointer", bg: '#fff', rounded: "md" }} w='100%' h='8'>
                        <Text pt={'2'}>  خدمات و سرگرمی</Text>
                    </GridItem>
                    <GridItem _hover={{ cursor: "pointer", bg: '#fff', rounded: "md" }} w='100%' h='8'>
                        <Text pt={'2'}>  طرح‌ها و پیشنهادات</Text>
                    </GridItem>
                    <GridItem _hover={{ cursor: "pointer", bg: '#fff', rounded: "md" }} w='100%' h='8'>
                        <Text pt={'2'}> ثبت نام و خرید</Text>
                    </GridItem>
                    <GridItem _hover={{ cursor: "pointer", bg: '#fff', rounded: "md" }} w='100%' h='8'>
                        <Text pt={'2'}>  رایتل من</Text>
                    </GridItem>
                    <GridItem _hover={{ cursor: "pointer", bg: '#fff', rounded: "md" }} w='100%' h='8'>
                        <Text pt={'2'}> درباره رایتل</Text>
                    </GridItem>
                    <GridItem _hover={{ cursor: "pointer", bg: '#fff', rounded: "md" }} w='100%' h='8'>
                        <Text pt={'2'}> راهنما</Text>
                    </GridItem>
                    <GridItem _hover={{ cursor: "pointer" }} w='100%' h='8'>
                        <Text color={'#902070'} fontWeight={'semibold'} pt={'2'}> ترابرد به رایتل</Text>
                    </GridItem>
                </Grid>
            </GridItem>
        </Grid>
    );
}

export default NavItems;