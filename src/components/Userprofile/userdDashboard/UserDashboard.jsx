<<<<<<< HEAD
import React, { useState, useEffect } from "react";
=======
import { useEffect, useState } from "react";
>>>>>>> 86e228c (New design)
import {
  Box,
  Divider,
  Stack,
  Typography,
<<<<<<< HEAD
  CircularProgress,
  Alert,
  Button,
  Pagination,
  useMediaQuery,
  Grid,
} from "@mui/material";
import { toast } from "react-toastify";
import TokenService from "../../token/tokenService";

import HomeUserTable from "../../userupgrade/HomeUserTable";
import { useGetMemberDetails } from "../../api/User/useGetProfileDetails";
import { LoadingComponent } from "../../../App";

const UserDashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 3;
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.between("sm", "md"));
=======
  Pagination,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { toast } from "react-toastify";
import TokenService from "../../token/tokenService";
import HomeUserTable from "../../userupgrade/HomeUserTable";
import { useGetConnections, useGetMemberDetails } from "../../api/User";
import { LoadingComponent, } from "../../../App";
import { isSilverOrPremiumUser, LoadingTextSpinner } from "../../../utils/common";
import ProfileDialog from "../ProfileDialog/ProfileDialog";
import UserCard from "../../common/UserCard";

const UserDashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [currentTab, setCurrentTab] = useState(0);
  const itemsPerPage = 8; 
 const theme = useTheme();
const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
>>>>>>> 86e228c (New design)
  const registerNo = TokenService.getRegistrationNo();
  
  const {
    data: userProfile,
<<<<<<< HEAD
    isLoading,
    isError,
    error,
  } = useGetMemberDetails(registerNo);

  useEffect(() => {
    if (isError) {
      toast.error(error.message);
    }
  }, [isError, error]);

  // Dummy array to mimic profile card layout (replace later)
  const dummyProfiles = []; // keep empty or fill with mock data if needed

  const currentCards = dummyProfiles.slice(
    (currentPage - 1) * cardsPerPage,
    currentPage * cardsPerPage
  );
=======
    isLoading: isLoadingProfile,
    isError: isProfileError,
    error: profileError,
  } = useGetMemberDetails(registerNo);

  const {
    mutate: fetchConnections,
    data: connectionsData = {},
    isPending: isLoadingConnections,
    isError: isConnectionsError,
    error: connectionsError,
  } = useGetConnections();

useEffect(() => {
  fetchConnections({ 
    page: currentPage, 
    pageSize: itemsPerPage, 
    userId: registerNo 
  });
}, [currentPage, registerNo, fetchConnections]);


  useEffect(() => {
    if (isProfileError) toast.error(profileError.message);
    if (isConnectionsError) toast.error(connectionsError.message);
  }, [isProfileError, profileError, isConnectionsError, connectionsError]);
>>>>>>> 86e228c (New design)

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

<<<<<<< HEAD
=======
  const handleOpenDialog = (user) => {
    setSelectedUser(user);
    setOpenDialog(true);
  };

  if (isLoadingProfile) return <LoadingComponent />;

