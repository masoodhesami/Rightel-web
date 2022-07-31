import { Tabs, Grid, GridItem, Image, Container } from '@chakra-ui/react'
import MyRightel_TabHeader from './MyRightel_TabHeader';
import MyRightel_TabPanels from './MyRightel_TabPanels';
const MyRightel = () => {
    return (
        <Grid templateColumns={'repeat(1,1fr)'}>
            <GridItem>
                <Image mb={8} h={{ lg: '220px', md: '220px', sm: '100px' }} w={'100%'} src='https://s25.picofile.com/file/8451669192/bg_free_call.png' alt='banner' />
            </GridItem>
            <Container mt='3' maxW={'container.md'} color='#9E9E9E'>
                <Tabs isFitted={true} colorScheme={'pink'} >
                    <MyRightel_TabHeader />
                    <MyRightel_TabPanels />
                </Tabs>
            </Container >
        </Grid >
    );
}

export default MyRightel;