import { Grid, GridItem, Center, Image } from '@chakra-ui/react'
const Services = () => {
    return (
        <Grid h={{lg:'111px',md:'111px',sm:'40px'}} mt={{lg:'6',md:'6',sm:'4'}} templateColumns={{lg:'repeat(8,1fr)',md:'repeat(8,1fr)',sm:'repeat(8,1fr)'}} gap={{lg:'10',md:'10',sm:'2'}}>
            <GridItem mt={'4'} rounded={'md'}   bg='white' boxShadow={'2px 1px 10px #C295C5'} >
                <Center cursor={'pointer'}  width={'100%'} height='100%'>
                    <Image w={'70px'} src='https://s25.picofile.com/file/8451680526/s6.png' alt='service_image'/>
                </Center>
            </GridItem>
            <GridItem mt={'4'} rounded={'md'}   bg='white' boxShadow={'2px 1px 10px #C295C5'} >
                <Center cursor={'pointer'} width={'100%'} height='100%'>
                    <Image w={'70px'} src='https://s25.picofile.com/file/8451680818/s8.png' alt='service_image'/>
                </Center>
            </GridItem>
            <GridItem mt={'4'} rounded={'md'}   bg='white' boxShadow={'2px 1px 10px #C295C5'} >
                <Center cursor={'pointer'} width={'100%'} height='100%'>
                    <Image w={'70px'} src='https://s25.picofile.com/file/8451680850/s5.png' alt='service_image'/>
                </Center>
            </GridItem>
            <GridItem mt={'4'} rounded={'md'}   bg='white' boxShadow={'2px 1px 10px #C295C5'} >
                <Center cursor={'pointer'} width={'100%'} height='100%'>
                    <Image w={'70px'} src='https://s25.picofile.com/file/8451680868/s4.png' alt='service_image'/>
                </Center>
            </GridItem>
            <GridItem mt={'4'} rounded={'md'}   bg='white' boxShadow={'2px 1px 10px #C295C5'} >
                <Center cursor={'pointer'} width={'100%'} height='100%'>
                    <Image w={'70px'} src='https://s25.picofile.com/file/8451680876/s3.png' alt='service_image'/>
                </Center>
            </GridItem>
            <GridItem mt={'4'} rounded={'md'}   bg='white' boxShadow={'2px 1px 10px #C295C5'} >
                <Center cursor={'pointer'} width={'100%'} height='100%'>
                    <Image w={'70px'} src='https://s24.picofile.com/file/8451680884/s2.png' alt='service_image'/>
                </Center>
            </GridItem>
            <GridItem mt={'4'} rounded={'md'}   bg='white' boxShadow={'2px 1px 10px #C295C5'} >
                <Center cursor={'pointer'} width={'100%'} height='100%'>
                    <Image w={'70px'} src='https://s25.picofile.com/file/8451680526/s6.png' alt='service_image'/>
                </Center>
            </GridItem>
            <GridItem mt={'4'} rounded={'md'}   bg='white' boxShadow={'2px 1px 10px #C295C5'} >
                <Center cursor={'pointer'} width={'100%'} height='100%'>
                    <Image w={'70px'} src='https://s25.picofile.com/file/8451680892/s1.png' alt='service_image'/>
                </Center>
            </GridItem>
       
        </Grid>
    );
}

export default Services;
