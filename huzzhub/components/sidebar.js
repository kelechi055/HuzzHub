import React from 'react';
import { Drawer, List, ListItem, ListItemText, Divider, IconButton, Box, Typography, Stack, TextField } from '@mui/material';
import { GitHub, Logout, Home, History, Settings, Help } from '@mui/icons-material';

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
      <List>
        {/* HuzzHub Branding */}
        <ListItem sx={{ padding: 0 }}>
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
        </ListItem>
        <Divider sx={{ borderColor: '#444' }} />

        {/* Home Button */}
        <ListItem sx={{ '&:hover': { backgroundColor: '#333' } }}>
          <IconButton sx={{ color: 'white', marginRight: 2 }}>
            <Home />
          </IconButton>
          <ListItemText primary="Home" sx={{ color: 'white', fontWeight: '500' }} />
        </ListItem>

        {/* History Button */}
        <ListItem sx={{ '&:hover': { backgroundColor: '#333' } }}>
          <IconButton sx={{ color: 'white', marginRight: 2 }}>
            <History />
          </IconButton>
          <ListItemText primary="History" sx={{ color: 'white', fontWeight: '500' }} />
        </ListItem>

        {/* Search Bar */}
        <ListItem>
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            placeholder="Search messages..."
            sx={{
              backgroundColor: '#333',
              borderRadius: '8px',
              input: { color: 'white' },
              '& .MuiOutlinedInput-root': { borderColor: '#444' },
              '& .MuiInputBase-input': { padding: '5px' },
            }}
          />
        </ListItem>
        <Divider sx={{ borderColor: '#444' }} />

        {/* GitHub Link */}
        <ListItem sx={{ '&:hover': { backgroundColor: '#333' } }}>
          <IconButton sx={{ color: 'white', marginRight: 2 }}>
            <GitHub />
          </IconButton>
          <ListItemText primary="GitHub" sx={{ color: 'white', fontWeight: '500' }} />
        </ListItem>

        <Divider sx={{ borderColor: '#444' }} />

        {/* Recent Conversations */}
        <Typography variant="h6" color="white" sx={{ fontWeight: '500', marginBottom: 1 }}>
          Recent Conversations
        </Typography>
        <Stack spacing={2} sx={{ maxHeight: 'calc(100vh - 380px)', overflowY: 'auto', paddingRight: 1 }}>
          {messages.map((msg, index) => (
            <React.Fragment key={index}>
              <ListItem sx={{ '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' } }}>
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

        {/* Settings Button */}
        <ListItem sx={{ '&:hover': { backgroundColor: '#333' } }}>
          <IconButton sx={{ color: 'white', marginRight: 2 }}>
            <Settings />
          </IconButton>
          <ListItemText primary="Settings" sx={{ color: 'white', fontWeight: '500' }} />
        </ListItem>

        {/* Help Button */}
        <ListItem sx={{ '&:hover': { backgroundColor: '#333' } }}>
          <IconButton sx={{ color: 'white', marginRight: 2 }}>
            <Help />
          </IconButton>
          <ListItemText primary="Help" sx={{ color: 'white', fontWeight: '500' }} />
        </ListItem>

        {/* Log Out Button */}
        <ListItem sx={{ marginTop: 'auto', '&:hover': { backgroundColor: '#333' } }}>
          <Typography variant="body1" color="white" fontWeight="bold" sx={{ fontSize: '1rem' }}>
            <Logout sx={{ marginRight: 1 }} />
            Log Out
          </Typography>
        </ListItem>
      </List>

      {/* Footer */}
      <Box sx={{ position: 'absolute', bottom: 0, width: '100%', padding: 1 }}>
        <Divider sx={{ borderColor: '#444' }} />
        <Typography variant="caption" color="white" align="center" sx={{ paddingTop: 1 }}>
          &copy; 2024 HuzzHub. All rights reserved.
        </Typography>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
