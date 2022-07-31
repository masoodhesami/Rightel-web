import { Slide } from 'react-slideshow-image';
import { Box, Image } from '@chakra-ui/react'
import { ChevronRightIcon, ChevronLeftIcon } from '@chakra-ui/icons'
import 'react-slideshow-image/dist/styles.css'

const buttonStyle = {
    width: "35px",
    background: 'none',
    border: '0px'
};

const properties = {
    prevArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><ChevronLeftIcon /></svg></button>,
    nextArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><ChevronRightIcon /></svg></button>
}
const slideImages = [
    {
        url: 'https://s25.picofile.com/file/8451668792/_xTFVt506.png',

    },
    {
        url: 'https://s25.picofile.com/file/8451669192/bg_free_call.png',

    },
    {
        url: 'https://s24.picofile.com/file/8451793850/slider3.png',

    }
];
const SlideShow = () => {

    return (
        <Box mt={'4'}>
            <div className="slide-container">
                <Slide {...properties}>
                    {slideImages.map((slideImage, index) => (
                        <Box className="each-slide" key={index}>
                            <Image src={`${slideImage.url}`} height={{ lg: '200px', md: '200px', xs: "150px" }} />
                        </Box>
                    ))}
                </Slide>
            </div>
        </Box>

    );
}

export default SlideShow;