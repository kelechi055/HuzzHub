import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  IconButton,
  Box,
  Typography,
  Stack,
  TextField,
} from '@mui/material';
import { GitHub, Logout, Home, Close } from '@mui/icons-material';

const Sidebar = ({ open, onClose, messages = [] }) => {
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
      <Box display="flex" justifyContent="space-between" alignItems="center">
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
        <IconButton onClick={onClose} sx={{ color: 'white' }}>
          <Close />
        </IconButton>
      </Box>
      <Typography
        variant="body2"
        color="gray"
        sx={{
          fontFamily: "'Roboto', sans-serif",
          padding: '0 24px',
          marginBottom: 2,
        }}
      >
        Empower your workflow!
      </Typography>
      <List>
        <ListItem
          component="a"
          href="/"
          sx={{ '&:hover': { backgroundColor: '#333' } }}
        >
          <IconButton sx={{ color: 'white', marginRight: 2 }}>
            <Home />
          </IconButton>
          <ListItemText
            primary="Home"
            sx={{ color: 'white', fontWeight: '500' }}
          />
        </ListItem>
        <Divider sx={{ borderColor: '#444' }} />
        <ListItem
          component="a"
          href="https://github.com/kelechi055/HuzzHub/tree/main"
          target="_blank"
          sx={{ '&:hover': { backgroundColor: '#333' } }}
        >
          <IconButton sx={{ color: 'white', marginRight: 2 }}>
            <GitHub />
          </IconButton>
          <ListItemText
            primary="GitHub"
            sx={{ color: 'white', fontWeight: '500' }}
          />
        </ListItem>
        <Divider sx={{ borderColor: '#444' }} />
        <Typography
          variant="h6"
          color="white"
          sx={{ fontWeight: '500', marginBottom: 1 }}
        >
          Recent Conversations
        </Typography>
        <Stack
          spacing={2}
          sx={{
            maxHeight: 'calc(100vh - 380px)',
            overflowY: 'auto',
            paddingRight: 1,
          }}
        >
          {messages?.map((msg, index) => (
            <React.Fragment key={index}>
              <ListItem
                sx={{
                  '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' },
                }}
              >
                <Box
                  bgcolor={msg.role === 'assistant' ? '#444' : '#666'}
                  color="white"
                  borderRadius={16}
                  p={2}
                  width="100%"
                  sx={{
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                    boxShadow: 2,
                    transition: 'all 0.3s ease',
                    '&:hover': { transform: 'scale(1.02)' },
                  }}
                >
                  {msg.content}
                </Box>
              </ListItem>
              <Divider sx={{ borderColor: '#444' }} />
            </React.Fragment>
          ))}
        </Stack>
        <Divider sx={{ borderColor: '#444' }} />
        <ListItem
          sx={{ marginTop: 'auto', '&:hover': { backgroundColor: '#333' } }}
        >
          <Typography
            variant="body1"
            color="white"
            fontWeight="bold"
            sx={{ fontSize: '1rem' }}
          >
            <Logout sx={{ marginRight: 1 }} />
            Log Out
          </Typography>
        </ListItem>
      </List>
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          padding: 1,
        }}
      >
        <Divider sx={{ borderColor: '#444' }} />
        <Typography
          variant="caption"
          color="white"
          align="center"
          sx={{ paddingTop: 1 }}
        >
          &copy; 2024 HuzzHub. All rights reserved.
        </Typography>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
