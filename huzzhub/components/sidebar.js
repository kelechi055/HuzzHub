import React from 'react';
import { Drawer, List, Divider, IconButton, Box, Typography } from '@mui/material';
import { GitHub, Home, Close } from '@mui/icons-material';
import Link from 'next/link';

const Sidebar = ({ open, onClose, messages }) => {
  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={open}
      onClose={onClose}
      sx={{
        width: 280,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 280,
          boxSizing: 'border-box',
          backgroundColor: 'black',
          color: 'white',
          padding: 2,
          transition: 'all 0.3s ease-in-out',
          borderRight: '1px solid #444',
        },
      }}
    >
      <Box>
        {/* Close Button */}
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            top: 10,
            right: 10,
            color: 'white',
          }}
        >
          <Close />
        </IconButton>

        {/* HuzzHub Branding */}
        <Typography
          variant="h5"
          color="white"
          sx={{
            fontFamily: "'A Alloy Ink Regular', sans-serif",
            fontWeight: 'bold',
            fontSize: '2rem',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            padding: '16px 24px',
          }}
        >
          HuzzHub
        </Typography>

        {/* Rizz Huzz, Secure Gyatt */}
        <Typography
          variant="body1"
          color="white"
          sx={{
            fontFamily: "'A Alloy Ink Regular', sans-serif",
            fontWeight: 'bold',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            padding: '8px 24px',
            marginTop: 2,
          }}
        >
          Rizz Huzz, Secure Gyatt
        </Typography>
        
        <Divider sx={{ borderColor: '#444' }} />

        {/* Home and GitHub buttons */}
        <Link href="/" passHref>
          <Box
            sx={{
              '&:hover': { backgroundColor: '#333' },
              paddingLeft: 2,
              display: 'flex',
              alignItems: 'center',
              paddingY: 1,
              cursor: 'pointer',
            }}
          >
            <IconButton sx={{ color: 'white', marginRight: 2 }}>
              <Home />
            </IconButton>
            <Typography variant="body1" color="white" fontWeight="500">
              Home
            </Typography>
          </Box>
        </Link>

        <Link href="https://github.com/kelechi055/HuzzHub/tree/main" passHref>
          <Box
            sx={{
              '&:hover': { backgroundColor: '#333' },
              paddingLeft: 2,
              display: 'flex',
              alignItems: 'center',
              paddingY: 1,
              cursor: 'pointer',
            }}
          >
            <IconButton sx={{ color: 'white', marginRight: 2 }}>
              <GitHub />
            </IconButton>
            <Typography variant="body1" color="white" fontWeight="500">
              GitHub
            </Typography>
          </Box>
        </Link>

        <Divider sx={{ borderColor: '#444' }} />

        {/* Motivation Header */}
        <Typography
          variant="h6"
          color="white"
          sx={{
            fontFamily: "'A Alloy Ink Regular', sans-serif",
            fontWeight: 'bold',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            padding: '8px 24px',
            marginTop: 2,
          }}
        >
          Motivation
        </Typography>

        {/* Motivational Text */}
        <Box
          bgcolor="#444"
          color="white"
          borderRadius={16}
          p={2}
          width="100%"
          sx={{
            boxShadow: 2,
            transition: 'all 0.3s ease',
            '&:hover': { transform: 'scale(1.02)' },
            marginTop: 2,
          }}
        >
          "Tired of losing the Huzz, lock in and grind HuzzHub"
        </Box>

        <Divider sx={{ borderColor: '#444' }} />

        {/* Our Inspiration Header */}
        <Typography
          variant="h6"
          color="white"
          sx={{
            fontFamily: "'A Alloy Ink Regular', sans-serif",
            fontWeight: 'bold',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            padding: '8px 24px',
            marginTop: 2,
          }}
        >
          Our Inspiration
        </Typography>

        {/* Images */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: 2,
            paddingBottom: 2,
          }}
        >
          <img
            src="https://pbs.twimg.com/media/FeBFFo-XgAEBlAX.jpg:large"
            alt="Motivational Image 1"
            style={{
              width: '80%', // Make the image smaller
              borderRadius: '8px',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
              marginBottom: '16px', // Space between the images
            }}
          />
          <img
            src="https://substackcdn.com/image/fetch/w_640,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F64ac6e19-e62b-43af-9294-c285966fb0cf_1080x1920.jpeg"
            alt="Motivational Image 2"
            style={{
              width: '80%', // Make the image smaller
              borderRadius: '8px',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
            }}
          />
        </Box>

        {/* Copyright */}
        <Box sx={{ padding: '16px 24px', paddingTop: 2 }}>
          <Divider sx={{ borderColor: '#444' }} />
          <Typography variant="caption" color="white" align="center" sx={{ paddingTop: 1 }}>
            &copy; 2024 HuzzHub. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
