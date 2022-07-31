import { TabList, Tab, Image } from '@chakra-ui/react'
const MyRightel_TabHeader = () => {
    return (
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
    );
}

export default MyRightel_TabHeader;