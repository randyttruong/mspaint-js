import { ChakraProvider } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'

previewBox = () => { 
    return ( 
        <> 
        <CacheProvider> 
            <ChakraProvider> 
            </ChakraProvider> 
        </CacheProvider>
        </> 
    );
}
