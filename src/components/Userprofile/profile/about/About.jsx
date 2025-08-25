<<<<<<< HEAD
import { useEffect, useState } from "react";
import "../../../variables/Variables.scss";
=======
import React, { useEffect, useState } from "react";
>>>>>>> 86e228c (New design)
import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  CircularProgress,
} from "@mui/material";
import toast from "react-hot-toast";

import TokenService from "../../../token/tokenService";
<<<<<<< HEAD
import {
  useGetMemberDetails,
  useUpdateProfile,
} from "../../../api/User/useGetProfileDetails";
import { LoadingComponent } from "../../../../App";

const About = () => {
  const registerNo = TokenService.getRegistrationNo();
  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    date_of_birth: "",
    pincode: "",
    address: "",
    occupation_country: "",
    mother_tounge: "",
    state: "",
    mobile_no: "",
    email_id: "",
    age: "",
  });

  const {
    data: userProfile,
    isLoading,
    isError,
    error,
  } = useGetMemberDetails(registerNo);
=======
import { useGetMemberDetails, useUpdateProfile } from "../../../api/User";
import { LoadingComponent } from "../../../../App";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { calculateAge } from "../../../../utils/common";

const About = () => {
  const registerNo = TokenService.getRegistrationNo();
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    date_of_birth: '',
    pincode: '',
    address: '',
    occupation_country: '',
    mother_tounge: '',
    state: '',
    mobile_no: '',
    email_id: '',
    age: ''
  });

  const { data: userProfile, isLoading, isError, error } = useGetMemberDetails(registerNo);
