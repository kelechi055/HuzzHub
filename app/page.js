'use client';
import Image from "next/image";
import { Box, AppBar, Toolbar, Button, IconButton, Drawer, List, ListItem, ListItemText, Typography, Link } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu'; 
import CloseIcon from "@mui/icons-material/Close";
import { grey } from '@mui/material/colors';
import { useEffect, useState } from "react";
import { Head } from "next/head";
import TrustedBy from "@/components/trusted";
import Testimonial1 from "@/components/testimonial";
import './globals.css';

export default function Home() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  return (
    <Box 
      sx={{ 
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundImage: 'url(/background.png)', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        fontFamily: 'Inter',
        padding: 0,
        margin: 0
      }}
    >

      {/* Navbar with AppBar */}
      <AppBar position="static" sx={{ background: "transparent", boxShadow: "none", py: 1 }}>
      <Toolbar sx={{ justifyContent: "space-between", alignItems: "center" }}>
        {/* Left Section: Logo */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton edge="start" href="/">
            <Image src="/logo.png" alt="HuzzHub Logo" width={200} height={40} style={{ marginRight: '0px', marginTop: '-30px' }} priority />
            </IconButton>
            <IconButton edge="start">
              <Image src="/h-logo.png" alt="Just a chill guy :) Logo" width={40} height={40} style={{ marginRight: '0px', marginTop: '-50px' }} /> 
            </IconButton>
          </Box>

        {/* Right Section: Navigation */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 2,
          }}
        >
          <Button
            href="/"
            sx={{
              fontSize: '1rem',
              color: "#999999",
              textTransform: "none",
              fontWeight: "500",
              marginTop: '-50px',
              "&:hover": { color: "#fff" },
            }}
          >
            Home
          </Button>
          <Button
            onClick={() => {
              const element = document.getElementById("features");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            sx={{
              fontSize: '1rem',
              color: "#999999",
              textTransform: "none",
              fontWeight: "500",
              marginTop: '-50px',
              "&:hover": { color: "#fff" },
            }}
          >
            Features
          </Button>
          <Button
            onClick={() => {
              const element = document.getElementById("testimonials");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            sx={{
              fontSize: "1rem",
              color: "#999999",
              textTransform: "none",
              fontWeight: "500",
              marginTop: '-50px',
              "&:hover": { color: "#fff" },
            }}
          >
            Testimonials
          </Button>
          <Button
            href="/chat"
            sx={{
              fontSize: "1rem",
              color: "#999999",
              textTransform: "none",
              fontWeight: "500",
              marginTop: '-50px',
              "&:hover": { color: "#fff" },
            }}
          >
            AI Chatbot
          </Button>
        </Box>

        {/* Mobile Menu Button */}
        <IconButton
          onClick={toggleMenu}
          sx={{
            display: { xs: "flex", md: "none" },
            color: "#999999",
          }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* Drawer for Mobile Menu */}
      <Drawer
        anchor="right"
        open={menuOpen}
        onClose={toggleMenu}
        PaperProps={{
          sx: {
            backgroundColor: "#1a1a1a",
            color: "#fff",
            width: 250,
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
          <IconButton onClick={toggleMenu} sx={{ color: "#fff" }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          <ListItem button component="a" href="/" onClick={toggleMenu}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              const element = document.getElementById("features");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
                toggleMenu();
              }
            }}
          >
            <ListItemText primary="Features" />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              const element = document.getElementById("testimonials");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
                toggleMenu();
              }
            }}
          >
            <ListItemText primary="Testimonials" />
          </ListItem>
          <ListItem button component="a" href="/chat" onClick={toggleMenu}>
            <ListItemText primary="AI Chatbot" />
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
      {/* Navbar End */}
      
      {/* Hero Section */}
      <Box id="home" sx={{ flex: 1, textAlign: 'center', my: 4, color: 'white', font: 'Inter' }}>
        <br></br>
        <button
    style={{
    background: 'linear-gradient(to left, #C0A252, #A58A47)',
    backgroundSize: '200% 200%',
    animation: 'rainbow-animation 10s ease infinite',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '50px',
    color: 'white',
    cursor: 'pointer',
    fontSize: '12px',
  }}
>
  💫 | Introducing HuzzHub
</button>

        <Typography
          variant="h1"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            fontFamily: 'Inter',
            fontSize: { xs: '2.170rem', sm: '3rem', md: '4.5rem' },
            lineHeight: { xs: '3rem', sm: '3.5rem', md: '4.5rem' },
            animation: 'SlidesDown 2s ease-in-out',
            mx: { xs: 2, sm: 4 },
            px: 2,
            whiteSpace: 'nowrap',
            position: 'relative',
          }}
        >
          <br />
          Rizz Up The Huzz&nbsp;
        </Typography>
        <Typography
          variant="h1"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            fontFamily: 'Inter',
            fontSize: { xs: '2.5rem', sm: '3rem', md: '4.5rem' },
            lineHeight: { xs: '3rem', sm: '3.5rem', md: '4.5rem' },
            animation: 'slideDown 2s ease-in-out',
            mx: { xs: 2, sm: 4 },
            px: 2,
          }}
        >
          With AI 
        </Typography>

        <br></br>
        <br></br>
        <br></br>
        <Typography 
          variant="h6" 
          component="h2" 
          gutterBottom 
          sx={{ 
            fontWeight: 'light', 
            fontFamily: 'Inter',
            maxWidth: { xs: '90%', sm: '70%', md: '50%' }, 
            textAlign: 'center', 
            margin: '0 auto',
            fontSize: { xs: '0.875rem', sm: '1rem', md: '1.25rem' },
            animation: 'fadeIn 4s ease-in-out',
            px: 2 
          }}
        >
          Unlock your full potential with HuzzHub, the ultimate meme-powered AI assistant. 
          Let Chill Guy guide your conversations, drop iconic pick-up lines, and help you master the art of rizz with humor and style. 
          Laugh, learn, and level up your game—all in one chill hub.
        </Typography>
        <br></br>
        <TrustedBy />
        <br></br>
        <br></br>
        <br></br>
        <Button 
          variant="contained" 
          color="primary" 
          sx={{ 
            mt: 2, 
            fontSize: { xs: '1rem', sm: '1.2rem' }, 
            fontWeight: '500', 
            fontFamily: 'Inter',
            backgroundColor: 'white', 
            color: 'black', 
            animation: 'slideUp 4s ease-in-out',
            textTransform: 'none', 
            borderRadius: 2,
            px: 4,
            '&:hover': { 
              transform: 'scale(1.05)', 
              backgroundImage: 'linear-gradient(to bottom, #C0A252, black)', 
              color: 'white'
            }
          }} 
          href="/chat"
        >
          Start Rizzin&apos; 😼 {/* Escape the single quote */}
          <Image src={"/chillguy.png"} alt="Chill Guy" width={50} height={30} />
        </Button>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Box id="features" sx={{ py: 8, backgroundColor: "transparent", textAlign: "center" }}>
  <Typography
    variant="h2"
    sx={{
      fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
      fontWeight: "bold",
      color: "white",
      mb: 6,
    }}
  >
    Features
  </Typography>
  <Box
    sx={{
      maxWidth: "1200px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" },
      gap: 4,
      px: { xs: 2, md: 4 },
    }}
  >
    {/* Feature Cards */}
    {[
      {
        title: "AI Chatbot (Chill Guy)",
        description:
          "Talk with chill guy and maximize your charisma with girls through iconic pick-up lines and witty conversations.",
        icon: "/chillguypfp.png",
      },
      {
        title: "Master Rizz Strategies",
        description:
          "Learn proven strategies to master the art of charm and style effortlessly, become a huzz magnet.",
        icon: "/duke.png",
        audio: "/rizz.mp3",
      },
      {
        title: "Confidence Booster",
        description: "Get the best tips and tricks to boost your confidence in social situations.",
        icon: "/boost.png",
      },
    ].map((feature, index) => (
      <Box
        key={index}
        sx={{
          backgroundColor: "#FFFFFF",
          borderRadius: "12px",
          padding: 4,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
          "&:hover": {
            transform: "scale(1.05)",
            transition: "all 0.3s ease",
            boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.4)",
          },
        }}
        onMouseEnter={() => {
          if (feature.audio) {
            const audio = new Audio(feature.audio);
            audio.play();
          }
        }}
      >
        <Image
          src={feature.icon}
          alt={feature.title}
          width={64}
          height={64}
          style={{ margin: "0 auto", marginBottom: "16px" }}
        />
        <Typography
          variant="h5"
          sx={{
            fontSize: "1.2rem",
            fontWeight: "bold",
            color: "#333333",
            mb: 2,
          }}
        >
          {feature.title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "0.9rem",
            color: "#666666",
          }}
        >
          {feature.description}
        </Typography>
      </Box>
    ))}
  </Box>
