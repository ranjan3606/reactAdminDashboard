import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Bell from '../../icons/bell'
import Avatar from '@material-ui/core/Avatar';
import User from '../../img/user1.jpg'
import Logo from '../../img/logo.png'


const useStyles = makeStyles((theme) => ({
  grow: {
    width: '100% auto',
    flexGrow: 1,
    backgroundColor: '#fff'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  searchHead: {
    display: 'flex',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,   
  },
  logo: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    color: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  userText: {
    fontSize: '14px'
  },
  arrow:{
      marginTop: '5px'
  },
  color:{
    borderRadius: 0,
    borderLeft: '1px solid #f6f6f6',
    color: '#212121',
    height: '65px',
    right:'0%'
  },
  tops: {
      marginTop: '40px'
  },
  sectionMobile: {
    display: 'flex',
    color: '#000',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

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

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu className={classes.tops}
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
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
      <MenuItem>
        <IconButton className="btns" aria-label="show 4 new mails" color="inherit">
          <Button >GO LIVE</Button>
        </IconButton>
      </MenuItem>
      <IconButton aria-label="show 4 new mails" color="inherit">
        <Button className="buttons">UPGRADE</Button>
      </IconButton>
      <IconButton aria-label="show 17 new notifications">
        <Bell />
     </IconButton>

      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"

        >
          <MenuItem />
        </IconButton>
        <span className={classes.userText}>Mitchel Johnson</span>
        <ArrowDropDownIcon />
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow} fixed id="fullWidth">
      <div position="fixed" className={classes.grow}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          
          <div className={classes.searchHead}>
            <div className={classes.logo}>
                <Avatar src={Logo} style={{width: '150px'}} />
               
            </div>
            <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit" style={{position:'relative', left:'150px'}}>
              <span>The August Fest 219</span>
            </IconButton>
            </div>
          </div>
          
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
    
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Button>GO LIVE</Button>
            </IconButton>

            <IconButton aria-label="show 4 new mails" color="inherit">
              <Button className="buttons">UPGRADE</Button>
            </IconButton>

            <IconButton aria-label="show 17 new notifications" className={classes.color}>
                <Bell />
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="#212121"
              className={classes.color}
            >
              <Avatar src={User} style={{marginRight: '5px'}} />
              <span className={classes.userText}>Mitchel Johnson</span><ArrowDropDownIcon />
              
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </div>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
