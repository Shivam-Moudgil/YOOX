import { EditIcon, UnlockIcon } from '@chakra-ui/icons';
import { Box, Flex, Text} from '@chakra-ui/react';
import React from 'react'
import MEnu from '../Chakra.jsx/MEnu';
import { Icon } from '@chakra-ui/react'
import { useColorMode } from '@chakra-ui/react';
import Examplerh from '../../Check';
import { Link } from 'react-router-dom';

export const SmNavbar = () => {
      const {colorMode, toggleColorMode} = useColorMode();
  return (
    <>
      {/* <Box p="6" rounded="md" bg="white"> */}
      <Flex
        // bg={"rgba(53, 130, 185, 0.893);"}
        boxShadow="md">
        <Box
          display={"flex"}
          // border={"2px solid"}
          w={"75%"}
          m="auto"
          justifyContent={"space-between"}
        >
          <Box display={"flex"} alignItems={"center"}>
            <MEnu />
            <Text
              fontWeight={"bolder"}
              fontSize={"14px"}
              _hover={{textDecorationLine: "none"}}
              textDecorationLine={"underline"}
            >
              Customer Care
            </Text>
          </Box>
          <Box display={"flex"} alignSelf={"center"}>
            <Text fontWeight={"bolder"} fontSize={"13px"}>
              FREE STANDARD SHIPPING ON ORDERS OVER $100
            </Text>
          </Box>
          <Box
            fontWeight={"bolder"}
            fontSize={"13px"}
            display={"flex"}
            alignSelf={"center"}
            cursor={"pointer"}
          >
            {" "}
            <Link to="/register">
              <Box display={"flex"} alignSelf={"center"}>
                <Icon as={EditIcon} pos="relative" top="1" mr={1} />
                <Text mr={"29px"}>REGISTER</Text>
              </Box>
            </Link>
            <Link to="/login">
              <Box display={"flex"} alignSelf={"center"}>
                <Icon as={UnlockIcon} pos="relative" top="1" mr={1} />
                <Text>LOGIN</Text>
              </Box>
            </Link>
          </Box>
        </Box>
        <Examplerh />
      </Flex>
      {/* </Box> */}
    </>
  );
}

