import { Box, Center, Grid, GridItem, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { designer } from '../Data/designer.js';
console.log(designer)
const SecoP = () => {
  return (
    <>
      <Center>
        <Grid>
          <SimpleGrid
            border={"2px solid black"}
            columns={3}
          >
            <GridItem border={"2px solid black"}>
              1{/* <Image src="" /> */}
            </GridItem>
            <GridItem>
              {designer.map((el) => {
                return <Text>{el.Designers}</Text>;
              })}
            </GridItem>
            <GridItem>{/* <Image src="" /> */}</GridItem>3
          </SimpleGrid>
        </Grid>
      </Center>
    </>
  );
}

export default SecoP
