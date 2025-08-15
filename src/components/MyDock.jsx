// language: jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Dock from './Dock';
import { VscHome, VscSymbolEvent, VscGithubProject, VscAccount, VscCallIncoming } from 'react-icons/vsc';

export default function MyDock() {
  const navigate = useNavigate();
  const items = [
    { icon: <VscHome size={18} />, label: 'Home', onClick: () => navigate('/') },
    { icon: <VscSymbolEvent size={18} />, label: 'Events', onClick: () => navigate('/events') },
    { icon: <VscGithubProject size={18} />, label: 'Projects', onClick: () => navigate('/projects') },
    { icon: <VscAccount size={18} />, label: 'About us', onClick: () => navigate('/about') },
    { icon: <VscCallIncoming size={18} />, label: 'Contact us', onClick: () => navigate('/contact') },
  ];

  return (
    <footer style={{ position: 'fixed', bottom: 0, width: '100%', zIndex: 2, pointerEvents: 'auto' }}>
      <Dock items={items} panelHeight={68} baseItemSize={50} magnification={70} />
    </footer>
  );
}