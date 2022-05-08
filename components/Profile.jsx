import { Button, FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import React,{useState} from "react";
import { useMoralis } from "react-moralis";
import CustomContainer from "./CustomeContainer";

const Profile = ({ user }) => {
    const[input,setInput]= useState('');
    const {setUserData,isUserUpdating} = useMoralis()


  return (
    <CustomContainer>
      <Text>
        <b>&nbsp; Username:</b>
        {user.getUsername()}
      </Text>
      <Text>
        <b>&nbsp; WalletAddress:</b>
        {user.get("ethAddress")}
      </Text>
      <form onSubmit={e=>{
          e.preventDefault()
          if(input.trim() !== ''){
                setUserData({username:input}).then(()=>setInput(''))
          }
          
          }}>
        <FormControl mt='6' mb='6'>
          <FormLabel htmlFor="username">Set a new username</FormLabel>
          <Input id="username" placeholder="Username" type='text' onChange={e=>setInput(e.target.value)} value={input}/>
        </FormControl>
        <Button type="submit" colorScheme='pink' disabled={isUserUpdating}>Change Username</Button>
      </form>
    </CustomContainer>
  );
};

export default Profile;
