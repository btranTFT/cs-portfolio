import { FaJava, FaPython, FaHtml5, FaDatabase, FaGitAlt, FaAws, FaTools } from 'react-icons/fa';
import { SiAndroid } from 'react-icons/si';

function About() {
  return (
    <section id="about" style={{
      minHeight: '70vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '4rem 1rem 2rem 1rem',
      background: 'var(--section-bg)',
    }}>
      <div style={{
        background: 'var(--container-bg)',
        borderRadius: 20,
        boxShadow: '0 2px 16px rgba(0,0,0,0.10)',
        padding: '2.5rem 2rem',
        maxWidth: 600,
        width: '100%',
        margin: '0 auto',
        textAlign: 'center',
      }}>
        <h2 className="thurkle" style={{ fontSize: '2.2rem', marginBottom: '1.5rem', color: 'var(--accent)' }}>About Me</h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: 'var(--text)' }}>
          I am a passionate cybersecurity analyst and consultant with a strong background in software engineering, cloud, and security. I love solving complex problems and building secure, scalable solutions.
        </p>
        <h3 style={{ color: 'var(--accent)', marginBottom: '1rem', fontWeight: 700 }}>Skills</h3>
        <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center', listStyle: 'none', padding: 0, margin: 0 }}>
          <li style={{ background: 'var(--card-bg)', color: 'var(--text)', padding: '0.5rem 1.2rem', borderRadius: 16, border: '1px solid #e0e0e0', fontWeight: 500 }}>Java</li>
          <li style={{ background: 'var(--card-bg)', color: 'var(--text)', padding: '0.5rem 1.2rem', borderRadius: 16, border: '1px solid #e0e0e0', fontWeight: 500 }}>Python</li>
          <li style={{ background: 'var(--card-bg)', color: 'var(--text)', padding: '0.5rem 1.2rem', borderRadius: 16, border: '1px solid #e0e0e0', fontWeight: 500 }}>HTML/CSS</li>
          <li style={{ background: 'var(--card-bg)', color: 'var(--text)', padding: '0.5rem 1.2rem', borderRadius: 16, border: '1px solid #e0e0e0', fontWeight: 500 }}>SQL</li>
          <li style={{ background: 'var(--card-bg)', color: 'var(--text)', padding: '0.5rem 1.2rem', borderRadius: 16, border: '1px solid #e0e0e0', fontWeight: 500 }}>MATLAB</li>
          <li style={{ background: 'var(--card-bg)', color: 'var(--text)', padding: '0.5rem 1.2rem', borderRadius: 16, border: '1px solid #e0e0e0', fontWeight: 500 }}>ADB (Android)</li>
          <li style={{ background: 'var(--card-bg)', color: 'var(--text)', padding: '0.5rem 1.2rem', borderRadius: 16, border: '1px solid #e0e0e0', fontWeight: 500 }}>Android Studio</li>
          <li style={{ background: 'var(--card-bg)', color: 'var(--text)', padding: '0.5rem 1.2rem', borderRadius: 16, border: '1px solid #e0e0e0', fontWeight: 500 }}>Git</li>
          <li style={{ background: 'var(--card-bg)', color: 'var(--text)', padding: '0.5rem 1.2rem', borderRadius: 16, border: '1px solid #e0e0e0', fontWeight: 500 }}>AWS</li>
        </ul>
      </div>
    </section>
  );
}
export default About; 