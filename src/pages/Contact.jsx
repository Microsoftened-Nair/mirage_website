// language: jsx
import React from 'react';
import { motion } from 'framer-motion';
import DecryptedText from '../components/DecryptedText';
import GlitchText from '../components/GlitchText';

export default function Contact() {
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
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center'
      }}>
        <GlitchText
          speed={1}
          enableShadows={true}
          enableOnHover={true}
          style={{
            fontSize: '2rem'
          }}
        >
          mirage.mitadt
        </GlitchText>
      </div>
      {/* Instagram rendered as a decrypted text element below the ASCII text */}
      <DecryptedText
        text="Instagram"
        animateOn="view" // Triggers when scrolled into view
        revealDirection="center"
        style={{
          position: 'absolute',
          top: '80%',         // Adjust vertical position as needed
          left: '50%',        // Center horizontally
          transform: 'translate(-50%, -50%)',
          color: 'white',
          fontSize: '1.5rem',
          textAlign: 'center'
        }}
      />
      {/* "Contact us" decrypted text */}
      <DecryptedText
        text="Contact us"
        animateOn="view" // Triggers when scrolled into view
        revealDirection="center"
        style={{
          position: 'absolute',
          top: '15%',         // Adjust vertical position as needed
          left: '50%',        // Center horizontally
          transform: 'translate(-50%, -50%)',
          color: 'white',
          fontSize: '4rem',
          textAlign: 'center'
        }}
      />
    </motion.div>
  );
}