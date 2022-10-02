import React, {useContext, useState} from "react";

// import TwoImage from './smallComp.jsx/TwoImages'
import {
  Button,
  ButtonGroup,
  Divider,
  Flex,
  HStack,
  IconButton,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
  VStack,
  Wrap,
} from "@chakra-ui/react";
// import ProductsSidebar from './smallComp.jsx/ProductSidebar'

// import Loading from './smallComp.jsx/Loding'
import {ChevronDownIcon, ChevronUpIcon} from "@chakra-ui/icons";
import {useEffect} from "react";
import {AppContext} from "../AppContext/AppContext";
import ProductCard from "./ProductCard";

const MenProducts = () => {
  const {state} = useContext(AppContext);

  const [mendata, setmenData] = useState([]);

  // is Loading   //
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 1500);

  useEffect(() => {
    setmenData(state.men.AllProductsData.menData);
  }, [mendata]);

  const PriceSortlow = () => {
    const SortedData = state.men.AllProductsData.menData.sort(function (a, b) {
      return a.price - b.price;
    });

    setmenData([...SortedData]);
  };

  const PriceSorthigh = () => {
    const SortedData = state.men.AllProductsData.menData.sort(function (a, b) {
      return b.price - a.price;
    });

    setmenData([...SortedData]);
  };

  console.log(mendata);

  //  if(isLoading){

  //   return (
  //      <Loading />
  //     )

  //  }

  return (
    <Stack style={{marginTop: "80px"}}>
      {/* <TwoImage 
        img3={data.giftVoucher.forAll} 
        /> */}

      <Wrap justify="center" style={{margin: "auto", marginTop: "20px"}}>
        <Text color="gray.500" fontWeight="bold">
          {" "}
          HOME / MEN / PRODUCTS{" "}
        </Text>

        <Divider orientation="horizontal" />

        <VStack>
          <Text align="center" fontSize="20" fontWeight="bold">
            Men Clothing(8803)
          </Text>

          <ButtonGroup size="sm" isAttached variant="outline">
            <IconButton
              onClick={PriceSortlow}
              aria-label="Add to friends"
              icon={<ChevronDownIcon boxSize={8} />}
            />
            <Button fontSize={18}>SORT BY PRICE</Button>
            <IconButton
              onClick={PriceSorthigh}
              aria-label="Add to friends"
              icon={<ChevronUpIcon boxSize={8} />}
            />
          </ButtonGroup>

          <HStack width="1200px">
            <Text color="gray.500" fontWeight="bold">
              {" "}
              FILTER{" "}
            </Text>{" "}
            <Spacer />
            <Text color="gray.500" fontWeight="bold">
              {" "}
              CLEAR ALL
            </Text>
          </HStack>
        </VStack>

        <HStack spacing={50} width="1200px" justify="stretch">
          {/* SIDEBAR */}
          {/* <ProductsSidebar   /> */}

          {/* PRODUCTS */}

          <SimpleGrid spacing={5} columns={3}>
            {mendata.map((el) => {
              return < ProductCard {...el} />
              
})}
          </SimpleGrid>
        </HStack>
      </Wrap>
    </Stack>
  );
};

export default MenProducts;
