import React, { useEffect, useState } from "react";
import {
  Box,
<<<<<<< HEAD
  Stack,
  Typography,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import axios from "axios";
import toast from "react-hot-toast";

const Others = () => {
  const [otherInfo, setOtherInfo] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = sessionStorage.getItem("userData");
        const { _id: userId } = JSON.parse(userData);

        const response = await axios.get(`http://localhost:5000/api/others/${userId}`);
        if (  response.data.info) {
          setOtherInfo(response.data.info);
        }
      } catch (error) {     
        console.warn("No existing record found:", error);
       
      }
    };      

    fetchData();
  }, []);


   const handleReset = () => setOtherInfo("Not Specified");

   const handleSubmit = async () => {
     try {
const userData = sessionStorage.getItem("userData");
      const { _id: userId } = JSON.parse(userData);

       const response = await axios.post("http://localhost:5000/api/others", { userId, info: otherInfo });
       
       if (response.status === 200) {
         toast.success("User info updated successfully!");
       } else {
         toast.error(`Error: ${response.data.message}`);
       }
     } catch (error) {
       console.error("Error submitting info:", error);
     }
   };

  return (
    <Box
      sx={{
        padding: "16px",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        fontFamily: "Outfit, sans-serif",
        maxWidth: "600px",
        margin: "auto",
      }}
    >
      {/* Title */}
      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          marginBottom: "16px",
           color: "var(--primary-text-color)",
          textAlign: "center",
        }}
      >
        Other Information
      </Typography>

      {/* Text Area */}
      <Stack spacing={2}>
=======
  Typography,
  TextField,
  Button,
  CircularProgress,
  useMediaQuery,
  useTheme,
  Stack
} from "@mui/material";
import { useGetMemberDetails, useUpdateProfile } from "../../../api/User";
import TokenService from "../../../token/tokenService";
import { LoadingComponent } from "../../../../App";
import { toast } from "react-toastify";

const Others = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const registerNo = TokenService.getRegistrationNo();
  
  const [formData, setFormData] = useState({
    otherInfo: ""
  });

  const { 
    data: userProfile, 
    isLoading, 
    isError,
    error 
  } = useGetMemberDetails(registerNo);

  const { mutate: updateProfile, isPending: isUpdating } = useUpdateProfile();

  useEffect(() => {
    if (userProfile) {
      setFormData({
        otherInfo: userProfile.otherInfo || ""
      });
    }
  }, [userProfile]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    updateProfile(formData,);
  };

  const handleReset = () => {
    if (userProfile) {
      setFormData({
        ...userProfile,
        // otherInfo:"Not Specified"
      });
    }
  };

  useEffect(() => {
    if (isError) {
      toast.error(error.message);
    }
  }, [isError, error]);

  return (
    <Box sx={{ 
      fontFamily: "Outfit, sans-serif", 
      padding: isMobile ? 0 : 3,
      width: "100%",
      maxWidth: {xs:'100%',md:'50%'},
      margin: "0 auto",
       borderRadius: 2,
       mb: 3,
    }}>


      <Box sx={{ mb: 3,mt:2 }}>
>>>>>>> 86e228c (New design)
        <TextField
          multiline
          minRows={5}
          maxRows={10}
<<<<<<< HEAD
          value={otherInfo}
          onChange={(e) => setOtherInfo(e.target.value)}
=======
          name="otherInfo"
          value={formData.otherInfo}
          onChange={handleChange}
>>>>>>> 86e228c (New design)
          placeholder="Enter other details here..."
          variant="outlined"
          fullWidth
          sx={{
            backgroundColor: "#fff",
            borderRadius: "8px",
            "& .MuiOutlinedInput-root": {
              borderRadius: "8px",
            },
          }}
        />
<<<<<<< HEAD
      </Stack>

      {/* Buttons */}
      <Stack
        direction="row"
        spacing={2}
        sx={{ marginTop: "16px", justifyContent: "center" }}
      >
        <Button
          variant="contained"
        
          onClick={handleSubmit}
          sx={{
            
              textTransform:'capitalize',
             background: "var( --blue-btn-color)",
             "&:hover": {
              background: "var(--blue-btn-hover-color)",
            },
          }}
        >
          Submit
        </Button>
        <Button
          variant="outlined"
         
          onClick={handleReset}
          sx={{
            borderColor: "#34495e",
            color: "black",
              textTransform:'capitalize',
              "&:hover": {
              background: "#fff",
            },
           
=======
      </Box>
     
      <Box
        mt={4}
        sx={{
          display: "flex",
          gap: 2,
          flexDirection: "row",
          justifyContent: "end"
        }}
      >
        <Button
          onClick={handleReset}
          variant="outlined"
          fullWidth={isMobile}
          sx={{
            color: "black",
             border:'1px solid #5e0476',
            backgroundColor: "#fff",
            textTransform: "capitalize",
            "&:hover": { backgroundColor: "#fff" },
            width: isMobile ? "100%" : "130px"
>>>>>>> 86e228c (New design)
          }}
        >
          Reset
        </Button>
<<<<<<< HEAD
      </Stack>
=======
        <Button
          onClick={handleSubmit}
          variant="contained"
          disabled={isUpdating}
          fullWidth={isMobile}
          sx={{
            backgroundColor: "#5e0476",
            textTransform: "capitalize",
            "&:hover": { backgroundColor: "#2c3e50" },
            width: isMobile ? "100%" : "130px"
          }}
        >
          {isUpdating ? <CircularProgress size={24} /> : "Save"}
        </Button>
      </Box>
      
      {isLoading && <LoadingComponent/>}
>>>>>>> 86e228c (New design)
    </Box>
  );
};

<<<<<<< HEAD
export default Others;
=======
export default Others;
>>>>>>> 86e228c (New design)
