import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Box,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    useDisclosure,
} from '@chakra-ui/react';
import { useContext, useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Menubar.module.css';


export default function MenuBar({ open, handleOpen }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const redirect = useNavigate();
    return (
        <>

            <Drawer onClose={onClose} isOpen={open} size={'xs'} placement={"left"}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton onClick={handleOpen} />
                    <DrawerHeader> <Link to='/allproducts' style={{
                        textDecoration: "underline"
                    }}> UserProfile</Link> </DrawerHeader>
                    <DrawerBody>
                        <div>
                            <div className={styles.container}>
                                <div className={styles.same} onClick={() => redirect('/allproducts')}>Shop All</div>
                                <div className={styles.same}>New Arrivals</div>
                                <div className={styles.same} onClick={() => redirect('/bestseller')}>Bestsellers</div>
                                <Accordion allowMultiple className={styles.box}>
                                    <AccordionItem >
                                        <h2>
                                            <AccordionButton>
                                                <Box flex='1' textAlign='left' onClick={() => redirect('/haircare')}>
                                                    Skincare
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            <AccordionItem>
                                                <h2>
                                                    <AccordionButton>
                                                        <Box flex='1' textAlign='left'>
                                                            By Product Type
                                                        </Box>
                                                        <AccordionIcon />
                                                    </AccordionButton>
                                                </h2>
                                                <AccordionPanel pb={4}>
                                                    <li>All Skin Care</li>
                                                    <li>Products</li>
                                                    <li>Face Creame</li>
                                                    <li>Face Pack/Mask</li>
                                                    <li>Face Serum</li>
                                                    <li>Face Scrub</li>
                                                    <li>Face Toner</li>
                                                    <li>Face Gel</li>
                                                </AccordionPanel>
                                            </AccordionItem>
                                            <AccordionItem>
                                                <h2>
                                                    <AccordionButton>
                                                        <Box flex='1' textAlign='left'>
                                                            By Concern
                                                        </Box>
                                                        <AccordionIcon />
                                                    </AccordionButton>
                                                </h2>
                                                <AccordionPanel pb={4}>
                                                    <li>Pigmentation</li>
                                                    <li>Acne & Pimples</li>
                                                    <li>Ageing</li>
                                                    <li>Dark spots</li>
                                                    <li>Dark Circles</li>
                                                    <li>Blackheads & White</li>
                                                    <li>Heads</li>
                                                    <li>Tan Removal</li>
                                                    <li>Hydration</li>
                                                </AccordionPanel>
                                            </AccordionItem>
                                            <AccordionItem>
                                                <h2>
                                                    <AccordionButton>
                                                        <Box flex='1' textAlign='left'>
                                                            By Skin Type
                                                        </Box>
                                                        <AccordionIcon />
                                                    </AccordionButton>
                                                </h2>
                                                <AccordionPanel pb={4}>
                                                    <li>Dull Skin</li>
                                                    <li>Dry Skin</li>
                                                    <li>Oily Skin</li>
                                                    <li>Normal Skin</li>
                                                </AccordionPanel>
                                            </AccordionItem>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem >
                                        <h2>
                                            <AccordionButton>
                                                <Box flex='1' textAlign='left' onClick={() => redirect('/haircare')}>
                                                    Haircare
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            <AccordionItem>
                                                <h2>
                                                    <AccordionButton>
                                                        <Box flex='1' textAlign='left'>
                                                            By Product Type
                                                        </Box>
                                                        <AccordionIcon />
                                                    </AccordionButton>
                                                </h2>
                                                <AccordionPanel pb={4}>
                                                    <li>All Haircare</li>
                                                    <li>Products</li>
                                                    <li>Shampoo</li>
                                                    <li>Conditioner</li>
                                                    <li>Hair Oil</li>
                                                    <li>Hair Mask</li>
                                                </AccordionPanel>
                                            </AccordionItem>
                                            <AccordionItem>
                                                <h2>
                                                    <AccordionButton>
                                                        <Box flex='1' textAlign='left'>
                                                            By Hair Concern
                                                        </Box>
                                                        <AccordionIcon />
                                                    </AccordionButton>
                                                </h2>
                                                <AccordionPanel pb={4}>
                                                    <li>Hair Loss</li>
                                                    <li>Hair Thinning</li>
                                                    <li>Dull Hair</li>
                                                    <li>Dandruff</li>
                                                    <li>Damage Hair</li>
                                                    <li>Frizzy Hair</li>
                                                    <li>Dry Hair & Scalp</li>
                                                </AccordionPanel>
                                            </AccordionItem>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem >
                                        <h2>
                                            <AccordionButton>
                                                <Box flex='1' textAlign='left' onClick={() => redirect('/bodycare')}>
                                                    Bodycare
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            <AccordionItem>
                                                <h2>
                                                    <AccordionButton>
                                                        <Box flex='1' textAlign='left'>
                                                            Bath & Body
                                                        </Box>
                                                        <AccordionIcon />
                                                    </AccordionButton>
                                                </h2>
                                                <AccordionPanel pb={4}>
                                                    <li>All Body Care</li>
                                                    <li>Products</li>
                                                    <li>Body Soap</li>
                                                    <li>Body Wash</li>
                                                    <li>Body Scrub</li>
                                                    <li>Body Lotion</li>
                                                </AccordionPanel>
                                            </AccordionItem>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem >
                                        <h2>
                                            <AccordionButton>
                                                <Box flex='1' textAlign='left' onClick={() => redirect('/perfumes')}>
                                                    Perfumes
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            <li>All Perfumes</li>
                                            <li>Perfumes For Her</li>
                                            <li>Perfumes For Him</li>
                                            <li>Unisex Perfumes</li>
                                            <li>Body Perfume</li>
                                            <li>Little Luxuries</li>
                                            <li>Gift Sets</li>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem >
                                        <h2>
                                            <AccordionButton>
                                                <Box flex='1' textAlign='left' >
                                                    Combos
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            <li>GIFT BOXES</li>
                                            <li>All Combos</li>
                                            <li>Bestseller Combos</li>
                                            <li>Skin Combos</li>
                                            <li>Hair Combos</li>
                                            <li>Body Combos</li>
                                            <li>Perfume Combos</li>
                                            <li>C Glow Range</li>
                                            <li>Kukumadi Range</li>
                                        </AccordionPanel>
                                    </AccordionItem>

                                </Accordion>
                                <div className={styles.same}>Build a Box</div>
                            </div>
                        </div>
                    </DrawerBody>
                    <DrawerFooter>

                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}