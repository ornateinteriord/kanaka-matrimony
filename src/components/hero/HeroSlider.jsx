<<<<<<< HEAD
import { Box, Typography, Button, useTheme, useMediaQuery } from "@mui/material";
=======
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
>>>>>>> 86e228c (New design)
import { styled } from "@mui/system";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import wall1 from '../../assets/wallpaper/wall1.jpg';
import card4 from '../../assets/card4.jpg';
import wall2 from '../../assets/wallpaper/wall2.jpg';
import Navbar from "../navbar/Navbar";
import { useNavigate } from "react-router-dom";
import "./HeroSlider.scss";
import useAuth from "../hook/UseAuth";
<<<<<<< HEAD
import '../variables/Variables.scss'
=======
import TokenService from "../token/tokenService";
import ThemedButton from "../UI/ThemedButton";




>>>>>>> 86e228c (New design)
const HeroSlider = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const navigate = useNavigate();
<<<<<<< HEAD
=======
  const isAdmin = TokenService.getRole()?.toLowerCase() === 'admin'
>>>>>>> 86e228c (New design)
  const { isLoggedIn } = useAuth();

  const images = [
    { src: wall1, alt: "Happy Couple 1" },
    { src: card4, alt: "Happy Couple 2" },
    { src: wall2, alt: "Happy Couple 3" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: !isMobile,
    adaptiveHeight: true,
  };

  const HeroWrapper = styled(Box)(({ theme }) => ({
    position: "relative",
    textAlign: "center",
    color: "#fff",
    height: isMobile ? "100vh" : isTablet ? "80vh" : "100vh",
    overflow: "hidden",
  }));

  const SlideImage = styled(Box)(({ theme }) => ({
    width: "100%",
    height: isMobile ? "100vh" : isTablet ? "80vh" : "100vh",
    objectFit: "cover",
    objectPosition: "center",
  }));

  const Overlay = styled(Box)(({ theme }) => ({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    zIndex: 1,
  }));

  const Content = styled(Box)(({ theme }) => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 2,
    textAlign: "center",
    width: "90%",
    maxWidth: "1200px",
    padding: theme.spacing(2),
  }));

  return (
    <Box className="hero-main-container">
      <HeroWrapper>
        <Navbar />
        <Slider {...settings}>
          {images.map((image, index) => (
            <Box key={index}>
              <SlideImage
                component="img"
                src={image.src}
                alt={image.alt}
              />
            </Box>
          ))}
        </Slider>
        <Overlay />
        <Content>
          <Typography
            variant={isMobile ? "h4" : isTablet ? "h3" : "h2"}
            component="h1"
            fontWeight={700}
            gutterBottom
            fontFamily={'Outfit, sans-serif'}
            sx={{
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
              mb: isMobile ? 1 : 2,
              fontSize: isMobile ? '2.5rem' : isTablet ? '2.2rem' : '2.8rem',
              lineHeight: isMobile ? '1.2' : '1.3',
            }}
          >
            Find Your Perfect Match
          </Typography>
          <Typography
            variant={isMobile ? "body2" : "h6"}
            fontWeight={500}
            paragraph
            fontFamily={'Outfit, sans-serif'}
            sx={{
              color: '#fff',
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
              mb: isMobile ? 2 : 3,
              fontSize: isMobile ? '1rem' : '1.1rem',
              lineHeight: isMobile ? '1.4' : '1.6',
            }}
          >
            Join the most trusted platform and start your journey towards a lifetime of happiness.
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: isMobile ? 1 : 2,
              flexWrap: 'nowrap',
              mt: isMobile ? 1 : 2,
            }}
          >
<<<<<<< HEAD
            {isLoggedIn ? (
              <Button
                variant="contained"
                size={isMobile ? "small" : "large"}
                sx={{
                  backgroundColor: '#00796B',
                  '&:hover': {
                    backgroundColor: '#004D40',
                  },
                  borderRadius: '8px',
                  textTransform: 'capitalize',
=======
           {isLoggedIn ? (
              <ThemedButton
                title="Get Started"
                size={isMobile ? "small" : "large"}
                sx={{
>>>>>>> 86e228c (New design)
                  px: isMobile ? 2 : 4,
                  py: isMobile ? 1.5 : 1.5,
                  fontSize: isMobile ? '1rem' : '1rem',
                  fontFamily: 'Outfit, sans-serif',
                  minWidth: isMobile ? '160px' : '200px',
                }}
<<<<<<< HEAD
                onClick={() => navigate('/user/userDashboard')}
              >
                Get Started
              </Button>
            ) : (
              <>
            <Button
              variant="contained"
              size={isMobile ? "small" : "large"}
              sx={{
                background: 'var(--blue-btn-color)',
                '&:hover': {
                  background: 'var(--blue-btn-hover-color)',
                },
                borderRadius: '8px',
                textTransform: 'capitalize',
                px: isMobile ? 2 : 4,
                py: isMobile ? 1.5 : 1.5,
                fontSize: isMobile ? '1rem' : '1rem',
                fontFamily: 'Outfit, sans-serif',
                minWidth: isMobile ? '120px' : '160px',
              }}
              onClick={() => navigate('/register')}
            >
              Free Register
            </Button>

            <Button
              variant="contained"
              size={isMobile ? "small" : "large"}
              sx={{
                backgroundColor: '#8E24AA',
                '&:hover': {
                  backgroundColor: '#6A1B9A',
                },
                borderRadius: '8px',
                textTransform: 'capitalize',
                px: isMobile ? 2 : 4,
                py: isMobile ? 1.5 : 1.5,
                fontSize: isMobile ? '1rem' : '1rem',
                fontFamily: 'Outfit, sans-serif',
                minWidth: isMobile ? '120px' : '160px',
              }}
              onClick={() => navigate('/membership')}
            >
              Premium
            </Button>
            </>
=======
                onClick={() => navigate(isAdmin? '/admin/dashboard' : '/user/userDashboard')}
              />
            ) : (
              <>
                <ThemedButton
                  title="Free Register"
                  size={isMobile ? "small" : "large"}
                  sx={{
                    px: isMobile ? 2 : 4,
                    py: isMobile ? 1.5 : 1.5,
                    fontSize: isMobile ? '1rem' : '1rem',
                    fontFamily: 'Outfit, sans-serif',
                    minWidth: isMobile ? '120px' : '160px',
                  }}
                  onClick={() => navigate('/register')}
                />

                <ThemedButton
                  title="Premium"
                  size={isMobile ? "small" : "large"}
                  sx={{
                    backgroundColor: '#FFFF',
                    '&:hover': { backgroundColor: '#FFFF' },
                    color:'#000',
                    px: isMobile ? 2 : 4,
                    py: isMobile ? 1.5 : 1.5,
                    fontSize: isMobile ? '1rem' : '1rem',
                    fontFamily: 'Outfit, sans-serif',
                    minWidth: isMobile ? '120px' : '160px',
                  }}
                  onClick={() => navigate('/membership')}
                />
              </>
>>>>>>> 86e228c (New design)
            )}
          </Box>
        </Content>
      </HeroWrapper>
    </Box>
  );
};

export default HeroSlider;