</Box>


      </Box>

      <Testimonial1>
        <br></br>
      </Testimonial1>  
      <br></br>
      <h2
        className="text-3xl font-semibold tracking-tight text-white-900 sm:text-4xl lg:text-5xl"
        style={{ textAlign: "center" }}
      >
        If you&apos;re a chill guy, I suggest you start chatting... you don&apos;t wanna be like this guy.
      </h2>

        <br></br>
        <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 4,
        }}
      >
        <Image
          src="/notchillguy.png"
          alt="Dude Isn't chill... lame"
          width={200}
          height={200}
          style={{ borderRadius: "50%", animation: "bounce 2s infinite" }}
        />
      </Box>
        <Button 
          variant="contained" 
          color="primary" 
          sx={{ 
            mt: 2, 
            fontSize: { xs: '1rem', sm: '1.2rem' }, 
            fontWeight: '500', 
            fontFamily: 'Inter',
            backgroundColor: 'white', 
            color: 'black', 
            animation: 'slideUp 4s ease-in-out',
            textTransform: 'none', 
            borderRadius: 2,
            maxWidth: '300px',
            maxLength: '100px',
            mx: 'auto',
            alignItems: 'center',
            px: 4,
            '&:hover': { 
              transform: 'scale(1.05)', 
              backgroundImage: 'linear-gradient(to bottom, #C0A252, black)', 
              color: 'white'
            }
          }} 
          href="/chat"
        >
          Talk with Chill Guy
          <Image src={"/chillguy.png"} alt="Chill Guy" width={50} height={30} />
        </Button>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {/* Footer */}
      <Box sx={{ py: 1, textAlign: 'center'}}>
        <Typography 
          variant="h1" 
          color={grey[500]}
          sx={{ 
            color: '#E0E0E0', 
            fontFamily: 'Inter',
            fontWeight: 'light',
            fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' }
          }}
        >
          © 2024 HuzzHub. Built by{' '}
          <Link 
            color="inherit" 
            underline="hover" 
            sx={{ 
              fontWeight: 'bold', 
              color: 'white'
            }}
          >
            Some Chill Guys
          </Link> 
          . All rights reserved.
      </Typography>
      </Box>
    </Box>
  );
}
