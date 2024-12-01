"use client";
import { Typography } from "@mui/material";
import React from "react";

export default function TrustedBy() {
  const avatarStyle = {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    border: '3px #C0A252', 
    boxShadow: '0 0 0 2px #3F3F46',  
    marginRight: '-20px', 
    transition: 'transform 0.3s ease-in-out',  
    zIndex: 1,  
    animation: 'slideUp 1s ease-out', 
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = 'translateX(-10px)';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'translateX(0)';
  };

  return (
    <>
      <style>
        {`
          @keyframes slideUp {
            from {
              transform: translateY(20px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
        `}
      </style>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '16px' }}>
        <Typography
                  sx={{
                    fontFamily: 'Inter',
                    fontWeight: '500',
                    fontSize: '16px',
                    color: '#9CA3AF',
                  }}
        >
          Trusted By &nbsp;
        </Typography>
        <img
          src="/chillguy1.png"
          alt="Avatar 1"
          style={{ ...avatarStyle, marginRight: '-10px', zIndex: 2 }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <img
          src="/chillguy2.png"
          alt="Avatar 2"
          style={{ ...avatarStyle, marginRight: '-14px', zIndex: 2 }}  
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <img
          src="/chillguy4.png"
          alt="Avatar 3"
          style={{ ...avatarStyle, marginRight: '-13px', zIndex: 3 }}  
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <img
          src="/chillguy3.png"
          alt="Avatar 4"
          style={{ ...avatarStyle, marginRight: '-13px', zIndex: 3 }}  
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
                <img
          src="/plus100.png"
          alt="Avatar 4"
          style={{ ...avatarStyle, marginRight: '-13px', zIndex: 3 }}  
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </div>
    </>
  );
}
