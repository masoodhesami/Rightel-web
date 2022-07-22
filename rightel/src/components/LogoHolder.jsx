import { Image, Box } from '@chakra-ui/react'
const LogoHolder = () => {
    return (
        <Box mt={'5'}>
            <Image _hover={{ cursor: 'pointer' }} mt={{ sm: '1' }} htmlHeight={'30'} htmlWidth={'65'} src="https://s24.picofile.com/file/8451643950/logo99_head.png" alt='rightel-logo' />
        </Box>
    );
}

export default LogoHolder;