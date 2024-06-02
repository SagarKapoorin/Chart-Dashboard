import { Menu,MenuItem,ProSidebar } from "react-pro-sidebar";
import { useState,useEffect } from "react";
import userImage from '../../assets/user.png';
import LineAxisIcon from '@mui/icons-material/LineAxis';
import 'react-pro-sidebar/dist/css/styles.css';
import { Box, IconButton, Typography, useTheme , useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
      <MenuItem
        active={selected === title}
        style={{
          color: colors.grey[100],
        }}
        onClick={() => setSelected(title)}
        icon={icon}
      >
        <Typography>{title}</Typography>
        <Link to={to} />
      </MenuItem>
    );
  };

const Sidebar=()=>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);   // collasping sidebar
    const [selected, setSelected] = useState("Dashboard");   //to know page on which we are
    const isSmallScreen = useMediaQuery("(max-width:1090px)");
    useEffect(() => {
      if (isSmallScreen) {
        setIsCollapsed(true);
      }
    }, [isSmallScreen]);
    return(
        <Box
        sx={{ //changing pro sidebar css 
          "& .pro-sidebar-inner": {
            background: `${colors.primary[400]} !important`,
            height:"950px !important",
          },
          "& .pro-icon-wrapper": {
            backgroundColor: "transparent !important",
          },
          "& .pro-inner-item": {
            padding: "5px 35px 5px 20px !important",
          },
          "& .pro-inner-item:hover": {
            color: "red !important",
          },
          "& .pro-menu-item.active": {
            color: `red !important`,
          },
        }}
      >
        <ProSidebar collapsed={isCollapsed} >
          <Menu >
            {/* LOGO AND MENU ICON */}
            <MenuItem
            
              onClick={() => setIsCollapsed(!isCollapsed)  }
              icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}

              style={{
                margin: "10px 0 20px 0",
                color: colors.grey[100],
              }}
            >
              {!isCollapsed && (
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  ml="15px"
                >
                  <Typography variant="h3" color={colors.grey[100]}>
                    ADMINIS
                  </Typography>
                  <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                    <MenuOutlinedIcon />
                  </IconButton>
                </Box>
              )}
            </MenuItem>
  
            {!isCollapsed && (
              <Box mb="25px">
                {/* need to add image name  and username if not collapsed */}
                <Box display="flex" justifyContent="center" alignItems="center">
                  <img
                    alt="profile-user"
                    width="100px"
                    height="100px"
                    src={userImage}
                    style={{ cursor: "pointer", borderRadius: "50%" }}
                  />
                </Box>
                <Box textAlign="center">
                  <Typography
                    variant="h2"
                    color={colors.grey[100]}
                    fontWeight="bold"
                    sx={{ m: "10px 0 10px 0" }}
                  >
                    Sagar
                  </Typography>
                  <Typography variant="h5" color={colors.greenAccent[300]}   fontWeight="bold">
                    VIP Admin
                  </Typography>
                </Box>
              </Box>
            )}
  
            <Box paddingLeft={isCollapsed ? undefined : "10%"}>
              <Item
                title="Dashboard"
                to="/"
                icon={<HomeOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              
              />
  
              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" , fontSize:"18px" ,fontWeight:"900" }}
              >
                Pages
              </Typography>
              <Item
                title="Profile Form"
                to="/form"
                icon={<PersonOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="FAQ Page"
                to="/faq"
                icon={<HelpOutlineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
  
              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" , fontSize:"18px" ,fontWeight:"900" }}
              >
                Charts
              </Typography>
              <Item
                title="Bar Chart"
                to="/bar"
                icon={<BarChartOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Pie Chart"
                to="/pie"
                icon={<PieChartOutlineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Line Chart"
                to="/line"
                icon={<TimelineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
               <Item
                title="Line Chart-2"
                to="/port_line"
                icon={<LineAxisIcon />}
                selected={selected}
                setSelected={setSelected}
              />
             
            </Box>
          </Menu>
        </ProSidebar>
      </Box>
    );
  };
  
  export default Sidebar;