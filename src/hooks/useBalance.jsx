import { useEffect, useState } from 'react';
import { ethers } from 'ethers';

export default function useBalance() {
  const [accountDetails, setAccountDetails] = useState();
  useEffect(() => {
    const fetchBalance = async () => {
      try {
        if (window.ethereum) {
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();
          const connectedAccount = await signer.getAddress();
          
          
          if(connectedAccount) {
            setAccountDetails({
              address: connectedAccount,
              
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
