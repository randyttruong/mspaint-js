// app/providers.tsx
'use client'

import Link from 'next/link';

import { ChakraProvider } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'

export default function Gallery() {
  return (
    <>
    <ChakraProvider>
    <Box bg='white' w='50%' p={4} color='white'>
      This is the Box
    </Box>
      <h1>First Post</h1>
      <h1>
         Here is draw <Link href="./draw">this page!</Link>
      </h1>
    </ChakraProvider>
    </>
  );
}
