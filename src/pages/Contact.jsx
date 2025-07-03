import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" style={{
      minHeight: '60vh',
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
        maxWidth: 500,
        width: '100%',
        margin: '0 auto',
        textAlign: 'center',
      }}>
        <h2 className="thurkle" style={{ fontSize: '2.2rem', marginBottom: '1.5rem', color: 'var(--accent)' }}>Contact</h2>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '2rem' }}>
          <input 
            type="text" 
            placeholder="Your Name" 
            required 
            style={{ 
              padding: '0.75rem', 
              borderRadius: 10, 
              border: '1px solid #ccc', 
              fontSize: '1rem',
              fontFamily: "'Noto Sans', 'Segoe UI', Arial, sans-serif",
              background: 'var(--card-bg)',
              color: 'var(--text)'
            }} 
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            required 
            style={{ 
              padding: '0.75rem', 
              borderRadius: 10, 
              border: '1px solid #ccc', 
              fontSize: '1rem',
              fontFamily: "'Noto Sans', 'Segoe UI', Arial, sans-serif",
              background: 'var(--card-bg)',
              color: 'var(--text)'
            }} 
          />
          <textarea 
            placeholder="Your Message" 
            required 
            rows={4} 
            style={{ 
              padding: '0.75rem', 
              borderRadius: 10, 
              border: '1px solid #ccc', 
              fontSize: '1rem',
              fontFamily: "'Noto Sans', 'Segoe UI', Arial, sans-serif",
              background: 'var(--card-bg)',
              color: 'var(--text)',
              resize: 'vertical'
            }} 
          />
          <button type="submit" style={{
            background: 'var(--accent)',
            color: '#fff',
            padding: '0.75rem 2rem',
            borderRadius: 16,
            fontWeight: 700,
            fontSize: '1.1rem',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            transition: 'background 0.2s',
          }}>Send Message</button>
        </form>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
          <a href="https://github.com/btranTFT" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', fontSize: '2rem' }}><FaGithub /></a>
          <a href="https://linkedin.com/in/btran083" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', fontSize: '2rem' }}><FaLinkedin /></a>
        </div>
      </div>
    </section>
  );
}
export default Contact; 