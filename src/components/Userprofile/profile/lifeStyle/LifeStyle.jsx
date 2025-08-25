import React, { useEffect, useState } from "react";
import {
  Box,
  MenuItem,
  Typography,
  TextField,
  Button,
  CircularProgress,
<<<<<<< HEAD
} from "@mui/material";
import { useGetMemberDetails, useUpdateProfile } from "../../../api/User/useGetProfileDetails";
import TokenService from "../../../token/tokenService";
import { LoadingComponent } from "../../../../App";
import { toast } from "react-toastify";
import '../../../variables/Variables.scss'

const LifeStyle = () => {
  const registerNo = TokenService.getRegistrationNo();
=======
  useMediaQuery,
  useTheme
} from "@mui/material";
import { useGetMemberDetails, useUpdateProfile } from "../../../api/User";
import TokenService from "../../../token/tokenService";
import { LoadingComponent } from "../../../../App";
import { toast } from "react-toastify";

const LifeStyle = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const registerNo = TokenService.getRegistrationNo();
  
>>>>>>> 86e228c (New design)
  const [formData, setFormData] = useState({
    drink: "",
    smoke: "",
    diet: "",
    sunsign: "",
    bloodgroup: "",
    body_type: "", 
    skin_type: ""  
  });

  const { 
    data: userProfile, 
    isLoading, 
    isError,
    error 
  } = useGetMemberDetails(registerNo);

<<<<<<< HEAD
  // Update profile mutation
  const { mutate: updateProfile, isPending: isUpdating } = useUpdateProfile();

  useEffect(() => {
      if (userProfile) {
        setFormData({
          ...userProfile,
        });
      }
    }, [userProfile]);
  
=======
  const { mutate: updateProfile, isPending: isUpdating } = useUpdateProfile();

  useEffect(() => {
    if (userProfile) {
      setFormData({
        ...userProfile,
      });
    }
  }, [userProfile]);
>>>>>>> 86e228c (New design)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    updateProfile(formData, {
<<<<<<< HEAD
=======
      onSuccess: () => toast.success("Profile updated successfully!"),
      onError: () => toast.error("Failed to update profile.")
>>>>>>> 86e228c (New design)
    });
  };

  const handleClear = () => {
<<<<<<< HEAD
    setFormData({
      drink: "",
      smoke: "",
      diet: "",
      sunsign: "",
      bloodgroup: "",
      body_type: "",
      skin_type: ""
    });
  };

  useEffect(() => {
     if (isError) {
       toast.error(error.message);
     }
   }, [isError, error]);

   const textFieldStyle = {
    width: {
      xs: "310px",
      sm: "100%",
      md: "350px",
      lg: "400px"
    }
  };

  return (
    <Box sx={{ fontFamily: "Outfit, sans-serif", padding: 1, width: "92%" }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h5" sx={{fontSize:{ xs:'23px',},color: "var(--primary-text-color)"}}  fontWeight={700}>
          Life Style & Appearance
        </Typography>
      </Box>

      <Box  sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(2, 1fr)'
          },
          gap: 2
        }}>
=======
     if (userProfile) {
      setFormData({
        ...userProfile,
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
      padding: isMobile ? 0 : 3,
      width: "100%",
      maxWidth: "100%",
      margin: "0 auto"
    }}>


      <Box sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          sm: 'repeat(2, 1fr)'
        },
        gap: isMobile ? 3 : 4,
        mt:2
      }}>
>>>>>>> 86e228c (New design)
        {/* Drink */}
        <TextField
          select
          name="drink"
          label="Drink"
          fullWidth
          value={formData.drink}
          onChange={handleChange}
<<<<<<< HEAD
          sx={{...textFieldStyle}}
=======
>>>>>>> 86e228c (New design)
        >
          <MenuItem value="Yes">Yes</MenuItem>
          <MenuItem value="No">No</MenuItem>
          <MenuItem value="Occasionally">Occasionally</MenuItem>
        </TextField>

        {/* Smoke */}
        <TextField
          select
          name="smoke"
          label="Smoke"
          fullWidth
          value={formData.smoke}
          onChange={handleChange}
<<<<<<< HEAD
          sx={{...textFieldStyle}}
=======
>>>>>>> 86e228c (New design)
        >
          <MenuItem value="Yes">Yes</MenuItem>
          <MenuItem value="No">No</MenuItem>
          <MenuItem value="Occasionally">Occasionally</MenuItem>
        </TextField>

        {/* Diet */}
        <TextField
          select
          name="diet"
          label="Diet"
          fullWidth
          value={formData.diet}
          onChange={handleChange}
