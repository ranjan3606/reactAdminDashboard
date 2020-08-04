
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Divider from '@material-ui/core/Divider';
import Search from './Search'
import Days from './Days'
import Data from './Data'


const useStyles = makeStyles((theme) => ({
  root: {
    height: '433px',
    margin: '0px 80px 10px 150px', 
    paddingBottom: '30px',
    alignContent: 'center',
  },
  media: {
    height: 140,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
      
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    backgroundColor: '#f6f6f6',
    [theme.breakpoints.up('sm')]: {
      width: '100%',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function MediaCard() {
  const classes = useStyles();

  return (
    <div>
    <Card className={classes.root}>
       <div lign="center">
          <Search />
        </div>
        <Divider variant="middle" />
        <div lign="center">
          <Days />
        </div>
        <CardActionArea style={{marginTop: '20px',}}>
          <Data />
        </CardActionArea>
    </Card>
    </div>
  );
}
