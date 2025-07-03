import './Navbar.css';

function Navbar({ theme, onToggleTheme }) {
  const navTextColor = theme === 'dark' ? '#fff' : '#232526';
  const navLinkColor = theme === 'dark' ? '#fff' : '#232526';
  const navLinkActiveColor = 'var(--accent)';

  return (
    <nav
      className="navbar"
      style={{
        background: theme === 'dark' ? '#222' : '#f5f5f5',
        color: navTextColor,
        transition: 'background 0.3s, color 0.3s',
      }}
    >
      <div className="navbar-logo thurkle" style={{ color: navTextColor }}>MyPortfolio</div>
      <ul className="navbar-links">
        <li><a href="#home" style={{ color: navLinkColor }}>Home</a></li>
        <li><a href="#about" style={{ color: navLinkColor }}>About</a></li>
        <li><a href="#projects" style={{ color: navLinkColor }}>Projects</a></li>
        <li><a href="#resume" style={{ color: navLinkColor }}>Resume</a></li>
        <li><a href="#contact" style={{ color: navLinkColor }}>Contact</a></li>
      </ul>
      <div className="theme-toggle-wrapper" style={{ marginLeft: '1.5rem' }}>
        <label className="switch">
          <input type="checkbox" checked={theme === 'dark'} onChange={onToggleTheme} />
          <span className="slider round"></span>
        </label>
      </div>
    </nav>
  );
}

export default Navbar; 