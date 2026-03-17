import React from 'react';
import { Container, Typography, Grid, Box, Paper, Badge, Card, CardContent } from '@mui/material';
import { FaUserEdit, FaUsers, FaComments, FaUserFriends, FaCalendarWeek, FaCalendarAlt, FaUserPlus } from 'react-icons/fa';
import { useGetDashboardStats } from '../api/Auth';

const Connect = () => {
  const { data: dashboardstats } = useGetDashboardStats();

  const stats = [
    {
      id: 1,
      title: 'Profiles',
      value: `${dashboardstats?.stats?.totalProfiles || 0}`,
      icon: <FaUserFriends style={{ fontSize: 40, color: '#39af5e' }} />,
      color: '#f8f9fa',
      textColor: 'rgb(192, 9, 88)',

    },
    {
      id: 2,
      title: 'This Week',
      value: `${dashboardstats?.stats?.thisWeekRegistrations || 0}`,
      icon: <FaCalendarWeek style={{ fontSize: 40, color: '#39af5e' }} />,
      color: '#f8f9fa',
      textColor: '#00bcd4',

    },
    {
      id: 3,
      title: 'This Month',
      value: `${dashboardstats?.stats?.thisMonthRegistrations || 0}`,
      icon: <FaCalendarAlt style={{ fontSize: 40, color: '#39af5e' }} />,
      color: '#f8f9fa',
      textColor: '#ff5a5f',

    },
  ];

  const features = [
    {
      id: 1,
      title: 'Sign Up',
      description: 'Register for free & put up your Matrimony Profile',
      icon: <FaUserEdit style={{ fontSize: 50, color: '#fff' }} />,
    },
    {
      id: 2,
      title: 'Connect',
      description: 'Select & Connect with Matches you like',
      icon: <FaUsers style={{ fontSize: 50, color: '#fff' }} />,
    },
    {
      id: 3,
      title: 'Interact',
      description: 'Become a Premium Member & Start a Conversation',
      icon: <FaComments style={{ fontSize: 50, color: '#fff' }} />,
    },
  ];

  return (
    <>
      <Container maxWidth="xl" sx={{
        py: { xs: 4, md: 4 },
        fontFamily: "Outfit",
      }}>
        <Box sx={{
          maxWidth: "100%",
          mx: 'auto',
          px: { xs: 2, sm: 4 },
        }}>
          <Typography variant="h4" sx={{

            color: '#39af5e',
            textAlign: 'center',
            fontSize: { xs: '1.75rem', md: '2.125rem' }
          }}>
            Platform Statistics
          </Typography>

          <Grid container spacing={{ xs: 2, md: 5 }} justifyContent="center">
            {stats.map((stat) => (
              <Grid item xs={12} sm={6} md={4} key={stat.id} sx={{
                display: 'flex',
              }}>
                <Box sx={{
                  width: { xs: '100%', sm: '280px' },
                  maxWidth: 340,
                  height: '100%',
                  minHeight: 220,
                  borderRadius: 5,
                  background: 'transparent',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'visible',
                  position: 'relative',
                  mt: 4,
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  "&:hover": {
                    transform: 'scale(1.05)',
                  }
                }}>
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 80,
                    height: 80,
                    borderRadius: '24px',
                    background: 'linear-gradient(135deg, rgba(57, 175, 94, 0.1) 0%, rgba(57, 175, 94, 0.05) 100%)',
                    border: '1px solid rgba(57, 175, 94, 0.2)',
                    color: "#39af5e",
                    flexShrink: 0
                  }}>
                    {stat.icon}
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <Typography variant="h3" sx={{
                      color: "#1e1e1e",
                      fontWeight: 800,
                      fontSize: { xs: '2rem', md: '2.8rem' },
                      lineHeight: 1,
                      mb: 0.5,
                      background: 'linear-gradient(90deg, #1e1e1e, #39af5e)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}>
                      {stat.value}
                    </Typography>
                    <Typography variant="subtitle1" sx={{
                      color: "#666",
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      fontSize: { xs: '0.85rem', md: '0.95rem' }
                    }}>
                      {stat.title}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      <Container sx={{ textAlign: 'center', marginTop: { xs: 0, md: 5 }, fontFamily: "Outfit" }}>
        <Typography variant="h4" sx={{
          marginBottom: 4, color: '#39af5e', fontFamily: "Outfit sans-serif",
          fontSize: { xs: '1.60rem', md: '2.125rem' }
        }}>
          Find your Special Someone
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {features.map((feature) => (
            <Grid item xs={12} sm={4} key={feature.id}>
              <Badge
                badgeContent={feature.id}
                color="error"
                overlap="circular"
                sx={{
                  '& .MuiBadge-badge': {
                    fontSize: '1rem',
                    height: '24px',
                    minWidth: '24px',
                    borderRadius: '50%',
                    top: 10,
                    right: 10,
                    backgroundColor: '#fff',
                    color: '#000',
                    border: '2px solid #39af5e',
                  },
                }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    padding: 3,
                    borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%', // organic blob shape
                    background: 'linear-gradient(135deg, rgba(57, 175, 94, 0.2) 0%, rgba(23, 84, 40, 0.1) 100%)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 100,
                    height: 100,
                    margin: '0 auto',
                    position: 'relative',
                    transition: 'all 0.4s ease',
                    "&:hover": {
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #39af5e 0%, #1e6b36 100%)',
                      transform: 'scale(1.1) rotate(10deg)',
                      boxShadow: '0 15px 30px rgba(57, 175, 94, 0.3)',
                    },
                    "&:hover svg": {
                      color: "#fff !important",
                    }
                  }}
                >
                  {feature.icon && React.cloneElement(feature.icon, { style: { fontSize: 45, color: '#39af5e', transition: 'color 0.4s' } })}
                </Paper>
              </Badge>
              <Box sx={{ marginTop: 3 }}>
                <Typography variant="h6" sx={{ color: '#39af5e', fontFamily: "Outfit sans-serif" }}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#777', fontFamily: "Outfit sans-serif" }}>
                  {feature.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default Connect;