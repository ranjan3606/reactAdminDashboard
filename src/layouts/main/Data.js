import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import CardData from './cards/CardData'
import CardData1 from './cards/CardData1'



const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    top: '-30px',
    margin: '0px 30px 30px 30px',
    maxWidth: '100%',
    maxHeight: '250px'
  },
  arrowLeft:{
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
      backgroundColor:'gray',
      height: '140px',
      width: '100px !important'
  }
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [alignment, setAlignment] = React.useState('left');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
      <div className={classes.root}>
          <div className="box arrow-bottom">
              <h4>TRACK NAME</h4>
          </div>
        <Card>
            <ToggleButtonGroup 
                value={alignment}
                style={{height:'125px'}}
                exclusive
                onChange={handleAlignment}
                aria-label="text alignment"
                >
                <div className={classes.arrowLeft}>
                    <h4 style={{color: '#fff'}}>10:00 PM</h4>
                </div>
                <CardData />
            </ToggleButtonGroup>
        </Card>
        <Card>
            <ToggleButtonGroup 
                value={alignment}
                exclusive
                style={{height:'125px'}}
                onChange={handleAlignment}
                aria-label="text alignment"
                >
                <div className={classes.arrowLeft}>
                    <h4 style={{color: '#fff'}}>11:00 PM</h4>
                </div>
                <CardData1 />
            </ToggleButtonGroup>
        </Card>
    </div>
  );
}
