import {
  Box,
  Center,
  Grid,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import {designer} from "../Data/designer.js";
import React from 'react'

const Two = () => {
  return (
    <div>
      <Box
        fontWeight={"bold"}
        w={"70%"}
        m="auto"
        fontSize={"24px"}
        mt={"36"}
        h={600}
        display="flex"
        justifyContent={"space-between"}
      >
        <GridItem
          fontFamily={"mono"}
          display={"flex"}
          gap={4}
          flexDirection={"column"}
        >
          <Image
            w={400}
            h={600}
            src="https://www.yoox.com/images/yoox80/banners/6950_3_HL_DM_US.png?634485886869569819#width=430&height=600"
          />
          <Text textAlign={"center"}>UPTO 75%/80%/90% OFF</Text>
        </GridItem>
        <GridItem
          fontFamily={"mono"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"flex-end"}
          gap={4}
        >
          <Image
            w={400}
            h={600}
            src="https://www.yoox.com/images/yoox80/banners/6769_1_DA_NewArrivals_HL.jpg?634485886869569819#width=430&height=600"
          />
          <Text textAlign={"center"}>AMAZING PICKS</Text>
        </GridItem>
      </Box>
      <Center>
        <Box
          boxShadow={
            // "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
            "2xl"
          }
          borderRadius={"9px"}
          pos={"relative"}
          bottom={"640px"}
          w={"22%"}
          textAlign={"center"}
          p={5}
          bg={"white"}
          pb={14}
          color="black"
        >
          - Designers -
          {designer.map(({Designers}) => (
            <Heading color={"blackAlpha.900"} mt={6} fontSize={"15"}>
              {Designers}
            </Heading>
          ))}
        </Box>
      </Center>
    </div>
  );
}

export default Two
