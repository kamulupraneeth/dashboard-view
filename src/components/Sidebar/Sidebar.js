import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  styled,
  Button,
  Box,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import Dashboard from "../Dashboard/Dashboard";
import "../../components/index.css";

const drawerWidth = 240;

const DrawerContainer = styled(Drawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: drawerWidth,
  },
}));

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const sidebarItems = [
    { label: "Dashboard", icon: <HomeIcon /> },
    { label: "Accounts", icon: <SettingsIcon /> },
    { label: "Payroll", icon: <InboxIcon /> },
    { label: "Reports", icon: <HomeIcon /> },
    { label: "Advisor", icon: <InboxIcon /> },
    { label: "Contacts", icon: <SettingsIcon /> },
  ];

  const handleItemClick = (item) => {
    setSelectedItem(item);
    <Dashboard />;
  };

  const [chartData, setChartData] = useState(getInitialChartData());

  function getInitialChartData() {
    // Implement logic to fetch or generate initial chart data
    // For simplicity, let's use the provided data for each chart item
    return {
      InvoiceData: [
        { label: "Older", value: 10 },
        { label: "Jan 01-08", value: 20 },
        { label: "Jan 09-16", value: 15 },
        { label: "Jan 17-24", value: 25 },
        { label: "Jan 25-31", value: 30 },
        { label: "Future", value: 18 },
      ],
      CashFlowData: [
        { value: 10, month: "August" },
        { value: 20, month: "September" },
        { value: 30, month: "October" },
        { value: 40, month: "November" },
        { value: 50, month: "December" },
        { value: 60, month: "January" },
      ],
      CheckAccountData: [100, 135, 190, 130, 80, 130, 80, 115, 135],
      AccountWatchlist: [
        { Sales: { value1: 1194.58, value2: 11418.29 } },
        { Advertising: { value1: 6879.02, value2: 9271.36 } },
        { Inventory: { value1: 4692.26, value2: 9768.09 } },
        { Entertainment: { value1: 0.0, value2: 0.0 } },
        { Product: { value1: 4652.1, value2: 2529.9 } },
      ],
    };
  }

  const handleRandomizeClick = () => {
    const newChartData = {
      ...chartData,
      InvoiceData: chartData.InvoiceData.map((entry) => ({
        ...entry,
        value: Math.floor(Math.random() * 50), // Replace with your logic to generate random values
      })),
      CashFlowData: chartData.CashFlowData.map((entry) => ({
        ...entry,
        value: Math.floor(Math.random() * 50), // Replace with your logic to generate random values
      })),
      CheckAccountData: chartData.CheckAccountData.map((entry) => [
        Math.floor(Math.random() * 50), // Replace with your logic to generate random values
      ]),
      AccountWatchlist: chartData.AccountWatchlist.map((item) => ({
        [Object.keys(item)[0]]: {
          value1: Math.floor(Math.random() * 50),
          value2: Math.floor(Math.random() * 50),
        },
      })),
    };
    setChartData(newChartData);
  };

  const handleRandomizeLineData = () => {
    const newData = {
      ...chartData,
      CheckAccountData: chartData.CheckAccountData.map((entry) => [
        Math.floor(Math.random() * 50), // Replace with your logic to generate random values
      ]),
    };
    setChartData(newData);
  };

  return (
    <div style={{ display: "flex", position: "relative" }}>
      <DrawerContainer variant="permanent">
        <div>
          <img
            src="https://mma.prnewswire.com/media/1920828/Assiduus_Global_Logo.jpg?p=facebook"
            alt="logo"
            style={{
              width: "200px",
              height: "80px",
              zIndex: "9999",
              position: "absolute",
              top: 0,
              left: 18,
              objectFit: "cover",
              padding: 18,
            }}
          />
        </div>
        <List className="custom_item">
          {sidebarItems.map((item, index) => (
            <ListItem
              button
              key={index}
              selected={selectedItem === item.label}
              onClick={() => handleItemClick(item.label)}
              style={{
                backgroundColor: selectedItem === item.label ? "#47b747" : "",
                color: selectedItem === item.label ? "#fff" : "",
                top: "5rem",
              }}
            >
              <ListItemIcon
                style={{ color: selectedItem === item.label ? "#fff" : "#333" }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </DrawerContainer>
      <div>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: -1.5,
            marginBottom: 2,
            marginRight: 5,
          }}
        >
          <Button variant="outlined" onClick={handleRandomizeClick}>
            Randomize Data
          </Button>
        </Box>
        <Dashboard
          data={chartData}
          handleRandomizeLineData={handleRandomizeLineData}
        />
      </div>
    </div>
  );
};
export default Sidebar;
