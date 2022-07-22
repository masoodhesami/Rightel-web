import { Tabs, TabList, Tab, TabPanel, TabPanels, Grid, GridItem, Image, Container, Box, Text, Center, Button } from '@chakra-ui/react'
import {ViewOffIcon} from "@chakra-ui/icons"
const MyRightel = () => {
    return (
        <Grid templateColumns={'repeat(1,1fr)'}>
            <GridItem>
                <Image mb={8} h={{ lg: '220px', md: '220px', sm: '100px' }} w={'100%'} src='https://s25.picofile.com/file/8451669192/bg_free_call.png' alt='banner' />
            </GridItem>
            <Container mt='3' maxW={'container.md'} color='#9E9E9E'>
                <Tabs isFitted={true} colorScheme={'pink'} >
                    <TabList bg='#F4E8F4' rounded={'md'}  >
                        <Tab fontSize={{ lg: 'sm', md: 'sm', sm: 'xs' }}> رایتل من
                            <Image mr={'2'} w={{ lg: '15%', md: '15%', sm: '20%' }} src='https://s24.picofile.com/file/8451704976/smartphone.png' alt='smartphone' />
                        </Tab>
                        <Tab fontSize={{ lg: 'sm', md: 'sm', sm: 'xs' }}> وب سایت
                            <Image mr={'2'} w={{ lg: '15%', md: '15%', sm: '20%' }} src='https://s24.picofile.com/file/8451705000/internet.png' alt='website' />
                        </Tab>
                        <Tab fontSize={{ lg: 'sm', md: 'sm', sm: 'xs' }}>راهنما ترابرد
                            <Image mr={'2'} w={{ lg: '15%', md: '15%', sm: '20%' }} src='https://s24.picofile.com/file/8451705018/info.png' alt='info' />
                        </Tab>
                        <Tab fontSize={{ lg: 'sm', md: 'sm', sm: 'xs' }}>نظر کاربران
                            <Image mr={'2'} w={{ lg: '15%', md: '15%', sm: '20%' }} src='https://s25.picofile.com/file/8451705034/chat.png' alt='chat' />
                        </Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel color={'#6A6767'} mt={'3'}>
                            <Grid templateColumns={'repeat(4,1fr)'} gap={3}>
                                <GridItem w={'75%'} h='10' colSpan={1}>
                                    <Box>
                                        <Image src='https://s24.picofile.com/file/8451705326/hw.png' alt='smartPhone' />
                                    </Box>
                                </GridItem>
                                <GridItem colSpan={3}>
                                    <Grid templateColumns={'repeat(3,1fr)'} gap={2}>
                                        <GridItem mr={'6'} w={'80%'}>
                                            <Image w={'70%'} src='https://s25.picofile.com/file/8451705418/m4.png' alt='icon-1' />
                                            <Text fontSize={{lg:'sm',md:'sm',sm:"xs"}} mr={2}>خرید بسته</Text>
                                        </GridItem>
                                        <GridItem mr={'6'} w={'80%'}>
                                            <Image w={'70%'} src='https://s25.picofile.com/file/8451705426/m2.png' alt='icon-2' />
                                            <Text fontSize={{lg:'sm',md:'sm',sm:"xs"}} mr={2}> افزایش اعتبار</Text>
                                        </GridItem>
                                        <GridItem mr={'6'} w={'80%'}>
                                            <Image w={'70%'} src='https://s25.picofile.com/file/8451705434/m1.png' alt='icon-3' />
                                            <Text fontSize={{lg:'sm',md:'sm',sm:"xs"}}> مدیریت سیم‌کارت‌ها</Text>
                                        </GridItem>
                                    </Grid>
                                    <Grid mt={{lg:'12',md:'12',sm:'4'}} templateColumns={'repeat(1,1fr)'}>
                                        <Center>
                                            <GridItem w={'70%'}>
                                                <Button _hover={{bg:'purple'}} fontSize={'sm'} fontWeight='light' color={'#FBF7FB'} boxShadow={'0px 1px 4px #D640D6'} borderRadius={'32px'} w={'100%'}  bg='#902070'>دانلود نسخه Android</Button>
                                            </GridItem>
                                        </Center>
                                    </Grid>
                                </GridItem>
                            </Grid>
                        </TabPanel>
                        <TabPanel>
                            <p><ViewOffIcon/></p>
                        </TabPanel>
                        <TabPanel>
                        <p><ViewOffIcon/></p>                        </TabPanel>
                        <TabPanel>
                        <p><ViewOffIcon/></p>                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Container >
        </Grid >
    );
}

export default MyRightel;