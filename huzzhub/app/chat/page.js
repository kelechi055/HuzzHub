'use client';

import { SignedIn, SignedOut, useUser } from "@clerk/nextjs";
import Sidebar from '@/components/sidebar'; 
import {
  Box,
  Stack,
  TextField,
  Button,
  createTheme,
  ThemeProvider,
  IconButton,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu'; 
import { useState, useEffect, useRef } from "react";
import { marked } from "marked"; // this parses markdown text to html (bold, etc...)
import AudioPlayer from '@/components/AudioPlayer';

const chillTheme = createTheme({
  palette: {
    primary: {
      main: "#C0A252",
      light: "#D4B270",
      dark: "#9A842F",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#000000",
      light: "#6D6D6D",
      dark: "#000000",
      contrastText: "#91793E",
    },
    //background color gradient
    gradients: {
      primary: "linear-gradient(180deg, #000000 5%, #C0A252 90%)",
      secondary: "linear-gradient(90deg, #C0A252 30%, #000000 90%)",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-input": {
            color: "#ffff", // makes users message color white (text field)
          },
          "& .MuiInputLabel-root": {
            color: "#C0A252", 
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#C0A252", 
            },
            "&:hover fieldset": {
              borderColor: "#91793E", 
            },
            "&.Mui-focused fieldset": {
              borderColor: "#91793E", 
            },
          },
        },
      },
    },
  },
});

export default function Home() {
  
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hello! I'm just a chill guy, the HuzzHub Assistant. How can I assist you today? Whether it's about our platform, rizz, the huzz, bruzz, anything! feel free to ask!",
    },
  ]);

  const [message, setMessage] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const messagesEndRef = useRef(null);

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
  
      const formattedResponse = formatResponse(result.content);
  
      setMessages((prevMessages) => [
        ...prevMessages.slice(0, -1), 
        { role: "assistant", content: formattedResponse }, 
      ]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setMessages((prevMessages) => [
        ...prevMessages.slice(0, -1), 
        { role: "assistant", content: "Error fetching response. Please try again." },
      ]);
    }
  };
  
  // function to format reponse into paragraphs!
  const formatResponse = (text) => {
    const sentences = text.split(/(?<=[.?!])\s+/); 
    const chunkSize = 4; 
    const paragraphs = [];
  
    for (let i = 0; i < sentences.length; i += chunkSize) {
      paragraphs.push(sentences.slice(i, i + chunkSize).join(" ")); 
    }
  
    return paragraphs.join("\n"); 
  };
  

  // automatically scroll to the bottom of messages
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  //function so users can click "Enter" to send a message
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <ThemeProvider theme={chillTheme}>
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
        sx={{ background: chillTheme.palette.gradients.primary }}
      >
        {/* Menu Icon */}
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
        
        {/* Chill Guy Music :) */}
        <AudioPlayer />

        {/* Chat Interface */}
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
            //size of the chat box, etc...
            direction="column"
            width="1200px"
            height="600px"
            p={2}
            spacing={2}
            sx={{ flexGrow: 1 }}
          >
            {/* Section for Scrollable Messages */}
            <Box
              flexGrow={1}
              overflow="auto"
              sx={{ padding: "10px" }}
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
                        width: 56,
                        height: 56,
                        borderRadius: "50%",
                        marginRight: 1,
                      }}
                    />
                  )}
                  <Box
                    bgcolor={msg.role === "assistant" ? "primary.main" : "secondary.main"}
                    color={msg.role === "assistant" ? "white" : "#C0A252"}
                    borderRadius={7}
                    p={3}
                    sx={{
                      maxWidth: "75%",
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: "16px",
                    }}
                  >
                    <div
                      dangerouslySetInnerHTML={{
                        __html: marked(msg.content), // this just renders the different message content as markdown (bold, italics, etc.)
                      }}
                    />
                  </Box>
                </Box>
              ))}
              <div ref={messagesEndRef} />
            </Box>

            {/* Input Section */}
            <Box
              component="form"
              onSubmit={(e) => {
                e.preventDefault(); 
                sendMessage();
              }}
              display="flex"
              alignItems="center"
              sx={{
                paddingTop: "8px",
              }}
            >
              <TextField
                label="Ask Chill Guy anything..."
                fullWidth
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyPress}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    color: "white",
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "16px",
                    borderRadius: "30px",
                  },
                }}
              />

              {/* Send Button */}
              <Button
                variant="contained"
                type="submit"
                sx={{
                  marginLeft: 1,
                  background: "linear-gradient(90deg, #C0A252, #91793E)",
                  borderRadius: "30px", 
                  padding: "12px 24px",
                  fontWeight: "550", 
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "16px",
                  textTransform: "none", 
                  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)", 
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    background: "linear-gradient(90deg, #D4B270, #C0A252)", 
                    boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.3)", 
                    transform: "translateY(-4px)",
                  },
                  "&:active": {
                    transform: "translateY(0)", 
                    boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.2)",
                  },
                }}
              >
                Send
              </Button>
            </Box>
            {/* End of Input Section */}
          </Stack>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
