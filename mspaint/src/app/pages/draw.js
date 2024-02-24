import * as React from 'react'
import Link from 'next/link';



// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

export default function Draw() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <h1>
        Test
      </h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </ChakraProvider>
  )
}