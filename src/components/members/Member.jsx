<<<<<<< HEAD

=======
import React from "react";
>>>>>>> 86e228c (New design)
import {
  Container,
  Typography,
  Box,
  Paper,
  useMediaQuery,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Footer from "../footer/Footer";
import { useGetRecentRegisters } from "../api/Auth";
<<<<<<< HEAD
import '../variables/Variables.scss'
=======
>>>>>>> 86e228c (New design)

const Members = () => {
  const isLargeScreen = useMediaQuery("(min-width:1200px)");
  const isMediumScreen = useMediaQuery("(min-width:900px)");
  const isSmallScreen = useMediaQuery("(min-width:600px)");
<<<<<<< HEAD
  const {data:recentregisters} = useGetRecentRegisters()

  
=======
  const { data: recentregisters = [] } = useGetRecentRegisters();
>>>>>>> 86e228c (New design)

  const getSlidesPerView = () => {
    if (isLargeScreen) return 3;
    if (isMediumScreen) return 2;
    if (isSmallScreen) return 1.5;
    return 1;
  };

  return (
    <>
      <Container
        sx={{
          textAlign: "center",
<<<<<<< HEAD
          marginTop: { xs: 3, sm: 5 },
          marginBottom: { xs: 5, sm: 10 },
=======
          mt: { xs: 3, sm: 5 },
          mb: { xs: 5, sm: 10 },
>>>>>>> 86e228c (New design)
          px: { xs: 2, sm: 3 },
        }}
      >
        <Typography
          variant="h4"
          sx={{
<<<<<<< HEAD
            color: "var(--primary-text-color)",
            fontWeight: "bold",
            fontFamily: "Outfit, sans-serif",
            fontSize: { xs: "1.5rem", sm: "2rem" },
            marginBottom: 5,
            marginTop:3
          }}
        >
          RECENT REGISTERS
=======
            color: "#1a4f72",
            textTransform: "capitalize",
            fontFamily: "Outfit, sans-serif",
            fontSize: { xs: "1.5rem", sm: "2rem" },
            mb: 5,
            mt: 3,
          }}
        >
          Recent Registers
>>>>>>> 86e228c (New design)
        </Typography>

        <Box sx={{ px: { xs: 0, sm: 2 } }}>
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={getSlidesPerView()}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            speed={1000}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            loop
          >
            {recentregisters?.map((member) => (
<<<<<<< HEAD
              <SwiperSlide >
                <Box
                  className="member-card"
                  sx={{
                    fontFamily: "Outfit, sans-serif",
                    px: { xs: 1, sm: 0 },
                    pb: 2,
                  }}
                >
                  <Paper
                    elevation={3}
                    sx={{
                      borderRadius: 2,
                      overflow: "hidden",
                      position: "relative",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      p: 3,
                      background: "var(--primary-color)",
                      color: "white",
                      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        textAlign: "center",
                        color: "white",
                        mb: 2,
                        fontWeight: "bold",
                        fontFamily: "Outfit, sans-serif",
                        textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
                      }}
                    >
                      Kanaka Matrimony
=======
              <SwiperSlide key={member._id}>
                <Box
                  sx={{
                    px: { xs: 1, sm: 0 },
                    pb: 4,
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                    },
                  }}
                >
                  <Paper
                    elevation={6}
                    sx={{
                      borderRadius: 2,
                      p: 4,
                      background:
                        "linear-gradient(135deg, #ffffff 0%, #f9f9f9 100%)",
                      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.13)",
                      height: "380px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "start",
                      alignItems: "start",
                      textAlign: "start",
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        textAlign: "left",
                        fontWeight: 700,
                        mb: 2,
                        textShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                      }}
                    >
                      Girija ❤️ Kalyana
>>>>>>> 86e228c (New design)
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 1.5,
<<<<<<< HEAD
              
=======
>>>>>>> 86e228c (New design)
                      }}
                    >
                      {[
                        { label: "RegNo:", value: member.registration_no },
                        { label: "Name:", value: member.name },
                        { label: "Age:", value: member.age },
                        { label: "Caste:", value: member.caste },
<<<<<<< HEAD
                        { label: "Education:", value: member.educational_qualification },
                        { label: "Occupation:", value: member.occupation },
                        { label: "City:", value: member.city },
                      ].map((item, index) => (
                        <Box key={index} sx={{ display: "flex" }}>
                          <Typography
                            variant="body1"
                            sx={{
                              ml:3,
                              fontWeight: "bold",
                              width: "100px",
                              fontFamily: "Outfit, sans-serif",
                              color: "#fff",
                              display:"flex",
=======
                        {
                          label: "Education:",
                          value: member.educational_qualification,
                        },
                        { label: "Occupation:", value: member.occupation },
                        { label: "City:", value: member.city },
                      ].map((item, index) => (
                        <Box key={index} sx={{ display: "flex", gap: 1 }}>
                          <Typography
                            variant="body1"
                            sx={{
                              textAlign: "left",
                              fontWeight: 600,
                              width: "100px",
                              color: "#000",
>>>>>>> 86e228c (New design)
                            }}
                          >
                            {item.label}
                          </Typography>
                          <Typography
                            variant="body1"
                            sx={{
<<<<<<< HEAD
                              fontFamily: "Outfit, sans-serif",
                              color: "#fff",
=======
                              fontWeight: 400,
                              textAlign: "left",
                              color: "#000",
                              wordBreak: "break-word",
>>>>>>> 86e228c (New design)
                            }}
                          >
                            {item.value}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Paper>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default Members;
