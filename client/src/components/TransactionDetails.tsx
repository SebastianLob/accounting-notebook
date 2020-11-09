import React from 'react'
import AccordionDetails from '@material-ui/core/AccordionDetails';
import {Theme, createStyles, makeStyles} from '@material-ui/core/styles';
import {Button, Grid, Typography} from '@material-ui/core';
import Popover from '@material-ui/core/Popover';
const TransactionDetails = (props: any) => {
  const transaction = props.transaction;

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      typography: {
        padding: theme.spacing(2),
      },
    }),
  );
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);
  const classes = useStyles();

  return (
    <AccordionDetails>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Button
          variant="outlined"
          color={transaction.type === 'credit' ? 'primary' : 'secondary'}
          onClick={handleClick}
        >
          {transaction.type}
        </Button>
        <Button 
          variant="outlined"
          color={transaction.type === 'credit' ? 'primary' : 'secondary'}
          onClick={handleClick}
        >
          {transaction.amount}
        </Button>
        <Popover
          id={transaction.id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          style={{padding: 15}}
        >
          <Typography className={classes.typography}>
            ID: {transaction.id}<br/>
            Type: {transaction.type}<br/>
            Amount: ${transaction.amount}<br/>
            Date: {transaction.effectiveDate}
          </Typography>
        </Popover>
      </Grid>
    </AccordionDetails>
  )
}

export default TransactionDetails
