//just some chill tunes :)

'use client';

import { useState, useEffect } from 'react';
import { Box, IconButton, Slider } from '@mui/material';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';

export default function AudioPlayer() {
  //setting the default states for the audio player
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1); 
  const [isHovered, setIsHovered] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const audio = document.getElementById('background-audio');
    if (audio) {
      audio.volume = isMuted ? 0 : volume;

      if (hasInteracted) {
        audio.play().catch((err) => {
          console.error('Autoplay blocked:', err);
        });
      }
    }
  }, [isMuted, volume, hasInteracted]); //plays the chill audio when a user clicks or interacts with the page

  const toggleMute = () => {
    setIsMuted((prevState) => !prevState);
  };

  const handleVolumeChange = (event, newValue) => {
    setVolume(newValue);
    setIsMuted(newValue === 0); // mutes automatically if the volume is 0
  };

  const handleUserInteraction = () => {
    setHasInteracted(true);
  };

  useEffect(() => {
    document.addEventListener('click', handleUserInteraction, { once: true });
    return () => {
      document.removeEventListener('click', handleUserInteraction);
    };
  }, []);

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 20,
        right: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        transition: 'width 0.3s, height 0.3s, opacity 0.3s',
        '&:hover': {
          width: '150px',
          height: '50px',
          borderRadius: '25px',
        },
        cursor: 'pointer',
        padding: '8px',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Audio Element */}
      <audio id="background-audio" loop hidden>
        <source src="/chillguy.wav" type="audio/wav" />
        Your browser does not support the audio element.
      </audio>

      {/* Mute/Unmute Button */}
      <IconButton
        onClick={toggleMute}
        sx={{ color: 'white', marginRight: isHovered ? '8px' : 0 }}
      >
        {isMuted ? <VolumeOffIcon /> : <VolumeUpIcon />}
      </IconButton>

      {/* Volume Slider: Which is Only visible on hover */}
      {isHovered && (
        <Slider
          value={volume}
          min={0}
          max={1}
          step={0.1}
          onChange={handleVolumeChange}
          sx={{
            width: '80px',
            color: '#C0A252',
          }}
        />
      )}
    </Box>
  );
}
