import React, { memo, useEffect, useState } from "react";
import {
  Box,
  Grid,
<<<<<<< HEAD
  FormControl,
  InputLabel,
  Select,
  MenuItem,
=======
>>>>>>> 86e228c (New design)
  Button,
  Typography,
  CircularProgress,
  useMediaQuery,
  useTheme
} from "@mui/material";
import rawJsonData from "../eduction/jsondata/data.json";
import toast from "react-hot-toast";
<<<<<<< HEAD
import { useGetMemberDetails, useUpdateProfile } from "../../../api/User/useGetProfileDetails";
import TokenService from "../../../token/tokenService";
import { LoadingComponent } from "../../../../App";
import '../../../variables/Variables.scss'
=======
import { useGetMemberDetails, useUpdateProfile } from "../../../api/User";
import TokenService from "../../../token/tokenService";
import { LoadingComponent } from "../../../../App";
import CustomAutocomplete from "../../../Autocomplete/CustomAutocomplete";
>>>>>>> 86e228c (New design)

const datas = rawJsonData.reduce((acc, curr) => ({ ...acc, ...curr }), {});

const ParentsPrefer = () => {
  const theme = useTheme();
<<<<<<< HEAD
  const isXs = useMediaQuery(theme.breakpoints.only('xs'));
=======
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
>>>>>>> 86e228c (New design)

  const registerNo = TokenService.getRegistrationNo();

  const [formData, setFormData] = useState({
    caste_preference: "",
    from_age_preference: "",
    to_age_preference: "",
    from_height_preference: "",
    to_height_preference: "",
    occupation_country_preference: "",
    maritalstatus_preference: "",
    education_preference: ""
  });

  const { data: userProfile, isLoading, isError, error } = useGetMemberDetails(registerNo);
  const { mutate: updateProfile, isPending: isUpdating } = useUpdateProfile();
<<<<<<< HEAD
  console.log("prefffere,",userProfile)
=======
>>>>>>> 86e228c (New design)

  useEffect(() => {
    if (isError) {
      toast.error(error.message);
    }
  }, [isError, error]);

  useEffect(() => {
    if (userProfile) {
      setFormData({
        ...userProfile
      });
    }
  }, [userProfile]);

  const handleChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    updateProfile(formData, {});
  };

  const handleClear = () => {
<<<<<<< HEAD
    setFormData({
      caste_preference: "",
      from_age_preference: "",
      to_age_preference: "",
      from_height_preference: "",
      to_height_preference: "",
      occupation_country_preference: "",
      maritalstatus_preference: "",
      education_preference: ""
    });
=======
     if (userProfile) {
      setFormData({
        ...userProfile,
      });
    }
>>>>>>> 86e228c (New design)
  };

  const formFields = [
    {
      name: "caste_preference",
      label: "Caste Preference",
<<<<<<< HEAD
      options: datas?.casteValues || [],
      currentValue: formData.caste_preference
    },
    {
      name: "from_age_preference",
      label: "Age Preference (From)",
      options: datas?.minAge || [],
      currentValue: formData.from_age_preference
    },
    {
      name: "to_age_preference",
      label: "Age Preference (To)",
      options: datas?.minAge || [],
      currentValue: formData.to_age_preference
    },
    {
      name: "from_height_preference",
      label: "Height Preference (From)",
      options: datas?.heightValues || [],
      currentValue: formData.from_height_preference
    },
    {
      name: "to_height_preference",
      label: "Height Preference (To)",
      options: datas?.heightValues || [],
      currentValue: formData.to_height_preference
    },
    {
=======
      options: [...datas?.casteValues, 'Any Brahmin'],
      currentValue: formData.caste_preference
    },
    {
>>>>>>> 86e228c (New design)
      name: "occupation_country_preference",
      label: "Occupation Country",
      options: ["India", "USA", "China"],
      currentValue: formData.occupation_country_preference
    },
    {
<<<<<<< HEAD
      name: "maritalstatus_preference",
      label: "Marital Status",
      options: datas?.marritalStatus || [],
=======
      name: "from_age_preference",
      label: "Age Preference (From)",
      options: datas?.minAge,
      currentValue: formData.from_age_preference
    },
    {
      name: "to_age_preference",
      label: "Age Preference (To)",
      options: datas?.minAge,
      currentValue: formData.to_age_preference
    },
    {
      name: "from_height_preference",
      label: "Height Preference (From)",
      options: [...datas?.heightValues,'Any Height'],
      currentValue: formData.from_height_preference
    },
    {
      name: "to_height_preference",
      label: "Height Preference (To)",
      options: [...datas?.heightValues,'Any Height'],
      currentValue: formData.to_height_preference
    },
    {
      name: "maritalstatus_preference",
      label: "Marital Status",
      options: datas?.marritalStatus,
>>>>>>> 86e228c (New design)
      currentValue: formData.maritalstatus_preference
    },
    {
      name: "education_preference",
      label: "Education Preference",
<<<<<<< HEAD
      options: datas?.qualificationValues || [],
=======
      options: [...datas?.qualificationValues, 'Any Education'],
>>>>>>> 86e228c (New design)
      currentValue: formData.education_preference
    }
  ];

  return (
    <Box
      sx={{
<<<<<<< HEAD
        padding:1,
        backgroundColor: "#f9f9f9",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        fontFamily: "Roboto, sans-serif",
        width: { xs: "100%", md: "80%" },
        // margin: "0 auto",
        maxWidth: "1200px"
      }}
    >
      <Typography
        variant="h6"
        sx={{
          textAlign: "start",
          fontWeight: 700,
          fontSize: { xs: "23px", sm: "22px" },
          color: "var(--primary-text-color)",
          marginBottom: { xs: "16px", sm: "24px" },
        }}
      >
        Parents' Preference
      </Typography>
=======
        padding: isMobile ? 0 : 3,
        width: { xs: "100%", md: "100%" },
        maxWidth: "100%"
      }}
    >
