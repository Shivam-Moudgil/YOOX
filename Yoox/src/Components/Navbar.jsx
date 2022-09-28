import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
  return (
    <>
      <Box>
        <Box
          display={"flex"}
          border={"2px solid"}
          w={"75%"}
          m="auto"
          
              >
<Text>Women</Text>
<Text>Men</Text>
<Text>Kids</Text>
        </Box>
      </Box>
    </>
  );
}

export default Navbar;
