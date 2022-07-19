import { Image, Box } from '@chakra-ui/react'

const UserImage = () => {
    return (
        <Box w='30px' h='30' >
            <Image src="https://s25.picofile.com/file/8451643942/profile_user_purple.png" alt='user-icon' />
        </Box>
    );
}

export default UserImage;