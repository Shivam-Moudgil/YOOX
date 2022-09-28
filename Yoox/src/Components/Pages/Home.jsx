import { Box, Center, Image } from '@chakra-ui/react';
import React from 'react'
import MyCarousel from '../componets/Mcarousel'
import SecoP from '../componets/secoP';

const banner = [
  {
    image:
      "https://www.yoox.com/images/yoox80/banners/6824_1_NewArrivals_MW_Main.jpg?634485886869569819#width=1378&height=637",
    link: "/",
  },
  {
    image:
      "https://images.unsplash.com/photo-1533495791726-9728ce8983a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG1lbiUyMGZhc2hpb258ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=1378&q=60",
    link: "/",
  },
  {
    image:
      "https://www.yoox.com/images/yoox80/banners/6821_2_ShoesACC_MAIN_K.jpg?634485886869569819#width=1378&height=637",
    link: "/",
  },
];


const Home = () => {
  return (
    <>
        <Center
          pos={"relative"}
          fontSize={"15px"}
          fontWeight="bolder"
                  top={"55"}
                  letterSpacing={2}
                  display={"flex"}
                  flexDirection={"column"}
        >
                  THE BIGGEST SALE EVER: UP TO 95% OFF <br />
                  <Center> Ends 10/1</Center>
        </Center>
        <Image
          w={"1380px"}
          m={"auto"}
          src="https://www.yoox.com/images/yoox80/banners/6950_3_Premium_DM.png?634485886869569819#width=1378&height=67"
        />
        <Box w={"90%"} m={"auto"}>
          <MyCarousel items={banner} />
          </Box>
          <Box>
          <SecoP/>
      </Box>
    </>
  );
}

export default Home
