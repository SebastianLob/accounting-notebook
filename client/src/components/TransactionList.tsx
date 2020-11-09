import React from 'react';
import {Theme, createStyles, makeStyles} from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Grid} from '@material-ui/core';
import TransactionDetails from './TransactionDetails';
import Axios from 'axios';

type Transaction = {
  id: string,
  type: 'debit'|'credit';
  amount: number;
  effectiveDate: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      marginTop: 40,
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
      textAlign: 'center'
    },
  }),
);

export default function TransactionList() {
  const [transactions, setTransactions] = React.useState<Array<Transaction>>([])
  React.useEffect(() => {
    const getTransactions = async () => {
      try {
        const {data} = await Axios.get('http://localhost:5000/api/transaction');
        setTransactions(data)
      } catch (error) {
        console.log(error)
      }
    };
    getTransactions();
  }, []);
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      {
        transactions.length === 0
          ? (<Typography className={classes.heading}>No transactions recorded</Typography>)
          : (
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>Transaction list</Typography>
              </AccordionSummary>
                {
                  transactions.map(transaction => (
                    <TransactionDetails transaction={transaction} key={transaction.id}/>
                  ))
                }
            </Accordion>
          )
      }
    </Grid>
  );
}