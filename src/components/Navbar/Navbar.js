import React from 'react';
import logo from '../assets/images/logo.svg';
import person from '../assets/images/person.jpg';
import NotificationsIcon from '@mui/icons-material/Notifications';
import classes from './Navbar.module.css';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import UserMenu from './UserMenu';
import InputAdornment from '@mui/material/InputAdornment';
// import NotificationsIcon from '@mui/icons-material/Notifications';

const Navbar = () => {
  return (
    <>
    <AppBar position="static" style={{backgroundColor:'#fff',padding:10,marginBottom:30}}>
      <Toolbar style={{marginLeft:'auto'}}>
      <TextField
      variant="outlined"
      style={{backgroundColor:'#f6f7f9'}}
      className='custom_input'
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <IconButton>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
        <IconButton style={{marginLeft:16,marginRight:16}}>
          <NotificationsIcon />
        </IconButton>
        <UserMenu/>
        {/* <Button color="inherit">Home</Button>
        <Button color="inherit">About</Button>
        <Button color="inherit">Contact</Button> */}
      </Toolbar>
    </AppBar>
    </>
  )
}

export default Navbar
