<<<<<<< HEAD

=======
import React from 'react';
>>>>>>> 86e228c (New design)
import { Container, Typography, Grid, Box, Paper, Badge, Card, CardContent } from '@mui/material';
import { FaUserEdit, FaUsers, FaComments, FaUserFriends, FaCalendarWeek, FaCalendarAlt, FaUserPlus } from 'react-icons/fa';
import { useGetDashboardStats } from '../api/Auth';

<<<<<<< HEAD

=======
>>>>>>> 86e228c (New design)
const Connect = () => {
  const { data: dashboardstats } = useGetDashboardStats();
  
const stats = [
    {
      id: 1,
      title: 'Profiles',
<<<<<<< HEAD
      value: `${dashboardstats?.stats?.totalProfiles || 0} +`,
      icon: <FaUserFriends style={{ fontSize: 40, color: 'var(--primary-text-color)' }} />,
      color: '#f8f9fa',
      textColor: 'var(--primary-text-color)',
=======
      value: `${dashboardstats?.stats?.totalProfiles || 0}`,
      icon: <FaUserFriends style={{ fontSize: 40, color: '#5e0476' }} />,
      color: '#f8f9fa',
      textColor: 'rgb(192, 9, 88)',
>>>>>>> 86e228c (New design)
     
    },
    {
      id: 2,
<<<<<<< HEAD
      title: 'This Week Registrations',
      value: `${dashboardstats?.stats?.thisWeekRegistrations || 0} +`,
      icon: <FaCalendarWeek style={{ fontSize: 40, color: 'var(--primary-text-color)' }} />,
      color: '#f8f9fa',
      textColor: 'var(--primary-text-color)',
=======
      title: 'This Week',
      value: `${dashboardstats?.stats?.thisWeekRegistrations || 0}`,
      icon: <FaCalendarWeek style={{ fontSize: 40, color: '#5e0476' }} />,
      color: '#f8f9fa',
      textColor: '#00bcd4',
>>>>>>> 86e228c (New design)
      
    },
    {
      id: 3,
<<<<<<< HEAD
      title: 'This Month Registrations',
      value: `${dashboardstats?.stats?.thisMonthRegistrations || 0} +`,
      icon: <FaCalendarAlt style={{ fontSize: 40, color: 'var(--primary-text-color)' }} />,
      color: '#f8f9fa',
      textColor: 'var(--primary-text-color)',
=======
      title: 'This Month',
      value: `${dashboardstats?.stats?.thisMonthRegistrations || 0}`,
      icon: <FaCalendarAlt style={{ fontSize: 40, color: '#5e0476' }} />,
      color: '#f8f9fa',
      textColor: '#ff5a5f',
>>>>>>> 86e228c (New design)
     
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
<<<<<<< HEAD
    maxWidth: 1200,
=======
    maxWidth: "100%",
>>>>>>> 86e228c (New design)
    mx: 'auto',
    px: { xs: 2, sm: 4 },
  }}>
    <Typography variant="h4" sx={{ 
     
<<<<<<< HEAD
      color: 'var( --primary-text-color)', 
      fontWeight: 600,
=======
      color: '#5e0476', 
>>>>>>> 86e228c (New design)
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
          <Card sx={{ 
<<<<<<< HEAD
            width: '100%',
            height: '100%',
            minHeight: 220,
            borderRadius: 3,
            backgroundColor: 'transparent', // Remove card background
            boxShadow: 'none', // Remove shadow
            display: 'flex',
            flexDirection: 'column',
            border: 'none',
             // Remove border if any
=======
             width: { xs: '100%', sm: '280px' }, 
             maxWidth: 340,
            height: '100%',
            minHeight: 220,
            borderRadius: 3,
            backgroundColor: 'transparent', 
            boxShadow: 'none', 
            display: 'flex',
            flexDirection: 'column',
            border: 'none',
            
>>>>>>> 86e228c (New design)
          }}>
            <CardContent sx={{ 
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
<<<<<<< HEAD
              p: { xs: 3, md: 4 },
=======
              p: { xs: 3, md: 3 },
>>>>>>> 86e228c (New design)
            }}>
              <Box sx={{ 
                display: 'inline-flex',
                p: 2,
<<<<<<< HEAD
                mb: 3,
                borderRadius: '50%',
                backgroundColor: `${stat.textColor}20`
=======
                mb: 2,
                borderRadius: '50%',
                color: "#5e0476"
>>>>>>> 86e228c (New design)
              }}>
                {stat.icon}
              </Box>
              <Typography variant="h6" sx={{ 
<<<<<<< HEAD
                color: stat.textColor,
                fontWeight: 600,
                mb: 2,
                fontSize: { xs: '1.1rem', md: '1.25rem' }
=======
                color: "gray",
                fontWeight: 600,
                mb: 1.5,
                fontSize: { xs: '1.1rem', md: '1.30rem' }
>>>>>>> 86e228c (New design)
              }}>
                {stat.title}
              </Typography>
              <Typography variant="h4" sx={{ 
<<<<<<< HEAD
                color: stat.textColor,
                fontWeight: 700,
                fontSize: { xs: '2rem', md: '2.5rem' },
=======
                color: "#000",
                fontWeight: 700,
                fontSize: { xs: '1.5rem', md: '1.7rem' },
>>>>>>> 86e228c (New design)
                lineHeight: 1.2
              }}>
                {stat.value}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
</Container>

<<<<<<< HEAD
      <Container sx={{ textAlign: 'center', marginTop: 5, fontFamily: "Outfit" }}>
        <Typography variant="h4" sx={{ marginBottom: 4, color: 'var(--primary-text-color)', fontFamily: "Outfit sans-serif" }}>
=======
      <Container sx={{ textAlign: 'center', marginTop: {xs:0,md:5}, fontFamily: "Outfit" }}>
        <Typography variant="h4" sx={{ marginBottom: 4, color: '#5e0476', fontFamily: "Outfit sans-serif",
           fontSize: { xs: '1.60rem', md: '2.125rem' }
         }}>
>>>>>>> 86e228c (New design)
          Find your Special Someone
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {features.map((feature) => (
            <Grid item xs={12} sm={4} key={feature.id}>
              <Badge
                badgeContent={feature.id}
<<<<<<< HEAD
                color="var(--primary-text-color)"
=======
                color="error"
>>>>>>> 86e228c (New design)
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
<<<<<<< HEAD
                    color: 'var(--primary-text-color)',
                    border: '2px solid #00bcd4',
=======
                    color: '#000',
                    border: '2px solid #5e0476',
>>>>>>> 86e228c (New design)
                  },
                }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    padding: 3,
                    borderRadius: '50%',
<<<<<<< HEAD
                    background: 'var(--primary-color)',
=======
                    backgroundColor: '#5e0476',
>>>>>>> 86e228c (New design)
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 90,
                    height: 90,
                    margin: '0 auto',
                  }}
                >
                  {feature.icon}
                </Paper>
              </Badge>
              <Box sx={{ marginTop: 2 }}>
<<<<<<< HEAD
                <Typography variant="h6" sx={{ color: 'var(--primary-text-color)', fontFamily: "Outfit sans-serif" }}>
=======
                <Typography variant="h6" sx={{ color: '#5e0476', fontFamily: "Outfit sans-serif" }}>
>>>>>>> 86e228c (New design)
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