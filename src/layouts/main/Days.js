import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ArrowLeft from '../../icons/arrow-left-circle'
import ArrowRight from '../../icons/arrow-right-circle'
import ArrowDown from '../../icons/arrow-down'
import Filter from '../../icons/filter'
import Calender from '../../icons/calendar'
import Trash from '../../icons/trash-2'
import Grid from '@material-ui/core/Grid';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';


import Switch from './Switch'

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },

  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    background: 'yellow',
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    background: '',
    color: '#fff',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const [alignment, setAlignment] = React.useState('left');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const renderMenu = (
    <Menu>
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <IconButton aria-label="show 4 new mails" color="inherit">
          <Switch />
      </IconButton>
      <MenuItem>
        <IconButton aria-label="show 17 new notifications" color="inherit">
          <Filter style={{color: '#FA8072'}} /> <span style={{position: 'relative', left: '5px'}}> Filter</span>
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 17 new notifications" color="inherit">
          <Calender style={{color: '#FA8072'}} /> <span style={{position: 'relative', left: '5px'}}> Calender</span>
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 17 new notifications" color="inherit">
          <Trash style={{color: '#FA8072'}} /> <span style={{position: 'relative', left: '5px'}}> Trash</span>
        </IconButton>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow} >
      <div position="static" className={classes.grow}>
        <Toolbar>
          <div className={classes.search}>
            <div className="">
              <ArrowLeft style={{color: 'gray'}} />
            </div>
          </div>

          <div className={classes.search}>
            <Grid item>
              <ToggleButtonGroup size="small" value={alignment} exclusive onChange={handleChange}>
                <ToggleButton value="left" overflow="hidden">
                  <span>Day 1</span> 5th Jan 2020
                </ToggleButton>
                <ToggleButton value="center" className="hide">
                  <span>Day 2</span>
                </ToggleButton>
                <ToggleButton value="right" className="hide">
                <span>Day 3</span>
                </ToggleButton>
                <ToggleButton value="justify" className="hide">
                <span>Day 4</span>
                </ToggleButton>
              </ToggleButtonGroup>
            </Grid>
          </div>

          <div className={classes.search}>
            <div className="">
              <ArrowRight style={{color: 'gray'}} />
            </div>
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit">
                <Switch />
            </IconButton>
          <div className="borders">
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Filter style={{color: '#FA8072'}} />
            </IconButton>
            </div>
            <div className="borders">
              <IconButton aria-label="show 17 new notifications" color="inherit">
                <Calender style={{color: '#FA8072'}} />
              </IconButton>
            </div>
            <div className="borders">
              <IconButton aria-label="show 17 new notifications" color="inherit">
                <Trash style={{color: '#FA8072'}} />
              </IconButton>
            </div>
            
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <ArrowDown />
            </IconButton>
          </div>
        </Toolbar>
      </div>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}