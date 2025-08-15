// language: jsx
import React from 'react';
import { motion } from 'framer-motion';
import Aurora from '../components/Aurora';
import DecryptedText from '../components/DecryptedText';
import TiltedCard from '../components/TiltedCard';

export default function Projects() {
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
        text="Projects"
        animateOn="view"
        revealDirection="center"
        style={{
          position: 'absolute',
          top: '15%',
          left: '5%',
          transform: 'translateY(-50%)',
          color: 'white',
          fontSize: '4rem',
          textAlign: 'left'
        }}
      />

      {/* Cards Container */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          gap: '4rem',
          zIndex: 1
        }}
      >
        {/* First Project */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <motion.div
            initial={{ filter: 'drop-shadow(0 0 0px rgba(0,0,0,0))' }}
            whileHover={{ filter: 'drop-shadow(0 0 20px rgb(138, 241, 255))' }}
            transition={{ duration: 0.3 }}
          >
            <TiltedCard
              imageSrc="./assets/SIH.png"
              altText="SIH Project"
              captionText="Smart India Hackathon"
              containerHeight="30vh"
              containerWidth="40vh"
              imageHeight="100%"
              imageWidth="100%"
              rotateAmplitude={15}
              scaleOnHover={1.2}
              showMobileWarning={false}
            />
          </motion.div>
          <DecryptedText
            text="Smart India Hackathon 2024"
            animateOn="view"
            revealDirection="center"
            style={{
              color: 'white',
              fontSize: '1.5rem',
              marginTop: '2rem'
            }}
          />
        </div>

        {/* Second Project */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <motion.div
            initial={{ filter: 'drop-shadow(0 0 0px rgba(0,0,0,0))' }}
            whileHover={{ filter: 'drop-shadow(0 0 20px rgb(138, 241, 255))' }}
            transition={{ duration: 0.3 }}
          >
            <TiltedCard
              imageSrc="./assets/Demo.png"
              altText="Demo Project"
              captionText="Demo Project"
              containerHeight="30vh"
              containerWidth="40vh"
              imageHeight="100%"
              imageWidth="100%"
              rotateAmplitude={15}
              scaleOnHover={1.2}
              showMobileWarning={true}
            />
          </motion.div>
          <DecryptedText
            text="Mirage Demo"
            animateOn="view"
            revealDirection="center"
            style={{
              color: 'white',
              fontSize: '1.5rem',
              marginTop: '2rem'
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}