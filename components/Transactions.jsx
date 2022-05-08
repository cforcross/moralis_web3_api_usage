import React from "react";
import CustomContainer from "./CustomeContainer";
import { useMoralisWeb3Api } from "react-moralis";
import { Button, Center, Divider, Link, Text } from "@chakra-ui/react";


const Transactions = ({user}) => {
  const Web3Api = useMoralisWeb3Api();
  const [transactions, setTransactions] = React.useState();

  const BASE_URL = "https://rinkeby.etherscan.io/tx/"


  const fetcTransactions = async () => {
    const data = await Web3Api.account.getTransactions({
      chain: "rinkeby",
      address: user.get("ethAddress"),
      limit: 10
    });
    console.log(data);
    if (data) {
      setTransactions(data.result);
    }
  };
  console.log(transactions);
  React.useEffect(() => {
    fetcTransactions();
  }, []);

  return <CustomContainer>
      <Text fontSize="xl" mb='6' fontWeight="bold">My Last 10 transactions</Text>
        {transactions && transactions.map(transaction => (
            <div key={transaction.hash} isExternal>
                <Link href={`${BASE_URL}`}>
                &nbsp;{transaction.hash}
                </Link>
                <Divider />
            </div>
        ))}
  </CustomContainer>;
};

export default Transactions;
