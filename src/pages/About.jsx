// language: jsx
import React from 'react';
import { motion } from 'framer-motion';
import DecryptedText from '../components/DecryptedText';
import InfiniteScroll from '../components/InfiniteScroll';
  
// Update items so that the name is the heading and the role is the subheading.
const items = [
  { content: (
    <div style={{ textAlign: 'center', color: 'white' }}>
      <h2 style={{ margin: 0 }}>Meghraj Nair</h2>
      <p style={{ margin: 0, fontSize: '1.2rem' }}>President</p>
    </div>
  ) },
  { content: (
    <div style={{ textAlign: 'center', color: 'white' }}>
      <h2 style={{ margin: 0 }}>Akhil Katlagunta</h2>
      <p style={{ margin: 0, fontSize: '1.2rem' }}>Vice-President</p>
    </div>
  ) },
  { content: (
    <div style={{ textAlign: 'center', color: 'white' }}>
      <h2 style={{ margin: 0 }}>Giriraj Baheti</h2>
      <p style={{ margin: 0, fontSize: '1.2rem' }}>Secretary</p>
    </div>
  ) },
  { content: (
    <div style={{ textAlign: 'center', color: 'white' }}>
      <h2 style={{ margin: 0 }}>Raj Sharma</h2>
      <p style={{ margin: 0, fontSize: '1.2rem' }}>Treasurer</p>
    </div>
  ) },
  { content: (
    <div style={{ textAlign: 'center', color: 'white' }}>
      <h2 style={{ margin: 0 }}>Remembering megh</h2>
      <p style={{ margin: 0, fontSize: '1.2rem' }}>Tech Lead</p>
    </div>
  ) },
  { content: (
    <div style={{ textAlign: 'center', color: 'white' }}>
      <h2 style={{ margin: 0 }}>Yug Patel</h2>
      <p style={{ margin: 0, fontSize: '1.2rem' }}>Management Lead</p>
    </div>
  ) },
  { content: (
    <div style={{ textAlign: 'center', color: 'white' }}>
      <h2 style={{ margin: 0 }}>Baijunath Karvir</h2>
      <p style={{ margin: 0, fontSize: '1.2rem' }}>Social Media Lead</p>
    </div>
  ) },
  { content: (
    <div style={{ textAlign: 'center', color: 'white' }}>
      <h2 style={{ margin: 0 }}>Sanika Tokhi</h2>
      <p style={{ margin: 0, fontSize: '1.2rem' }}>Design Lead</p>
    </div>
  ) },
  { content: (
    <div style={{ textAlign: 'center', color: 'white' }}>
      <h2 style={{ margin: 0 }}>Khushboo Yadav</h2>
      <p style={{ margin: 0, fontSize: '1.2rem' }}>Promotions Lead</p>
    </div>
  ) }
];
  
export default function About() {
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
      <DecryptedText
        text="About us"
        animateOn="view" // Triggers when scrolled into view
        revealDirection="center"
        style={{
          position: 'absolute',
          top: '40%',         
          left: '5%',        
          transform: 'translateY(-50%)', 
          color: 'white',
          fontSize: '4rem',
          textAlign: 'left'
        }}
      />
      {/* Small description below the heading */}
      <div
        style={{
          position: 'absolute',
          top: '60%',
          left: '5%',
          transform: 'translateY(-50%)',
          color: 'white',
          fontSize: '1.2rem',
          maxWidth: '400px',
          lineHeight: '1.4',
          textAlign: 'left',
        }}
      >
        <p>
          We are a club focused on AR and VR development. We workshops, events, and work on innovative projects to push the boundaries of immersive technology.
        </p>
      </div>

      <div style={{ height: '800px', position: 'relative' }}>
        <InfiniteScroll
          items={items}
          isTilted={true}
          tiltDirection="left"
          autoplay={true}
          autoplaySpeed={2}
          autoplayDirection="up"
          pauseOnHover={true}
        />
      </div>
      
    </motion.div>
  );
}