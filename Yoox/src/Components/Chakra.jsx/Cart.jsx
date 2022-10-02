import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Text,
  Center,
  Box,
  Image,
  Heading,
  useToast,
} from "@chakra-ui/react";

import React, {useContext, useEffect, useState} from "react";
import {BsFillBagFill} from "react-icons/bs";
import {AppContext} from "../AppContext/AppContext";

const Cart = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [price, setPrice] = useState(0);
  const {cart, setCart} = useContext(AppContext);
  const [quan, setQuan] = useState(1);
  const toast = useToast();
  console.log(cart);

  let sum = 0;
  const handlePrice = () => {
    cart.map((item) => {
      console.log({...item});
      sum += Number(item.rprice.replace(/[^0-9\-]/g, "") * Number(quan));
    });
    setPrice(sum);
  };
  console.log(sum);

  useEffect(() => {
    handlePrice();
  }, [cart,quan]);

  const handlePlaceOrder = () => {
           toast({
             title: "Redirecting to payment",
             status: "success",
             duration: 3000,
             isClosable: true,
           });
  };

  const REmove = (id) => {
    if (id !== -1) {
      cart.splice(id, 1);
      setCart([...cart], cart);
    }
    {
              toast({
                title: "Removed",
                status: "warning",
                duration: 2000,
                isClosable: true,
              });
    }
    // console.log(id)
  };

  return (
    <>
      <Text onClick={onOpen} cursor={"pointer"}>
        <BsFillBagFill size={18} w={6} h={6} />
      </Text>
      <Drawer size={"md"} isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>YOUR CART</DrawerHeader>

          <DrawerBody>
            {cart.map((el,i) => {
              return (
                  <Box
                      key={el.id}
                  border="1px solid"
                  mb={3}
                  display={"flex"}
                  h={"76px"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  gap={3}
                >
                  <Image w={"90px"} h={"70px"} src={el.img} />
                  <Box display={"flex"} gap={"10px"}>
                    {" "}
                          <Button
                      disabled={quan == 1}
                              onClick={() => setQuan(quan - 1)
                              }
                    >
                      -
                    </Button>
                    <Button>{quan}</Button>
                    <Button onClick={() => setQuan(quan + 1)}>+</Button>
                  </Box>
                  <Heading pr={1} fontSize={14}>
                    {el.rprice}
                  </Heading>
                  <Button onClick={REmove}>Remove</Button>
                </Box>
              );
            })}
            <Text
              textAlign={"Center"}
              fontFamily={"cursive"}
              fontSize="20px"
              bg={"teal"}
              p={2}
              color="white"
                      >
                          {!price?"Your Cart is Empty":
            "Total :"+ price}
            </Text>
          </DrawerBody>

          <DrawerFooter w={"full"}>
            <Button w={"full"} disabled={price==0} colorScheme="blue" onClick={handlePlaceOrder}>
              Checkout
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Cart;
