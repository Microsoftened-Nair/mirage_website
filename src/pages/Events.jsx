// language: jsx
import React from 'react';
import { motion } from 'framer-motion';
import Aurora from '../components/Aurora';
import DecryptedText from '../components/DecryptedText';
import Stack from '../components/Stack';

export default function Events() {
  const cardsData = [
    { id: 1, img: '/assets/pic1.jpg' },
    { id: 2, img: '/assets/pic2.jpg' },
    { id: 3, img: '/assets/pic3.jpg' },
    { id: 4, img: '/assets/pic4.jpg' }
  ];

  return (
    <motion.div
      variants={{
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 }
      }}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.3 }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        backgroundColor: 'black'
      }}
    >
      <Aurora
        colorStops={["#00D8FF", "#1100FF", "#00D8FF"]}
        speed={0.5}
      />
      <DecryptedText
        text="Events"
        animateOn="view" // Triggers when scrolled into view
        revealDirection="center"
        style={{
          position: 'absolute',
          top: '15%',         // Adjusted upward if necessary
          left: '5%',         // Left align the text
          transform: 'translateY(-50%)',
          color: 'white',
          fontSize: '4rem',
          textAlign: 'left'
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '25%',         // Position the div containing the Stack above the title
          left: '5%',
          width: '90%',
          zIndex: 2         // Ensure it appears above other elements if needed
        }}
      >
        <Stack
          randomRotation={true}
          sensitivity={180}
          sendToBackOnClick={false}
          cardDimensions={{ width: 500, height: 300 }}
          cardsData={cardsData}
        />
      </div>
      <DecryptedText
        text="The Reality Shift"
        animateOn="view"
        revealDirection="center"
        style={{
          position: 'absolute',
          top: '70%',         // Position beneath the stack wrapper
          left: '5%',
          color: 'white',
          fontSize: '3rem',
          textAlign: 'left'
        }}
      />
      <DecryptedText
        text="An event focused on teaching students the basics of the Unity Game Engine."
        animateOn="view"
        revealDirection="center"
        style={{
          position: 'absolute',
          top: '78%',         // Adjust vertical spacing
          left: '5%',
          color: 'white',
          fontSize: '1.5rem',
          textAlign: 'left'
        }}
      />
      <DecryptedText
        text="Interactive sessions, live demos, and hands-on workshops formed the core of our curriculum."
        animateOn="view"
        revealDirection="center"
        style={{
          position: 'absolute',
          top: '84%',
          left: '5%',
          color: 'white',
          fontSize: '1.5rem',
          textAlign: 'left'
        }}
      />
    </motion.div>
  );
}