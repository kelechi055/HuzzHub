'use client';

import { SignedIn, SignedOut, useUser } from "@clerk/nextjs";
import Sidebar from '../components/sidebar'; 
import {
  Box,
  Stack,
  TextField,
  Button,
  createTheme,
  ThemeProvider,
  IconButton,
} from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import MenuIcon from '@mui/icons-material/Menu'; 
import { useState } from "react";

const LakersTheme = createTheme({
  palette: {
    primary: {
      main: deepPurple[500],
      light: "#63a4ff",
      dark: "#004ba0",
      contrastText: "#fff",
    },
    secondary: {
      main: "yellow",
      light: "#d05ce3",
      dark: "#6a0080",
      contrastText: "#fff",
    },
    gradients: {
      primary: "linear-gradient(45deg, #9575cd 30%, #dce775 90%)",
      secondary: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    },
  },
});

export default function Home() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Chill Guy: Hello! I'm just a chill guy, the HuzzHub Assistant. How can I assist you today? Whether it's about our platform, rizz, the huzz, bruzz, anything! feel free to ask!",
    },
  ]);

  const [message, setMessage] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const updatedMessages = [
      ...messages, 
      { role: "user", content: message }, 
      { role: "assistant", content: "..." }
    ];

    setMessages(updatedMessages);
    setMessage("");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: updatedMessages.slice(0, -1) }), 
      });

      const result = await response.json();
      setMessages((prevMessages) => [
        ...prevMessages.slice(0, -1), 
        { role: "assistant", content: result.content }, 
      ]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setMessages((prevMessages) => [
        ...prevMessages.slice(0, -1), 
        { role: "assistant", content: "Error fetching response. Please try again." },
      ]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage(); // Trigger the sendMessage function when Enter is pressed
    }
  };

  return (
    <ThemeProvider theme={LakersTheme}>
      <Sidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        messages={messages}
      />

      <Box
        width="100%"
        height="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        sx={{ background: LakersTheme.palette.gradients.primary }}
      >
        {/* Menu icon at the top-left corner */}
        <IconButton
          onClick={() => setSidebarOpen(!sidebarOpen)}
          sx={{
            position: "absolute",
            top: "16px",
            left: "16px",
            color: "white",
          }}
        >
          <MenuIcon />
        </IconButton>

        <Box display="flex" flexDirection="row" alignItems="center">
          <Box
            sx={{
              height: 633,
              width: 400,
              marginRight: 2,
              backgroundSize: "cover",
              backgroundImage: "url(/huzzhub-assistant-image.png)",
              display: {
                sm: "none",
                md: "flex",
              },
            }}
            display="flex"
            justifyContent="center"
            alignItems="center"
          />
          <Stack
            direction="column"
            width="600px"
            height="600px"
            p={2}
            spacing={2}
          >
            <Stack
              direction="column"
              spacing={2}
              flexGrow={1}
              overflow="auto"
              maxHeight="100%"
            >
              {messages.map((msg, index) => (
                <Box
                  key={index}
                  display="flex"
                  justifyContent={msg.role === "assistant" ? "flex-start" : "flex-end"}
                  alignItems="center"
                  sx={{ marginBottom: 2 }}
                >
                  {msg.role === "assistant" && (
                    <Box
                      component="img"
                      src="/chillguypfp.png"
                      alt="Chill Guy"
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        marginRight: 1, 
                      }}
                    />
                  )}
                  <Box
                    bgcolor={
                      msg.role === "assistant"
                        ? "primary.main"
                        : "secondary.main"
                    }
                    color={msg.role === "assistant" ? "white" : "black"}
                    borderRadius={16}
                    p={3}
                    sx={{ maxWidth: "75%" }} 
                  >
                    {msg.content}
                  </Box>
                </Box> 
              ))}
            </Stack>

            <Stack direction="row" spacing={2}>
              <TextField
                label="Message"
                fullWidth
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyPress} // Add the keydown event handler
              />
              <Button
                variant="contained"
                onClick={sendMessage}
                sx={{
                  backgroundColor: "primary.main",
                  "&:hover": {
                    backgroundColor: "secondary.main",
                    color: "black",
                  },
                }}
              >
                Send
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
