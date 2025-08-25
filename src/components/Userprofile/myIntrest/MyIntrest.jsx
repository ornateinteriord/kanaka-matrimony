<<<<<<< HEAD
import React, { useEffect, useState} from "react";
import { Box, Divider, Tab, Tabs, Typography } from "@mui/material";
=======
import { useEffect, useState } from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";
>>>>>>> 86e228c (New design)
import Accepted from "./insidepage/accepted/Accepted";
import Requests from "./insidepage/requests/Request";
import Sent from "./sent/Sent";
import TokenService from "../../token/tokenService";
<<<<<<< HEAD
import { useGetInterestCounts,} from "../../api/User/useGetProfileDetails";




const MyInterest = () => {
  const registrationNo = TokenService.getRegistrationNo()
=======
import { useGetInterestCounts } from "../../api/User";
import PageTitle from "../../UI/PageTitle";

const MyInterest = () => {
  const registrationNo = TokenService.getRegistrationNo();
>>>>>>> 86e228c (New design)
  const [tabValue, setTabValue] = useState(0);
  const [counts, setCounts] = useState({
    accepted: 0,
    requests: 0,
<<<<<<< HEAD
    sent: 0
  });

  const { data: countsData } = useGetInterestCounts(registrationNo);
  
 

 useEffect(() => {
  if (countsData) {
    setCounts({
      requests: countsData.received || 0,
      sent: countsData.sent || 0,
      accepted: countsData.accepted || 0
    });
  }
}, [countsData]);

const handleTabChange = (event, newValue) => {
  setTabValue(newValue);
};

 
=======
    sent: 0,
  });

  const { data: countsData, refetch: refetchCounts } =
    useGetInterestCounts(registrationNo);

  useEffect(() => {
    if (countsData) {
      setCounts({
        requests: countsData.received || 0,
        sent: countsData.sent || 0,
        accepted: countsData.accepted || 0,
      });
    }
  }, [countsData]);

  const handleTabChange = (event, newValue) => {
    if (event && typeof event.preventDefault === "function") {
      event.preventDefault();
    }
    setTabValue(newValue);
  };
>>>>>>> 86e228c (New design)

  const renderContents = () => {
    switch (tabValue) {
      case 0:
<<<<<<< HEAD
        return <Accepted  />;
      case 1:
        return <Requests />;
      case 2:
        return <Sent  />;
=======
        return <Accepted />;
      case 1:
        return <Requests refetchCounts={refetchCounts} />;
      case 2:
        return <Sent refetchCounts={refetchCounts} />;
>>>>>>> 86e228c (New design)
      default:
        return null;
    }
  };

  return (
<<<<<<< HEAD
    <Box sx={{ padding: 0, backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
      {/* Header */}
      <Box sx={{ marginBottom: 2 }}>
        <Typography variant="h5" fontWeight={900} color="#34495e">
          Interested Profiles
        </Typography>
        <Divider sx={{ marginTop: 1 }} />
      </Box>

      {/* Tabs Section */}
=======
    <Box
      sx={{
        p: { xs: 0, sm: 3, md: 2 },
        minHeight: "100vh",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontSize: { xs: "21px", sm: "25px" },
          color: "#5e0476",
          mt: { xs: 1 },
          mb: { xs: 1, md: 2 },
        }}
        fontWeight="500px"
      >
        Interested Profiles
      </Typography>

>>>>>>> 86e228c (New design)
      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        variant="scrollable"
        scrollButtons="auto"
<<<<<<< HEAD
        sx={{ marginBottom: 2 }}
=======
        sx={{
          mb: { xs: 1, sm: 2 },
          "& .MuiTab-root": {
            textTransform: "capitalize",
            fontWeight: 600,
            color: "#444",
            "&:hover": {
              backgroundColor: "rgba(94, 4, 118, 0.1)",
              color: "#5e0476",
            },
          },
          "& .Mui-selected": {
            color: "#5e0476 !important",
          },
          "& .MuiTabs-indicator": {
            backgroundColor: "#5e0476",
          },
        }}
>>>>>>> 86e228c (New design)
      >
        <Tab label={`Accepted (${counts.accepted})`} />
        <Tab label={`Requests (${counts.requests})`} />
        <Tab label={`Sent (${counts.sent})`} />
      </Tabs>

<<<<<<< HEAD
      {/* Content Section */}
      <Box sx={{ padding: 0, backgroundColor: "#fff", borderRadius: 2, boxShadow: 1, color: "black" }}>
=======
      <Box
        sx={{
          padding: 0,
          backgroundColor: "#fff",
          borderRadius: 2,
          boxShadow: 1,
          color: "black",
        }}
      >
>>>>>>> 86e228c (New design)
        {renderContents()}
      </Box>
    </Box>
  );
};

<<<<<<< HEAD
export default MyInterest;
=======
export default MyInterest;
>>>>>>> 86e228c (New design)