>>>>>>> 86e228c (New design)
  const { mutate: updateProfile, isPending: isUpdating } = useUpdateProfile();

  useEffect(() => {
    if (isError) toast.error(error.message);
  }, [isError, error]);

  useEffect(() => {
    if (userProfile) {
      setFormData({
        ...userProfile,
<<<<<<< HEAD
        date_of_birth: userProfile.date_of_birth?.split("T")[0] || "",
=======
        date_of_birth: userProfile.date_of_birth?.split('T')[0] || ""
>>>>>>> 86e228c (New design)
      });
    }
  }, [userProfile]);

  const handleChange = (e) => {
    const { name, value } = e.target;
<<<<<<< HEAD
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleReset = () => {
    setFormData({
      first_name: "",
      last_name: "",
      date_of_birth: "",
      pincode: "",
      address: "",
      occupation_country: "",
      mother_tounge: "",
      state: "",
      mobile_no: "",
      email_id: "",
      age: "",
    });
  };

  const handleSave = () => {
    updateProfile(formData, {
      onSuccess: () => setIsEditing(false),
    });
=======
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleReset = () => {
    if (userProfile) {
      setFormData({
        ...userProfile,
        date_of_birth: userProfile.date_of_birth?.split('T')[0] || ""
      });
    }
  };

  const handleSave = () => {
    updateProfile(formData);
>>>>>>> 86e228c (New design)
  };

  return (
    <Box
      sx={{
<<<<<<< HEAD
        bgcolor: "background.paper",
        borderRadius: 2,
        boxShadow: 1,
        p: { xs: 1, sm: 3, md: 4 },
        maxWidth: 1200,
        mx: "auto",
        width: "100%",
      }}
    >
      {/* Header */}
      <Box
        display="flex"
        flexDirection={{ xs: "row", sm: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "center", sm: "center" }}
        mb={3}
        gap={2}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          fontSize={{ xs: "1.3rem", sm: "1.7rem" }}
          sx={{ color: "var(--primary-text-color)" }}
        >
          Profile Information
        </Typography>
        <Button
          variant={isEditing ? "outlined" : "contained"}
          color={isEditing ? "error" : "primary"}
          onClick={() => setIsEditing(!isEditing)}
          disabled={isUpdating}
          fullWidth={true}
          sx={{
            maxWidth: { xs: "100px", sm: 180 },
            padding: { xs: 0.6 },
            textTransform: "capitalize",
            fontSize: "16px",
            background: "var( --blue-btn-color)",
            "&:hover": {
              background: "var(--blue-btn-hover-color)",
            },
          }}
        >
          {isEditing ? "Cancel" : "Edit Profile"}
        </Button>
      </Box>
=======
        borderRadius: 2,
        p: { xs: 0, sm: 2, md: 2 },
        maxWidth: '100%',
        mx: 'auto',
        width: '100%',
        mt:2
      }}
    >
>>>>>>> 86e228c (New design)

      {/* Form Sections */}
      <Box display="flex" flexDirection="column" gap={4}>
        {/* Personal + Contact */}
        <Box
          display="grid"
<<<<<<< HEAD
          gridTemplateColumns={{ xs: "1fr", sm: "1fr 1fr" }}
=======
          gridTemplateColumns={{ xs: '1fr', sm: '1fr 1fr' }}
>>>>>>> 86e228c (New design)
          gap={3}
        >
          {/* Personal Details */}
          <Box>
<<<<<<< HEAD
            <Typography variant="h6" fontWeight={600} mb={2}>
              Personal Details
            </Typography>
            <Stack spacing={2}>
              <TextField
                label="First Name"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                disabled={!isEditing || isUpdating}
                fullWidth
              />
              <TextField
                label="Last Name"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                disabled={!isEditing || isUpdating}
                fullWidth
              />
              <TextField
                label="Date of Birth"
                name="date_of_birth"
                type="date"
                value={formData.date_of_birth}
                onChange={handleChange}
                disabled={!isEditing || isUpdating}
                InputLabelProps={{ shrink: true }}
                fullWidth
              />
              <TextField
                label="Age"
                name="age"
                type="number"
                value={formData.age}
                onChange={handleChange}
                disabled={!isEditing || isUpdating}
                fullWidth
              />
=======
            <Typography variant="h6" fontWeight={500} mb={2}>
              Personal Details
            </Typography>
            <Stack spacing={2}>
              <TextField label="First Name" name="first_name" value={formData.first_name} onChange={handleChange} disabled={isUpdating} fullWidth />
              <TextField label="Last Name" name="last_name" value={formData.last_name} onChange={handleChange} disabled={isUpdating} fullWidth />
             <LocalizationProvider dateAdapter={AdapterDayjs}>
                             <DatePicker
                               label="Date of Birth"
                               value={
                                 formData.date_of_birth
                                   ? dayjs(formData.date_of_birth)
                                   : null
                               }
                               onChange={(newValue) => {
                                 const dob = newValue
                                   ? newValue.toISOString().split("T")[0]
                                   : "";
                                 const age = dob ? calculateAge(dob) : "";
                                 setFormData((prev) => ({
                                   ...prev,
                                   date_of_birth: dob,
                                   age: age.toString(),
                                 }));
                               }}
                               maxDate={dayjs()}
                               slotProps={{
                                 textField: {
                                   fullWidth: true,
                                   required: true,
                                   sx: { mb: 3 },
                                 },
                               }}
                             />
                           </LocalizationProvider>
              <TextField label="Age" name="age" type="number" value={formData.age} onChange={handleChange} disabled={isUpdating} fullWidth />
>>>>>>> 86e228c (New design)
            </Stack>
          </Box>

          {/* Contact Details */}
          <Box>
<<<<<<< HEAD
            <Typography variant="h6" fontWeight={600} mb={2}>
              Contact Details
            </Typography>
            <Stack spacing={2}>
              <TextField
                label="Mobile Number"
                name="mobile_no"
                value={formData.mobile_no}
                onChange={handleChange}
                disabled={!isEditing || isUpdating}
                fullWidth
              />
              <TextField
                label="Email"
                name="email_id"
                type="email"
                value={formData.email_id}
                onChange={handleChange}
                disabled={!isEditing || isUpdating}
                fullWidth
              />
              <TextField
                label="Address"
                name="address"
                multiline
                rows={3}
                value={formData.address}
                onChange={handleChange}
                disabled={!isEditing || isUpdating}
                fullWidth
              />
=======
            <Typography variant="h6" fontWeight={500} mb={2}>
              Contact Details
            </Typography>
            <Stack spacing={2}>
              <TextField label="Mobile Number" name="mobile_no" value={formData.mobile_no} onChange={handleChange} disabled={isUpdating} fullWidth />
              <TextField label="Email" name="email_id" type="email" value={formData.email_id} onChange={handleChange} disabled={isUpdating} fullWidth />
              <TextField label="Address" name="address" multiline rows={3} value={formData.address} onChange={handleChange} disabled={isUpdating} fullWidth />
>>>>>>> 86e228c (New design)
            </Stack>
          </Box>
        </Box>

        {/* Location + Additional */}
        <Box
          display="grid"
<<<<<<< HEAD
          gridTemplateColumns={{ xs: "1fr", sm: "1fr 1fr" }}
=======
          gridTemplateColumns={{ xs: '1fr', sm: '1fr 1fr' }}
>>>>>>> 86e228c (New design)
          gap={3}
        >
          {/* Location Details */}
          <Box>
<<<<<<< HEAD
            <Typography variant="h6" fontWeight={600} mb={2}>
              Location Details
            </Typography>
            <Stack spacing={2}>
              <TextField
                label="State"
                name="state"
                value={formData.state}
                onChange={handleChange}
                disabled={!isEditing || isUpdating}
                fullWidth
              />
              <TextField
                label="Pin Code"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                disabled={!isEditing || isUpdating}
                fullWidth
              />
              <TextField
                label="Occupation Country"
                name="occupation_country"
                value={formData.occupation_country}
                onChange={handleChange}
                disabled={!isEditing || isUpdating}
                fullWidth
              />
=======
            <Typography variant="h6" fontWeight={500} mb={2}>
              Location Details
            </Typography>
            <Stack spacing={2}>
              <TextField label="State" name="state" value={formData.state} onChange={handleChange} disabled={isUpdating} fullWidth />
              <TextField label="Pin Code" name="pincode" value={formData.pincode} onChange={handleChange} disabled={isUpdating} fullWidth />
              <TextField label="Occupation Country" name="occupation_country" value={formData.occupation_country} onChange={handleChange} disabled={isUpdating} fullWidth />
>>>>>>> 86e228c (New design)
            </Stack>
          </Box>

          {/* Additional Details */}
          <Box>
<<<<<<< HEAD
            <Typography variant="h6" fontWeight={600} mb={2}>
              Additional Details
            </Typography>
            <Stack spacing={2}>
              <TextField
                label="Mother Tongue"
                name="mother_tounge"
                value={formData.mother_tounge}
                onChange={handleChange}
                disabled={!isEditing || isUpdating}
                fullWidth
              />
=======
            <Typography variant="h6" fontWeight={500} mb={2}>
              Additional Details
            </Typography>
            <Stack spacing={2}>
              <TextField label="Mother Tongue" name="mother_tounge" value={formData.mother_tounge} onChange={handleChange} disabled={isUpdating} fullWidth />
>>>>>>> 86e228c (New design)
            </Stack>
          </Box>
        </Box>
      </Box>

<<<<<<< HEAD
      {/* Buttons */}
      {isEditing && (
        <Box
          display="flex"
          justifyContent={{ xs: "space-evenly", sm: "flex-end" }}
          gap={2}
          mt={2}
        >
          <Button
            variant="outlined"
            color="error"
            onClick={handleReset}
            disabled={isUpdating}
            fullWidth={true}
            sx={{ maxWidth: { xs: "160px", sm: 180 } }}
          >
            Reset
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSave}
            disabled={isUpdating}
            fullWidth={true}
            sx={{ maxWidth: { xs: "160px", sm: 200 } }}
            startIcon={isUpdating ? <CircularProgress size={20} /> : null}
          >
            {isUpdating ? "Saving..." : "Save Changes"}
          </Button>
        </Box>
      )}
=======
     <Box
        display="flex"
        justifyContent={{ xs: 'space-evenly', sm: 'flex-end' }}
        gap={2}
        mt={2}
      >
        <Button
          variant="outlined"
          onClick={handleReset}
          disabled={isUpdating}
          fullWidth={true}
          sx={{ 
            color: "black",
            border:'1px solid #5e0476',
            maxWidth: { xs: '160px', sm: 180 },
            textTransform: 'capitalize',
            "&:hover": {
              backgroundColor: "transparent"
            }
          }}
        >
          Reset
        </Button>
        <Button
          variant="contained"
          onClick={handleSave}
          disabled={isUpdating}
          fullWidth={true}
          sx={{ 
            maxWidth: { xs: '160px', sm: 200 },
            textTransform: 'capitalize', 
            backgroundColor: "#5e0476",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#6d2980ff"
            } 
          }}
          startIcon={isUpdating ? <CircularProgress size={20} /> : null}
        >
          {isUpdating ? 'Saving...' : 'Save Changes'}
        </Button>
      </Box>


>>>>>>> 86e228c (New design)

      {isLoading && <LoadingComponent />}
    </Box>
  );
};

<<<<<<< HEAD
export default About;
=======
export default About;
>>>>>>> 86e228c (New design)
