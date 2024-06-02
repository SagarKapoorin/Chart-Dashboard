import { Box, Button, IconButton, Typography, useTheme ,useMediaQuery } from "@mui/material";
import { tokens } from "../../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/header.jsx";
import LineChart from "../../components/Line.jsx";
import BarChart from "../../components/bar.jsx";
import StatBox from "../../components/Statbox.jsx";
import ProgressCircle from "../../components/ProgressCircle.jsx";
import WebsiteTrafficStats from "../../components/stat.jsx";


const Dashboard=()=>{
    const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isSmallScreen = useMediaQuery("(max-width:1090px)");
  const isSuperSmallScreen =useMediaQuery("(max-width:883px)")
  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(6, 1fr)"
        gridAutoRows="140px"
        gap={isSmallScreen?"5px":"20px"}
      >
        {/* ROW 1 */}
        <Box
           gridColumn={isSuperSmallScreen ? "span 5" : "span 3"} 
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12,361"
            subtitle="Emails Sent"
            progress="0.75"
            increase="+14%"
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
           gridColumn={isSuperSmallScreen ? "span 10" : "span 3"} // Change grid column span for super small screens
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="431,225"
            subtitle="Sales Obtained"
            progress="0.50"
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
       
  
        <Box
           gridColumn={isSuperSmallScreen ? "span 5" : "span 3"} // Change grid column span for super small screens
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="1,325,134"
            subtitle="Traffic Received"
            progress="0.80"
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn={isSuperSmallScreen ? "span 12" : "span 1"} // Change grid column span for super small screens
          gridRow="span 0"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
            gridColumn={isSuperSmallScreen ? "span 12" : "span 1"} // Change grid column span for super small screens
          gridRow="span 2"
          >
            <Box  >
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Revenue Generated
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                $59,342.32
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
        
        </Box>
       

        {/* ROW 3 */}
        <Box
           gridColumn={isSuperSmallScreen ? "span 7" : "span 4"} // Change grid column span for super small screens
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Campaign
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              $48,352 revenue generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box>
       
        <Box
           gridColumn={isSuperSmallScreen ? "span 12" : "span 4"} // Change grid column span for super small screens
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="10px"
        
        >
           <WebsiteTrafficStats totalVisits={90} averageVisitsPerDay={9} increasePercentage={9}/>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;