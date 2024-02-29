import Image from "next/image";
import Link from 'next/link';
import NextLink from 'next/link'; 
// import Gallery from './pages/gallery'; 
import { Button } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react'


export default function Home() {
  return (
    <>
      <ChakraProvider>
        <h1>
          "Hello"
        </h1>
      {/* <Gallery /> */}
        
        <li>
          <Link href="/splash"> Click here pls</Link> 

        </li>
      </ChakraProvider>
    {/* <Button
    variant='ghost'
    as = { NextLink } 
    href='/pages/splash'> 
      </Button>  */}
    </>
  );
}
