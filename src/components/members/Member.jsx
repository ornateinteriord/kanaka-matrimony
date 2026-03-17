import React from "react";
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

const Members = () => {
  const isLargeScreen = useMediaQuery("(min-width:1200px)");
  const isMediumScreen = useMediaQuery("(min-width:900px)");
  const isSmallScreen = useMediaQuery("(min-width:600px)");
  const { data } = useGetRecentRegisters();

  // Safely extract the array to prevent 'recentregisters?.map is not a function' TypeError
  const recentregisters = Array.isArray(data)
    ? data
    : (data?.recentRegisters || data?.recentregisters || data?.data || data?.users || []);

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
          mt: { xs: 3, sm: 5 },
          mb: { xs: 5, sm: 10 },
          px: { xs: 2, sm: 3 },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            background: "linear-gradient(90deg, #b8860b, #ffd700, #b8860b)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textTransform: "capitalize",
            fontFamily: "Outfit, sans-serif",
            fontSize: { xs: "1.5rem", sm: "2rem" },
            mb: 5,
            mt: 3,
            fontWeight: 700,
          }}
        >
          Recent Registers
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
              <SwiperSlide key={member._id}>
                <Box
                  sx={{
                    px: { xs: 1, sm: 0 },
                    pb: 4,
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-6px)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      borderRadius: "20px",
                      background: "linear-gradient(160deg, #0d1b2a 0%, #1a2e45 100%)",
                      boxShadow: "0 8px 32px rgba(0,0,0,0.35)",
                      border: "1px solid rgba(255,215,0,0.15)",
                      minHeight: "380px",
                      display: "flex",
                      flexDirection: "column",
                      overflow: "hidden",
                    }}
                  >
                    {/* Gold top accent */}
                    <Box sx={{ height: "3px", background: "linear-gradient(90deg, #b8860b, #ffd700, #b8860b)" }} />

                    {/* Header */}
                    <Box
                      sx={{
                        background: "radial-gradient(ellipse at top center, rgba(184,134,11,0.12) 0%, transparent 70%)",
                        p: 2.5,
                        textAlign: "center",
                        borderBottom: "1px solid rgba(255,215,0,0.12)",
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: 800,
                          fontSize: "1rem",
                          background: "linear-gradient(90deg, #b8860b, #ffd700)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          letterSpacing: 0.5,
                        }}
                      >
                        Kanaka ❤️ Matrimony
                      </Typography>
                    </Box>

                    {/* Details */}
                    <Box
                      sx={{
                        p: 2.5,
                        pt: 2,
                        display: "flex",
                        flexDirection: "column",
                        gap: 1.2,
                        flex: 1,
                        justifyContent: "center",
                      }}
                    >
                      {[
                        { label: "Reg No", value: member.registration_no },
                        { label: "Name", value: member.name },
                        { label: "Age", value: member.age },
                        { label: "Caste", value: member.caste },
                        { label: "Education", value: member.educational_qualification },
                        { label: "Occupation", value: member.occupation },
                        { label: "City", value: member.city },
                      ].map((item, index) => (
                        <Box
                          key={index}
                          sx={{
                            display: "flex",
                            gap: 1,
                            alignItems: "flex-start",
                            borderBottom: index < 6 ? "1px solid rgba(255,255,255,0.05)" : "none",
                            pb: 0.8,
                          }}
                        >
                          <Typography
                            variant="body2"
                            sx={{
                              textAlign: "left",
                              fontWeight: 700,
                              minWidth: "80px",
                              color: "#ffd700",
                              fontSize: "0.75rem",
                            }}
                          >
                            {item.label}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              fontWeight: 400,
                              textAlign: "left",
                              color: "#b0bec5",
                              fontSize: "0.75rem",
                              wordBreak: "break-word",
                            }}
                          >
                            {item.value || "—"}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
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