>>>>>>> 86e228c (New design)

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(2, 1fr)'
          },
<<<<<<< HEAD
          gap: 2
        }}
      >
        {formFields.map((field, index) => (
          <FormControl key={index} fullWidth size={isXs ? "medium" : "medium"}>
            <InputLabel>{field.label}</InputLabel>
            <Select
              value={field.currentValue}
              onChange={(e) => handleChange(field.name, e.target.value)}
              label={field.label}
            >
              {field.currentValue && !field.options.includes(field.currentValue) && (
                <MenuItem key="current" value={field.currentValue}>
                  {field.currentValue}
                </MenuItem>
              )}
              {field.options.map((item, idx) => (
                <MenuItem key={idx} value={item}>{item}</MenuItem>
              ))}
            </Select>
          </FormControl>
=======
          gap: 3.5,
          mt:2
        }}
      >
        {formFields.map((field, index) => (
          <CustomAutocomplete
            key={index}
            options={field.options || []}
            label={field.label}
            name={field.name}
            value={field.currentValue}
            onChange={(e) => handleChange(field.name, e.target.value)}
            sx={{ width: '100%' }}
          />
>>>>>>> 86e228c (New design)
        ))}
      </Box>

      <Box
<<<<<<< HEAD
      mt={1.5}
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
                         background: "var(--blue-btn-color)",
                        textTransform: "capitalize",
                        "&:hover": {  background: "var(--blue-btn-hover-color)" },
                        width: { xs: "100%", sm: "130px" }
                      }}
                    >
                      {isUpdating ? <CircularProgress size={24} /> : "Save"}
                    </Button>
                  </Box>
      {isLoading && <LoadingComponent/>}
=======
        mt={1.5}
        sx={{
          display: "flex",
          gap: "10px",
          flexDirection: { xs: "row", sm: "row" },
          alignItems: { xs: "center", sm: "center" },
          justifySelf: { sm: 'end', md: 'end' }
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
          Reset
        </Button>
        <Button
          onClick={handleSave}
          variant="contained"
          disabled={isUpdating}
          sx={{
            backgroundColor: "#34495e",
            textTransform: "capitalize",
            "&:hover": { backgroundColor: "#2c3e50" },
            width: { xs: "100%", sm: "130px" }
          }}
        >
          {isUpdating ? <CircularProgress size={24} /> : "Save"}
        </Button>
      </Box>
      {isLoading && <LoadingComponent />}
>>>>>>> 86e228c (New design)
    </Box>
  );
};

export default memo(ParentsPrefer);