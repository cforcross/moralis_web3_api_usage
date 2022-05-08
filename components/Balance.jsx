import React,{useState,useEffect} from 'react'
import CustomContainer from './CustomeContainer'
import {Divider, Text} from '@chakra-ui/react'
import { useERC20Balances, useMoralisWeb3Api } from "react-moralis";
import Moralis from "moralis"

const Balance = ({ user}) => {

const Web3Api = useMoralisWeb3Api()
const {fetchERC20Balances,data} = useERC20Balances()
const [ethbalance,setEthBalance] = useState(0)


const fetchNativeBalance = async () => {
    const result = await Web3Api.account.getNativeBalance({
        address: user.get("ethAddress"),
        token: "ETH",
        chain: "rinkeby"
        
    }).catch(e=>console.log(e))
    console.log(result)
    if(result.balance){
        // setEthBalance(Moralis.utils.fromWei(result.balance))
        setEthBalance(Moralis.Units.FromWei(result.balance))

    }
    // return result
}

const fetchBlock = async() => {
    const result = await Web3Api.native.getBlock({
      block_number_or_hash: '100000'
    })
    console.log(result)
  }

useEffect(()=>{
    fetchNativeBalance()
    fetchERC20Balances({
        params: {
            address: user.get("ethAddress"),
            chain: "rinkeby"
        }
    })
},[])
console.table(data)

useEffect(()=>{
    fetchBlock()
},[]);

  return (
    <CustomContainer>
        <Text mb='6' font-size='xl' fontWeight='bold'>My ERC20 Tokens</Text>
        {ethbalance && <Text>{ethbalance} Eth</Text>}
        <Divider/>
        {data && data.map(token =>(
            <div key={token.symbol}>
                {/* <Text>{token.symbol}</Text> */}
                <Text>{Moralis.Units.FromWei(token.balance)} 
                <b> {token.symbol}</b>
                </Text>
                <Divider/>
            </div>
        ))}
    </CustomContainer>
  )
}

export default Balance