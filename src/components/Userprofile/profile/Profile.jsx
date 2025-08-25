import React, { useState } from "react";
<<<<<<< HEAD
import { 
  Box, 
  Divider, 
  Tab, 
  Tabs, 
  Snackbar, 
  Alert, 
  Typography, 
  Paper 
} from "@mui/material";
import About from '../profile/about/About'
=======
import {
  Box,
  Tab,
  Tabs,
  Snackbar,
  Alert,
  Typography,
  Paper,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import About from "../profile/about/About";
>>>>>>> 86e228c (New design)
import Education from "../profile/eduction/Education";
import FamilyReligious from "../profile/familyReligious/FamilyReligious";
import LifeStyle from "../profile/lifeStyle/LifeStyle";
import Others from "../profile/others/Others";
import ParentsPrefer from "../profile/parentPreference/ParentsPrefer";
import Photos from "../profile/photo/Photos";
import PrivacySettings from "../profile/privacySettings/PrivacySettings";
<<<<<<< HEAD


=======
import PageTitle from "../../UI/PageTitle";
>>>>>>> 86e228c (New design)

const Profile = () => {
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);
<<<<<<< HEAD
=======
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // true when screen is small
>>>>>>> 86e228c (New design)

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderContent = () => {
    switch (value) {
<<<<<<< HEAD
      case 0: return <About render={setOpen} />;
      case 1: return <FamilyReligious render={setOpen} />;
      case 2: return <Education render={setOpen} />;
      case 3: return <Photos />;
      case 4: return <LifeStyle render={setOpen} />;
      case 5: return <ParentsPrefer />;
      case 6: return <Others />;       
      case 7: return <PrivacySettings />;
      default: return null;
    }
  };

  return (
    <Box
    sx={{
      bgcolor: 'background.paper',
      borderRadius: 2,
      boxShadow: 1,
      p: { xs: 1, sm: 3, md: 4 },
      maxWidth: 1200,
      justifySelf:{md:'center'},
      // mx: 'auto',
      width: { 
        xs: '40%',   // For very small screens (like iPhone SE)
        sm: '90%',   // For small screens (like iPhone 15/16 in portrait)
        md: '85%',   // For medium screens (like iPhone 15/16 in landscape)
        lg: '100%'   // For larger screens
      },
      '@media (min-width: 600px) and (max-width: 899px)': {
        // Specific adjustments for iPhone 15/16 in landscape
        width: '81%',
      },
      '@media (min-width: 375px) and (max-width: 428px)': {
        // Specific adjustments for iPhone 15/16 in portrait
        width: '44%',
      }
    }}
  >        
            <Typography variant="h5" fontWeight={700} mt={0}  color="#34495e">
              My Profile
            </Typography>
            {/* <Divider /> */}
          

          {/* Snackbar for success messages */}
          <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="success"
              variant="filled"
              sx={{ width: "100%" }}
            >
              Updated Successfully
            </Alert>
          </Snackbar>

          {/* Tabs and content */}
          <Paper elevation={1} sx={{ p: 0}} >
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="profile tabs"
              textColor="primary"
              indicatorColor="primary"
              // sx={{ mb: 0 }}
            >

              <Tab label="About" sx={{fontWeight:700,"&:hover": {
            backgroundColor: "transparent", 
            
          },}} />
              <Tab label="Family & Religious" sx={{fontWeight:700,"&:hover": {
                 backgroundColor: "transparent", 
            
          },}} />
              <Tab label="Education" sx={{fontWeight:700,"&:hover": {
            backgroundColor: "transparent", 
            
          },}}/>
              <Tab label="Photos" sx={{fontWeight:700,"&:hover": {
            backgroundColor: "transparent", 
            
          },}}/>
              <Tab label="LifeStyle" sx={{fontWeight:700,"&:hover": {
            backgroundColor: "transparent", 
            
          },}}/>
              <Tab label="Parents Preference" sx={{fontWeight:700,"&:hover": {
            backgroundColor: "transparent", 
            
          },}}/>
              <Tab label="Others" sx={{fontWeight:700,"&:hover": {
            backgroundColor: "transparent", 
            
          },}}/>
              <Tab label="Privacy Setting" sx={{fontWeight:700,"&:hover": {
            backgroundColor: "transparent", 
            
          },}}/>
            </Tabs>
            <Box  >{renderContent()}</Box>
          </Paper>
        </Box>
    //   </Box>
    // </Box>
=======
      case 0:
        return <About render={setOpen} />;
      case 1:
        return <FamilyReligious render={setOpen} />;
      case 2:
        return <Education render={setOpen} />;
      case 3:
        return <Photos />;
      case 4:
        return <LifeStyle render={setOpen} />;
      case 5:
        return <ParentsPrefer />;
      case 6:
        return <Others />;
      case 7:
        return <PrivacySettings />;
      default:
        return null;
    }
  };

  const tabs = [
    "About",
    "Family & Religious",
    "Education",
    "Photos",
    "LifeStyle",
    "Partner's Preference",
    "Others",
    "Privacy Setting",
  ];

  return (
    <Box
      sx={{
        borderRadius: 2,
        p: { xs: 0, sm: 3, md: 2 },
        maxWidth: "100%",
        justifySelf: { md: "start" },
        width: {
          xs: "40%",
          sm: "90%",
          md: "85%",
          lg: "100%",
        },
        "@media (min-width: 600px) and (max-width: 899px)": {
          width: "81%",
        },
        "@media (min-width: 375px) and (max-width: 428px)": {
          width: "44%",
        },
      }}
    >
      <Typography
        sx={{
          fontSize: {
            xs: "20px",
            md: "25px",
            color: "#5e0476",
            textAlign: "left",
          },
          mb:1.5
        }}
      >
        My Profile
      </Typography>

      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Updated Successfully
        </Alert>
      </Snackbar>

      {isSmallScreen ? (
        <Box sx={{ p: "0px 0px 20px 0px", background: "transparent" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="profile tabs"
            sx={{
              "& .MuiTabs-indicator": {
                backgroundColor: "#5e0476",
              },
              "& .MuiTab-root": {
                fontWeight: 500,
                "&.Mui-selected": {
                  color: "#5e0476",
                },
                "&:hover": {
                  backgroundColor: "transparent",
                  color: "#5e0476",
                },
              },
            }}
          >
            {tabs.map((tab) => (
              <Tab key={tab} label={tab} />
            ))}
          </Tabs>
          <Box>{renderContent()}</Box>
        </Box>
      ) : (
        <Paper elevation={2} sx={{ p: "10px 0px" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="profile tabs"
            textColor="primary"
            indicatorColor="primary"
            sx={{
              "& .MuiTabs-indicator": {
                backgroundColor: "#5e0476",
              },
              "& .Mui-selected": {
                color: "#5e0476 !important",
              },
              "& .MuiTab-root:hover": {
                color: "#5e0476",
              },
            }}
          >
            {tabs.map((tab) => (
              <Tab
                key={tab}
                label={tab}
                sx={{
                  fontWeight: 500,
                  "&:hover": { backgroundColor: "transparent" },
                }}
              />
            ))}
          </Tabs>
          <Box>{renderContent()}</Box>
        </Paper>
      )}
    </Box>
>>>>>>> 86e228c (New design)
  );
};

export default Profile;
