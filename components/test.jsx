import { useEffect, useCallback } from "react"
import { useMoralisWeb3Api } from "react-moralis"
import { Box, Image, Text } from "@chakra-ui/react";
import CustomContainer from "./CustomContainer"

export default function Nft({ user }) {

  const Web3Api = useMoralisWeb3Api();

  // declare the async data fetching function
  const fetchNFTs = useCallback(async () => {

    // get NFTs for current user on Mainnet
    const userEthNFTs = await Web3Api.account.getNFTs();
    console.log(userEthNFTs);
    // get testnet NFTs for user
    const testnetNFTs = await Web3Api.Web3API.account.getNFTs({
      chain: process.env.CHAIN_NAME,
    });
    console.log(testnetNFTs);

    // get polygon NFTs for address
    const options = {
      chain: process.env.CHAIN_NAME,
      address: user.get('ethAddress'),
    };
    const polygonNFTs = await Web3Api.account.getNFTs(options);
    console.log(polygonNFTs);

  }, [Web3Api.Web3API.account, Web3Api.account, user])

  useEffect(() => {
    setTimeout(() => { fetchNFTs() }, 3000)
  }, [fetchNFTs])


  return (

    <CustomContainer>
      <Text>
        <Box>xxx</Box>
      </Text>
    </CustomContainer>

  )
  // data && data.result.map(e => { console.log(e) })
  // return (
  //   <CustomContainer>
  //     <Text fontSize="xl" fontWeight="bold">My NFTs</Text>
  //     {data && data.result.map(nft => (
  //       <Box key={nft.token_uri} mt="4" px="2" py="2" borderWidth="1px" borderRadius="md">
  //         {nft.image && <Image alt="img" src={nft.image} />}
  //         <p>{nft.token_uri}</p>
  //       </Box>
  //     ))}
  //   </CustomContainer>
  // )
}