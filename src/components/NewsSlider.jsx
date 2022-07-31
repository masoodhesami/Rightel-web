import { Slide } from 'react-slideshow-image';
import { Box, Text } from '@chakra-ui/react'
import { ChevronRightIcon, ChevronLeftIcon } from '@chakra-ui/icons'
import 'react-slideshow-image/dist/styles.css'

const buttonStyle = {
    width: "35px",
    background: 'none',
    border: '0px'
};

const properties = {
    prevArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><ChevronLeftIcon color={'blackAlpha.400'} /></svg></button>,
    nextArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><ChevronRightIcon color={'blackAlpha.400'} /></svg></button>
}
const slideNews = [
    {
        title: 'پایداری شبکه رایتل در پی قطعی پراکنده برق',
        content: 'با وجود اختلالات سیستم برق کشور، شبکه ارتباطی رایتل پایدار است',
        date: '1401/4/23'

    },
    {
        title: 'راه‌اندازی سامانه ارسال پیامکی آدرس در مرکز تماس رایتل',
        content: 'با وجود اختلالات سیستم برق کشور، شبکه ارتباطی رایتل پایدار است',
        date: '1401/3/2'

    },
    {
        title: 'امور مشتریان رایتل در مشهد تغییر نشانی داد',
        content: 'با وجود اختلالات سیستم برق کشور، شبکه ارتباطی رایتل پایدار است',
        date: '1401/2/2'

    }
];
const NewsSlider = () => {
    return (
        <Box mt={'4'}>
            <div className="slide-container">
                <Slide {...properties}>
                    {slideNews.map((item, index) => (
                        <Box textAlign={'center'} className="each-slide" key={index}>
                            <Text color={'#333'} fontSize='xs'>{`${item.date}`}</Text>
                            <Text color={'black'} fontSize='lg'>{`${item.title}`}</Text>
                            <Text color={'#888'} fontSize='sm'>{`${item.content}`}</Text>
                        </Box>
                    ))}
                </Slide>
            </div>
        </Box>
    );
}

export default NewsSlider;