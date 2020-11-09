import {Typography} from '@material-ui/core'
import Axios from 'axios';
import React from 'react'

const AccountBalance = (): JSX.Element|null => {
  const [balance, setBalance] = React.useState(null);
  React.useEffect(() => {
    const getAccountBalance = async () => {
      try {
        const {data} = await Axios.get('http://localhost:5000/api/accountBalance');
        setBalance(data)
      } catch (error) {
        console.log(error)
      }
    };
    getAccountBalance();
  }, []);

  return (
    balance ? (<Typography style={{marginTop: 15}} variant="h5" component="h5" align='center'>Balance: ${balance}</Typography>) : null
  )
}

export default AccountBalance