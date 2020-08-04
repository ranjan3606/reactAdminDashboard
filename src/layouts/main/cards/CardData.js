import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import Video  from '../../../icons/video'

import Trash  from '../../../icons/trash-2'
import User1 from '../../../img/users.jpg'
import User2 from '../../../img/user1.jpg'
import User3 from '../../../img/user2.jpg'



const useStyles = makeStyles({
  root: {
    display:'flex',
    margin: '10px',
    minWidth: 250,
    background: '#fff',
    height: '100px',
    marginTop: '10px'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 10,
  },
  pos: {
    marginTop: '5px',
    display: 'flex'
  },
  pageUp: {
      position: 'relative',
      zIndex: 1,
      left: '20px'
  }
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <div className={classes.root} >
        <Card className="borderNone" style={{marginLeft: '10px',}}>
            <CardContent style={{marginRight: '20px'}}>
                <Typography  color="textSecondary" gutterBottom>
                  <div className="flex">
                    <div className="clr"></div>Session #1
                  </div>  
                </Typography>
                <Typography className={classes.title} overflow="visible">
                10:00 PM - 12:00 PM | Seminar Hall #2
                </Typography>
                <div style={{display: 'flex'}}>
                  <Typography className={classes.pos} color="textSecondary">
                  <Avatar alt="Travis Howard" src={User1} style={{height: '25px', width: '25px'}} />
                    <Avatar alt="Travis Howard" src={User2}
                        style={
                            {height: '25px', width: '25px',position: 'relative', zIndex: 1, left: '-10px'}
                            } />
                    <Avatar alt="Travis Howard" src={User3} style={
                        {height: '25px', width: '25px',position: 'relative', zIndex: 1, left: '-20px'}
                        } />
                      <Avatar style={
                          {height: '25px', width: '25px',position: 'relative', zIndex: 1, left: '-30px', fontSize: '10px'}
                          }>+3</Avatar>
                  </Typography>
                  <Typography>
                    <div >
                      <Video style={{color: '#E1E1F1',height: '20px',marginLeft: '20px',marginTop:'5px'}} />
                      <Trash style={{color: 'orange',height: '20px',marginTop:'5px'}} />
                        </div>
                  </Typography>      
                </div>
            </CardContent>   
        </Card>
        <Card style={{marginLeft: '20px'}}> 
            <CardContent style={{marginRight: '20px'}}>
                <Typography  color="textSecondary" gutterBottom>
                Session #2
                </Typography>
                <Typography className={classes.title} overflow="visible">
                10:00 PM - 12:00 PM | Seminar Hall #2
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  <Avatar alt="Travis Howard" src={User1} style={{height: '25px', width: '25px'}} />
                  <Avatar alt="Travis Howard" src={User2}
                        style={
                            {height: '25px', width: '25px',position: 'relative', zIndex: 1, left: '-10px'}
                            } />
                    
                </Typography>
            </CardContent>   
        </Card>
        <Card style={{marginLeft: '20px'}}> 
            <CardContent style={{marginRight: '20px'}}>
                <Typography  color="textSecondary" gutterBottom>
                Session #3
                </Typography>
                <Typography className={classes.title} overflow="visible">
                10:00 PM - 12:00 PM | Seminar Hall #2
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                <Avatar alt="Travis Howard" src={User1} style={{height: '25px', width: '25px'}} />
                  <Avatar alt="Travis Howard" src={User2}
                        style={
                            {height: '25px', width: '25px',position: 'relative', zIndex: 1, left: '-10px'}
                            } />
                </Typography>
            </CardContent>   
        </Card>

        <div style={
            {
            position: 'relative',
            left: '-20px',
            top: '40px',
            marginLeft: '40px', 
            border: 'none', 
             
            }
            }> 
            <ControlPointIcon style={{color: 'orange',}} />
        </div>
    </div>
  );
}

