import React from 'react'
import { Button, Center, Flex, Text } from "@chakra-ui/react";

const Header = ({user,logout,isLogginOut}) => {
  return (
    <header>
        <Flex justifyContent="space-between" bg="purple.300" color="white">
            <Center>
                <Text fontSize="xl" fontWeight="bold">
                    Dashboard
                </Text>
            </Center>
            <Center>
                <Text>{user.getUsername}</Text>
                <Button onClick={logout} ml="4" colorScheme='purple' disabled={isLogginOut}>Logout</Button>
            </Center>
        </Flex>
    </header>
  )
}

export default Header