>>>>>>> 86e228c (New design)
  return (
    <Box
      sx={{
        minHeight: "100vh",
        padding: {
<<<<<<< HEAD
          xs: "10px 12px",
=======
          xs: "10px 9px",
>>>>>>> 86e228c (New design)
          sm: "10px 16px",
          md: "10px ",
        },
        mt: "0",
      }}
    >
      <Box sx={{ textAlign: "center", mb: 1 }}>
        <Typography
          variant={isSmallScreen ? "h5" : "h4"}
<<<<<<< HEAD
          fontWeight="bold"
          color="#34495e"
=======
          fontWeight="500px"
          color="#212121"
>>>>>>> 86e228c (New design)
          textTransform="capitalize"
          sx={{
            fontSize: {
              xs: "1.5rem",
              sm: "2rem",
            },
          }}
        >
          Welcome {userProfile?.first_name || "User"} {userProfile?.last_name || ""}
        </Typography>
<<<<<<< HEAD
        <Divider sx={{ mt: 1,height:'1px' }} />
      </Box>

      <Stack spacing={3}>
        <Box sx={{ 
          width: "100%",
          overflowX: isSmallScreen ? "auto" : "visible",
        }}>
          <HomeUserTable />
        </Box>

        {/* Interested Profiles Section (UI only, logic removed) */}
        <Box>
          <Box 
            display="flex" 
            justifyContent="space-between" 
            alignItems="center"
            flexDirection={isSmallScreen ? "column" : "row"}
            gap={isSmallScreen ? 1 : 0}
          >
            <Typography
              variant={isSmallScreen ? "h5" : "h4"}
              fontWeight="bold"
              mb={2}
              sx={{ 
                color: "#34495e",
                fontSize: {
                  xs: "1.3rem",
                  sm: "2rem",
                },
                alignSelf: isSmallScreen ? "flex-start" : "center"
              }}
            >
              Interested Profiles
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Showing {currentCards.length} of {dummyProfiles.length} profiles
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {currentCards.length > 0 ? (
              currentCards.map((profile, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <ProfileCard profile={profile} isSmallScreen={isSmallScreen} />
                </Grid>
              ))
            ) : (
              <Grid item xs={12}>
                <Typography
                  sx={{
                    color: "black",
                    fontSize: "17px",
                    fontWeight: "bold",
                    textAlign: "center",
                    width: "100%",
                  }}
                >
                  No interested profiles yet.
                </Typography>
              </Grid>
            )}
          </Grid>

          {dummyProfiles.length > cardsPerPage && (
            <Box sx={{ 
              display: "flex",
              justifyContent: {
                xs: "center",
                sm: "flex-end",
              },
              mt: 3,
            }}>
              <Pagination
                count={Math.ceil(dummyProfiles.length / cardsPerPage)}
                page={currentPage}
                onChange={handlePageChange}
                shape="rounded"
                color="primary"
                size={isSmallScreen ? "small" : "medium"}
              />
            </Box>
          )}
        </Box>
      </Stack>
       {isLoading && <LoadingComponent/>}
=======
        <Typography color="#424242">({userProfile?.registration_no})</Typography>
        <Divider sx={{ mt: 1, height: '1px', backgroundColor: '#e0e0e0' }} />
      </Box>

      <Stack spacing={3}>
        {!isSilverOrPremiumUser(userProfile?.type_of_user) && (
          <Box sx={{ 
            width: "100%",
            overflowX: isSmallScreen ? "auto" : "visible",
          }}>
            <HomeUserTable />
          </Box>
        )}

        <Box>
          <Box 
            gap={isSmallScreen ? 1 : 0}
           mb={2}
          >
 <Typography  
 variant="h5"
    sx={{fontSize:{ xs: "22px" },color:'#000',textAlign:{xs:'left',md:'left'} }} 
  >
    Interested Profiles
  </Typography>
          </Box>
<Box
  sx={{
    display: "grid",
    justifySelf: "center",
    alignSelf: "center",
    mr: 2,
    gridTemplateColumns: {
      xs: "1fr",
      sm: "repeat(2, 1fr)",
      md: "repeat(3, 1fr)",
      lg: "repeat(4, 1fr)",
    },
    gap: { xs: 2, sm: 3 },
    minHeight: 300,
  }}
>
 {isLoadingConnections ? (
  <Box sx={{ gridColumn: "1 / -1", textAlign: "center" }}>
    <LoadingTextSpinner />
  </Box>
  ) : connectionsData?.connections?.length > 0 ? (
    connectionsData.connections.map((connection) => (
      <UserCard 
        key={connection._id}
        profile={connection.profile} 
        connection={connection}
        onViewMore={handleOpenDialog}
      />
    ))
  ) : (
    <Box sx={{ gridColumn: "1 / -1" }}>
      <Typography
        sx={{
          color: "#212121",
          fontSize: "17px",
          fontWeight: "bold",
          textAlign: "center",
          width: "100%",
        }}
      >
        No connections yet. Send or accept interest requests to see connections here.
      </Typography>
    </Box>
  )}
</Box>

          <Box display="flex" justifyContent="end" mt={3}>
            <Pagination
              count={Math.ceil((connectionsData?.totalRecords || 0) / itemsPerPage)}
              page={currentPage}
              onChange={handlePageChange}
              color="primary"
              shape="rounded"
              size={isSmallScreen ? "small" : "medium"}
              sx={{
                visibility: connectionsData?.totalRecords > 0 ? 'visible' : 'hidden'
              }}
            />
          </Box>
        </Box>
      </Stack>

      {selectedUser && (
        <ProfileDialog
          openDialog={openDialog}
          setOpenDialog={setOpenDialog}
          selectedUser={selectedUser}
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
          isLoading={false}
        />
      )}
>>>>>>> 86e228c (New design)
    </Box>
  );
};

<<<<<<< HEAD
const ProfileCard = ({ profile, isSmallScreen }) => (
  <Box
    sx={{
      backgroundColor: "#ffffff",
      borderRadius: "8px",
      padding: "16px",
      width: "100%",
      maxWidth: "400px",
      minWidth: isSmallScreen ? "280px" : "auto",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      transition: "transform 0.2s",
      "&:hover": {
        transform: "translateY(-2px)",
        boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
      },
      margin: isSmallScreen ? "0 auto" : "0",
    }}
  >
    <Box display="flex" alignItems="center">
      <Box 
        display="flex" 
        justifyContent="space-evenly" 
        alignItems="center"
        width="100%"
        flexDirection={isSmallScreen ? "column" : "row"}
        textAlign={isSmallScreen ? "center" : "left"}
      >
        <img
          src={profile.profile_img || "/default-profile.png"}
          alt="Profile"
          style={{
            width: isSmallScreen ? "80px" : "100px",
            height: isSmallScreen ? "80px" : "100px",
            borderRadius: "50%",
            objectFit: "cover",
            marginBottom: isSmallScreen ? "10px" : "0",
          }}
          onError={(e) => {
            e.target.src = "/default-profile.png";
          }}
        />
        <Box ml={isSmallScreen ? 0 : 2}>
          <Typography 
            variant={isSmallScreen ? "subtitle1" : "h6"} 
            fontWeight="bold"
            sx={{
              fontSize: {
                xs: "1rem",
                sm: "1.25rem",
              }
            }}
          >
            {profile.first_name || "N/A"} {profile.last_name || ""}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {profile.city || "Location not specified"}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Reg No: {profile.registration_no || "N/A"}
          </Typography>
        </Box>
      </Box>
    </Box>
    <Box
      display="flex"
      justifyContent="space-between"
      mt={2}
      sx={{ fontSize: "14px", color: "gray" }}
    >
      <Box textAlign="center">
        <Typography fontWeight="bold">
          {profile.age || "N/A"} yrs
        </Typography>
        <Typography>Age</Typography>
      </Box>
      <Box textAlign="center">
        <Typography fontWeight="bold">
          {profile.height || "N/A"}
        </Typography>
        <Typography>Height</Typography>
      </Box>
      <Box textAlign="center">
        <Typography fontWeight="bold">
          {profile.occupation || "N/A"}
        </Typography>
        <Typography>Occupation</Typography>
      </Box>
    </Box>
   
  </Box>
);
=======


>>>>>>> 86e228c (New design)

export default UserDashboard;