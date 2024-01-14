import { useEffect, useState } from 'react';
import { ethers } from 'ethers';

export default function useBalance() {
  const [accountDetails, setAccountDetails] = useState();
  const connectedAccount = localStorage.getItem('address');
  useEffect(() => {
    const fetchBalance = async () => {
      try {
        if (window.ethereum) {
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();
          const connectedAccount = await signer.getAddress();
          const balance = await signer.getBalance();
          const balanceInEther = ethers.utils.formatEther(balance);
          const typeOfAccount = await provider.getNetwork();
          
          if(connectedAccount && balance && connectedAccount) {
            setAccountDetails({
              address: connectedAccount,
              balance: ethers.utils.formatEther(balance),
              balanceInEther: balanceInEther, 
              typeOfAccount: typeOfAccount.name
            });
          }else{
            setAccountDetails({
              address: 'Not connected',
              balance: 'Not connected', 
            })
          }
        } else {
          console.error('Please install Metamask');
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchBalance();
  }, []); 

  return accountDetails;
}
