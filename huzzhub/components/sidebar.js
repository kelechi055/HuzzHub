import React from 'react';
import { Drawer, List, ListItem, ListItemText, Divider, IconButton, Box, SvgIcon, Button } from '@mui/material';
import Image from 'next/image';

const GitHubIcon = () => (
  <SvgIcon>
    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 3.17 8.14 7.53 9.48.55.1.75-.24.75-.53v-1.97c-3.04.66-3.67-1.32-3.67-1.32-.49-1.24-1.21-1.57-1.21-1.57-.99-.68.07-.66.07-.66 1.1.08 1.68 1.14 1.68 1.14 1.24 2.12 3.25 1.51 4.03 1.15.12-.9.49-1.51.89-1.86-2.99-.34-6.12-1.5-6.12-6.67 0-1.47.53-2.68 1.4-3.62-.14-.34-.61-1.73.13-3.6 0 0 1.14-.36 3.72 1.35a12.78 12.78 0 0 1 3.38-.46c1.14 0 2.28.16 3.38.46 2.58-1.71 3.72-1.35 3.72-1.35.74 1.87.27 3.26.13 3.6.87.94 1.4 2.15 1.4 3.62 0 5.17-3.13 6.33-6.12 6.67.41.35.78 1.04.78 2.08v3.11c0 .29.2.63.75.53 4.36-1.34 7.53-5.07 7.53-9.48 0-5.52-4.48-10-10-10z" />
  </SvgIcon>
);

const Sidebar = ({ open, onClose, messages, clearMessages, chatSummary }) => {
  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={open}
      onClose={onClose}
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
          backgroundColor: '#f5f5f5', // Light gray background for better readability
        },
      }}
    >
      <List>
        <ListItem button onClick={onClose}>
          <ListItemText primary="Menu" />
        </ListItem>
        <Divider />
        <ListItem>
          <IconButton
            component="a"
            href="https://github.com/kelechi055/HuzzHub"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
          >
            <GitHubIcon />
          </IconButton>
          <ListItemText primary="GitHub" />
        </ListItem>
        <Divider />
        <ListItem>
          <Box display="flex" alignItems="center">
            <Image src="/chatgpt-app/chatgpt-logo.png" alt="ChatGPT Logo" width={24} height={24} />
            <ListItemText primary="Chat Summary" sx={{ marginLeft: 1, color: '#333' }} />
          </Box>
        </ListItem>
        <Divider />
        <ListItem>
          <Box
            bgcolor="#e0e0e0" // Light background for contrast
            color="#333" // Darker text color
            borderRadius={8}
            p={2}
            width="100%"
            sx={{
              fontSize: '0.9rem', // Readable font size
              textAlign: 'center',
            }}
          >
            {chatSummary || "No chat summary available."} {/* Show chat summary or placeholder */}
          </Box>
        </ListItem>
        <Divider />
        <ListItem>
          <Button
            variant="contained"
            color="secondary"
            onClick={clearMessages}
            sx={{
              width: '100%',
              backgroundColor: '#1976d2', // Primary blue color
              color: '#fff',
              '&:hover': {
                backgroundColor: '#115293', // Darker blue on hover
              },
            }}
          >
            Clear Chat
          </Button>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
