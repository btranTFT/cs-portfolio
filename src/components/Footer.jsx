import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer style={{
      width: '100%',
      background: 'var(--container-bg)',
      borderTop: '2px solid var(--accent)',
      padding: '1.2rem 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.5rem',
      marginTop: '2rem',
    }}>
      <nav style={{ display: 'flex', gap: '2rem', marginBottom: 4 }}>
        <a href="#home" style={{ color: 'var(--accent)', fontWeight: 600, textDecoration: 'none' }}>Home</a>
        <a href="#about" style={{ color: 'var(--accent)', fontWeight: 600, textDecoration: 'none' }}>About</a>
        <a href="#projects" style={{ color: 'var(--accent)', fontWeight: 600, textDecoration: 'none' }}>Projects</a>
        <a href="#resume" style={{ color: 'var(--accent)', fontWeight: 600, textDecoration: 'none' }}>Resume</a>
        <a href="#contact" style={{ color: 'var(--accent)', fontWeight: 600, textDecoration: 'none' }}>Contact</a>
      </nav>
      <div style={{ color: 'var(--text)', fontSize: '0.95rem' }}>
        &copy; {new Date().getFullYear()} Benjamin Tran
      </div>
    </footer>
  );
}

export default Footer; 