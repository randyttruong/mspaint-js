import Image from "next/image";
import Link from 'next/link';
import NextLink from 'next/link'; 
import Gallery from './pages/gallery'; 
import { Button } from '@chakra-ui/react';

export default function Home() {
  return (
    <>
    <h1>
      "Hello"
    </h1>
    <Gallery />
    <Link href='/pages/draw'> Click here pls</Link> 
    <Button
    variant='ghost'
    as = { NextLink } 
    href='/draw'> 
      </Button> 
    </>
  );
}
