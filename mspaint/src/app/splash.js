import Link from 'next/link';
import { ChakraProvider } from '@chakra-ui/react'

export default function Gallery() {
    return (
      <ChakraProvider>
        <h1>
            Welcome to Paint
        </h1>
      </ChakraProvider>
    );
  }