import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    fontFamily: 'Century Gothic',
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '19px',
    letterSpacing: '0em',
    padding: '8px 0px 8px',
    display: 'flex',
    alignItems: 'center',
    width: '330px',
    height: '47px',
    borderRadius: '20px',
    border: '1px solid #545454',
    background: '#FFFFFF',
    marginTop: '14px',
  },
  textField: {
    border: 'none',
    boxShadow: 'none',
    borderRadius: 0, // If you want to remove rounded borders
    width: '100%',
  },
}));

const BorderlessTextField = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <InputBase
        placeholder="Enter your text"
        className={classes.textField}
      />
    </div>
  );
};

export default BorderlessTextField;
