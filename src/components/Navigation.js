import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Home,
  School,
  Book,
  Person,
  Announcement,
  Event,
  EmojiEvents,
  PhotoLibrary,
  Groups,
  People,
  Download,
  ContactPhone,
} from '@mui/icons-material';

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const primaryNavItems = [
    { text: 'Home', icon: <Home />, path: '/' },
    { text: 'About Us', icon: <School />, path: '/about' },
    { text: 'Academics', icon: <Book />, path: '/academics' },
    { text: 'Admissions', icon: <Person />, path: '/admissions' },
    { text: 'Notices', icon: <Announcement />, path: '/notices' },
    { text: 'Events', icon: <Event />, path: '/events' },
    { text: 'Achievements', icon: <EmojiEvents />, path: '/achievements' },
    { text: 'Gallery', icon: <PhotoLibrary />, path: '/gallery' },
    { text: 'Clubs', icon: <Groups />, path: '/clubs' },
    { text: 'Alumni', icon: <People />, path: '/alumni' },
    { text: 'Downloads', icon: <Download />, path: '/downloads' },
    { text: 'Contact', icon: <ContactPhone />, path: '/contact' },
  ];

  const quickAccessItems = [
    { text: 'Online Admission Form', icon: '📝', path: '/admission-form' },
    { text: 'Download Prospectus', icon: '📥', path: '/prospectus' },
    { text: 'Latest Circulars', icon: '📢', path: '/circulars' },
    { text: 'Parent Login', icon: '🖥️', path: '/parent-login' },
    { text: 'Career', icon: '💼', path: '/careers' },
    { text: 'Help/FAQs', icon: '🆘', path: '/help' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List>
      {primaryNavItems.map((item) => (
        <ListItem button key={item.text}>
          {item.icon}
          <ListItemText primary={item.text} sx={{ ml: 1 }} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <>
      <AppBar position="sticky" color="primary">
        <Toolbar>
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            CBSE School
          </Typography>
          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 1 }}>
              {primaryNavItems.map((item) => (
                <Button
                  key={item.text}
                  color="inherit"
                  startIcon={item.icon}
                  sx={{ textTransform: 'none' }}
                >
                  {item.text}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </Drawer>

      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#f5f5f5',
              }}
            >
              <Typography variant="h6" gutterBottom>
                Quick Access
              </Typography>
              <Grid container spacing={2}>
                {quickAccessItems.map((item) => (
                  <Grid item xs={12} sm={6} md={4} key={item.text}>
                    <Button
                      variant="contained"
                      fullWidth
                      startIcon={<span>{item.icon}</span>}
                      sx={{
                        justifyContent: 'flex-start',
                        textTransform: 'none',
                        height: '48px',
                      }}
                    >
                      {item.text}
                    </Button>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Navigation; 