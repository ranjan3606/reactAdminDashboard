import React from 'react';
import clsx from 'clsx';
import { makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar'

import HLogo from '../../img/svg/Hlogo.png'
import Reception from '../../img/svg/Reception.svg'
import Agenda from '../../img/svg/Agenda.svg'
import Attendees from '../../img/svg/Attende.svg'
import Exhibitor from '../../img/svg/exhibitor.svg'
import Attendeeses from '../../img/svg/Attendee.svg'
import Talk from '../../img/svg/partners.svg'
import Box from '../../img/svg/box.svg'
import Meeting from '../../img/svg/meeting.svg'
import Partneer from '../../img/svg/partner.svg'
import Statics from '../../img/svg/Attendees.svg'
import Settings from '../../img/svg/exhibitors.svg'



import MainPage from '../main/Main'


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: '10px 0 5px -2px #888',
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer - 1,
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
  },
  menuButton: {
    position: 'absolute',
    right: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
  },
  drawerClose: {
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 2,
    },
  },
  toolbar: {
    height:'30px',
    width: '30px',
    display: 'flex',
    marginLeft: '10px',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '25px'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    position: 'absolute',
    top: '0px'
  },
  logo:{
      paddingLeft: '50px'
  },
  icons: {
    height:'30px',
    width:'30px'
  }
  
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const [open] = React.useState(false);



  return (
    <div className={classes.root}>
      <CssBaseline />
      
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton >
            <Avatar src={HLogo} class={classes.icons} />
          </IconButton>
        </div>
        <div className={classes.toolbar}>
          <IconButton >
            <Avatar src={Reception} class={classes.icons} />
          </IconButton>
        </div>
        <div className={classes.toolbar}>
          <IconButton >
            <Avatar src={Agenda} class={classes.icons} />
          </IconButton>
        </div>
        <div className={classes.toolbar}>
          <IconButton >
            <Avatar src={Attendees} class={classes.icons} />
          </IconButton>
        </div>
        <div className={classes.toolbar}>
          <IconButton >
            <Avatar src={Exhibitor} class={classes.icons} />
          </IconButton>
        </div>
        <div className={classes.toolbar}>
          <IconButton >
            <Avatar src={Attendeeses} class={classes.icons} />
          </IconButton>
        </div>
        <div className={classes.toolbar}>
          <IconButton >
            <Avatar src={Talk} class={classes.icons} />
          </IconButton>
        </div>
        <div className={classes.toolbar}>
          <IconButton >
            <Avatar src={Box} style={{height: '30px', width: '30px'}} />
          </IconButton>
        </div>
        <div className={classes.toolbar}>
          <IconButton >
            <Avatar src={Meeting} class={classes.icons} />
          </IconButton>
        </div>
        <div className={classes.toolbar}>
          <IconButton >
            <Avatar src={Partneer} class={classes.icons} />
          </IconButton>
        </div>
        <div className={classes.toolbar}>
          <IconButton >
            <Avatar src={Statics} class={classes.icons} />
          </IconButton>
        </div>
        <div className={classes.toolbar}>
          <IconButton >
            <Avatar src={Settings} class={classes.icons} />
          </IconButton>
        </div>

        
        
      </Drawer>

      {/* Center content */}
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <h2 style={{marginLeft: '150px',}}>Sessions</h2>
            <MainPage />
      </main>
    </div>
  );
}
