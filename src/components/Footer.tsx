import { ReactNode } from 'react';
import React from 'react';
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function LargeWithAppLinksAndSocial() {
  return (
    <Box mt={'16'}
      bg={'#312244'}
      color={'#B2AFAF'}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid fontSize={{ lg: 'md', md: 'md', sm: 'sm' }} columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader><Text fontSize={{ lg: 'md', md: 'md', sm: 'sm' }} color={'#D9D6D6'} borderBottom={'2px'} borderBottomColor='#EA7C16'>محصولات و خدمات</Text> </ListHeader>
            <Link href={'#'}>خرید بسته اینترنتی</Link>
            <Link href={'#'}>خرید شارژ</Link>
            <Link href={'#'}>کد‌های دستوری</Link>
            <Link href={'#'}>خرید و ثبت نام سیم‌کارت</Link>
            <Link href={'#'}>تبدیل سیم‌کارت</Link>
            <Link href={'#'}>تعرفه‌ها</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader><Text fontSize={{ lg: 'md', md: 'md', sm: 'sm' }} color={'#D9D6D6'} borderBottom={'2px'} borderBottomColor='#EA7C16'>دسترسی کوتاه</Text> </ListHeader>
            <Link href={'#'}>خرید بسته اینترنتی</Link>
            <Link href={'#'}>خرید شارژ</Link>
            <Link href={'#'}>کد‌های دستوری</Link>
            <Link href={'#'}>خرید و ثبت نام سیم‌کارت</Link>
            <Link href={'#'}>تبدیل سیم‌کارت</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader><Text fontSize={{ lg: 'md', md: 'md', sm: 'sm' }} color={'#D9D6D6'} borderBottom={'2px'} borderBottomColor='#EA7C16'>درگاه‌های مرتبط</Text> </ListHeader>
            <Link href={'#'}>خرید بسته اینترنتی</Link>
            <Link href={'#'}>خرید شارژ</Link>
            <Link href={'#'}>کد‌های دستوری</Link>
            <Link href={'#'}>تعرفه‌ها</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader><Text fontSize={{ lg: 'md', md: 'md', sm: 'sm' }} color={'#D9D6D6'} borderBottom={'2px'} borderBottomColor='#EA7C16'>تماس با ما</Text> </ListHeader>
            <Link href={'#'}>خرید و ثبت نام سیم‌کارت</Link>
            <Link href={'#'}>تبدیل سیم‌کارت</Link>
            <Link href={'#'}>تعرفه‌ها</Link>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container fontSize={{ lg: 'md', md: 'md', sm: 'xs' }}
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}>
          <Text>© برند رایتل به عنوان یک نام و علامت تجاری ثبت شده است. کلیه حقوق این وب سایت برای رایتل محفوظ است</Text>
          <Stack direction={'row'} spacing={3}>
            <SocialButton label={'Twitter'} href={'#'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'#'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}