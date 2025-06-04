import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Paper,
} from '@mui/material';
import {
  School,
  Event,
  EmojiEvents,
  Groups,
  SportsSoccer,
  Pool,
  LocalHospital,
  AccountBalance,
} from '@mui/icons-material';

const HomePage = () => {
  const testimonials = [
    {
      text: "I really fulfilled with my child with your training. My child develop in all areas. Thanks to all teachers.",
      author: "Anbu",
      relation: "Mother of Sri Rukshitha Krishnaa",
      grade: "Grade 1"
    },
    {
      text: "We really like the school. Teachers are kind and polite to kid. Thanks to all teachers.",
      author: "Jelica",
      relation: "Mother of Clarvin Joe.A",
      grade: "Grade 1"
    },
    // Add more testimonials as needed
  ];

  const facilities = [
    {
      title: "Sports Grounds",
      description: "The playgrounds, games pitches and courts are all set in standard measurements to ensure that the physical fitness of students...",
      icon: <SportsSoccer sx={{ fontSize: 40 }} />,
      image: "/images/sports.jpg"
    },
    {
      title: "Swimming Pool",
      description: "EPS houses a half Olympic-size standard Swimming Pool for middle school and a tailor-made Splash Pool for the Kindergarten...",
      icon: <Pool sx={{ fontSize: 40 }} />,
      image: "/images/pool.jpg"
    },
    {
      title: "Medical Facilities",
      description: "A well-equipped infirmary with caring paramedical staff is available throughout the day for needy students...",
      icon: <LocalHospital sx={{ fontSize: 40 }} />,
      image: "/images/medical.jpg"
    },
    // Add more facilities as needed
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" gutterBottom>
            Exceptional Academic care designed for real life
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            Welcome to Our School
          </Typography>
          <Button variant="contained" color="secondary" size="large" sx={{ mt: 2 }}>
            Apply Now
          </Button>
        </Container>
      </Box>

      {/* Vision & Mission */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
              <Typography variant="h4" gutterBottom>
                Our Vision
              </Typography>
              <Typography>
                To Nurture the holistic growth of every child, by facilitating an environment highly conducive for promoting and fostering curiosity and self-discovery as the first step to a lifetime of learning.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
              <Typography variant="h4" gutterBottom>
                Our Mission
              </Typography>
              <Typography component="div">
                <ul>
                  <li>To provide a conductive ambience for exploring and bringing out the innate talents in each student.</li>
                  <li>To develop a sustainable environment for innovative learning.</li>
                  <li>To train young minds with values, culture, integrity, innovation and leadership.</li>
                </ul>
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Facilities Section */}
      <Box sx={{ bgcolor: 'grey.100', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" gutterBottom textAlign="center">
            Our Facilities
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            {facilities.map((facility, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card sx={{ height: '100%' }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={facility.image}
                    alt={facility.title}
                  />
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      {facility.icon}
                      <Typography variant="h5" component="h3" sx={{ ml: 1 }}>
                        {facility.title}
                      </Typography>
                    </Box>
                    <Typography variant="body1">
                      {facility.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" gutterBottom textAlign="center">
          Parents Testimonials
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
                <Typography variant="body1" gutterBottom>
                  "{testimonial.text}"
                </Typography>
                <Typography variant="subtitle1" sx={{ mt: 2 }}>
                  {testimonial.author}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {testimonial.relation}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {testimonial.grade}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Contact Section */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" gutterBottom>
                Contact Us
              </Typography>
              <Typography variant="body1" paragraph>
                NH-544, Salem Main Road, Sankari West, Komarapalayam,
                Namakkal (Dt). Tamilnadu – Pin:637 303.
              </Typography>
              <Typography variant="body1" paragraph>
                Phone: +91 78259 55999
              </Typography>
              <Typography variant="body1">
                Email: epsadmin@excelcolleges.com
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" gutterBottom>
                Quick Links
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Button color="inherit" fullWidth>
                    Welcome to EPS
                  </Button>
                  <Button color="inherit" fullWidth>
                    Vision and Mission
                  </Button>
                  <Button color="inherit" fullWidth>
                    Why EPS
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button color="inherit" fullWidth>
                    Curriculum
                  </Button>
                  <Button color="inherit" fullWidth>
                    Academic Calendar
                  </Button>
                  <Button color="inherit" fullWidth>
                    Admission Process
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage; 