import { Box, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Button } from 'react-bootstrap'
import { useSearchParams ,Link} from 'react-router-dom'
const Psuccess = () => {

    const searchQuery=useSearchParams()[0]
    const referenceNum=searchQuery.get("reference")
  return (
    <Box>
        <VStack h="100vh" justifyContent={"center"}>
            <Heading textTransform={"uppercase"}>Order Successfull</Heading>
            <Text>
                Reference No: {referenceNum}
            </Text>
            <Link to='/'><Button variant='success'>Back to Home</Button></Link>
        </VStack>
    </Box>
  )
}

export default Psuccess