<<<<<<< HEAD
          sx={{...textFieldStyle}}
=======
>>>>>>> 86e228c (New design)
        >
          <MenuItem value="Veg">Veg</MenuItem>
          <MenuItem value="Non-Veg">Non-Veg</MenuItem>
          <MenuItem value="Eggetarian">Eggetarian</MenuItem>
        </TextField>

        {/* Sunsign */}
        <TextField
          select
          name="sunsign"
          label="Sunsign"
          fullWidth
          value={formData.sunsign}
          onChange={handleChange}
<<<<<<< HEAD
          sx={{...textFieldStyle}}
=======
>>>>>>> 86e228c (New design)
        >
          <MenuItem value="Aries">Aries</MenuItem>
          <MenuItem value="Taurus">Taurus</MenuItem>
          <MenuItem value="Gemini">Gemini</MenuItem>
          <MenuItem value="Cancer">Cancer</MenuItem>
        </TextField>

        {/* Blood Group */}
        <TextField
          select
          name="bloodgroup"
          label="Blood Group"
          fullWidth
          value={formData.bloodgroup}
          onChange={handleChange}
<<<<<<< HEAD
          sx={{...textFieldStyle}}
=======
>>>>>>> 86e228c (New design)
        >
          <MenuItem value="A+">A+</MenuItem>
          <MenuItem value="B+">B+</MenuItem>
          <MenuItem value="O+">O+</MenuItem>
          <MenuItem value="AB+">AB+</MenuItem>
        </TextField>

        {/* Body Type */}
        <TextField
          select
          name="body_type"
          label="Body Type"
          fullWidth
          value={formData.body_type}
          onChange={handleChange}
<<<<<<< HEAD
          sx={{...textFieldStyle}}
=======
>>>>>>> 86e228c (New design)
        >
          <MenuItem value="Slim">Slim</MenuItem>
          <MenuItem value="Athletic">Athletic</MenuItem>
          <MenuItem value="Average">Average</MenuItem>
        </TextField>

        {/* Skin Type */}
        <TextField
          select
          name="skin_type"
          label="Skin Type"
          fullWidth
          value={formData.skin_type}
          onChange={handleChange}
<<<<<<< HEAD
          sx={{...textFieldStyle}}
=======
>>>>>>> 86e228c (New design)
        >
          <MenuItem value="Fair">Fair</MenuItem>
          <MenuItem value="Wheatish">Wheatish</MenuItem>
          <MenuItem value="Dark">Dark</MenuItem>
        </TextField>
      </Box>
     
      <Box
<<<<<<< HEAD
      mt={1}
                    sx={{
                      display: "flex",
                      gap: "10px",
                      flexDirection: { xs: "row", sm: "row" },
                      alignItems: { xs: "center", sm: "center" },
                      justifySelf: {sm:'end',md:'end'}
                    }}
                  >
                    <Button
                      onClick={handleClear}
                      variant="outlined"
                      sx={{
                        color: "black",
                        backgroundColor: "#fff",
                        textTransform: "capitalize",
                        "&:hover": { backgroundColor: "#fff" },
                        width: { xs: "100%", sm: "130px" }
                      }}
                    >
                      Clear
                    </Button>
                    <Button
                      onClick={handleSave}
                      variant="contained"
                      disabled={isUpdating}
                      sx={{
                       background: "var( --blue-btn-color)",
                        textTransform: "capitalize",
                        "&:hover": { background: "var(--blue-btn-hover-color)" },
                        width: { xs: "100%", sm: "130px" }
                      }}
                    >
                      {isUpdating ? <CircularProgress size={24} /> : "Save"}
                    </Button>
                  </Box>
=======
        mt={4}
        sx={{
          display: "flex",
          gap: 2,
          flexDirection:"row",
          justifyContent: "end"
        }}
      >
        <Button
          onClick={handleClear}
          variant="outlined"
          fullWidth={isMobile}
          sx={{
            color: "black",
             border:'1px solid #5e0476',
            backgroundColor: "#fff",
            textTransform: "capitalize",
            "&:hover": { backgroundColor: "#fff" },
            width: isMobile ? "100%" : "130px"
          }}
        >
          Reset
        </Button>
        <Button
          onClick={handleSave}
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
      
>>>>>>> 86e228c (New design)
      {isLoading && <LoadingComponent/>}
    </Box>
  );
};

export default LifeStyle;