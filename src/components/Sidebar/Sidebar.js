import React, { useState } from 'react';
import { Drawer,List,ListItem,ListItemText,ListItemIcon,styled} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import Dashboard from '../Dashboard/Dashboard';
import '../../components/index.css';

const drawerWidth = 240;

const DrawerContainer = styled(Drawer)(({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width: drawerWidth,
    },
  }));


const Sidebar = () => {

    const [selectedItem,setSelectedItem] = useState(null);

    const sidebarItems = [
        { label: 'Dashboard', icon: <HomeIcon /> },
        { label: 'Accounts', icon: <SettingsIcon /> },
        { label: 'Payroll', icon: <InboxIcon /> },
        { label: 'Reports', icon: <HomeIcon /> },
        { label: 'Advisor', icon: <InboxIcon /> },
        { label: 'Contacts', icon: <SettingsIcon /> },
      ];

const handleItemClick = (item) => {
    setSelectedItem(item);
    <Dashboard/>
}
 
  return (
    <div style={{ display: 'flex',position:'relative' }}>
    <DrawerContainer 
    variant='permanent' 
    >
      <div><img src="https://mma.prnewswire.com/media/1920828/Assiduus_Global_Logo.jpg?p=facebook" alt="logo" style={{width:'200px',height:'80px',zIndex:'9999',position:'absolute',top:0,left:18,objectFit:'cover',padding:18}}/></div>
        <List className='custom_item'>
            {
                sidebarItems.map((item,index)=>(
                    <ListItem button 
                        key={index} 
                        selected={selectedItem === item.label} 
                        onClick={()=>handleItemClick(item.label)}
                        style={{
                            backgroundColor : selectedItem === item.label ? '#47b747' : '',
                            color: selectedItem === item.label ? '#fff' : '',
                            top:'5rem'
                        }}
                    >
                        <ListItemIcon style={{color : selectedItem === item.label ? '#fff' : '#333'}}>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.label}/>
                    </ListItem>
                ))
            }
            
        </List>
   </DrawerContainer>
    <div>
     <Dashboard/>
    </div>
  </div>
   
  )
}
export default Sidebar;
