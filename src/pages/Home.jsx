function Home() {
  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 1rem',
      background: 'none',
      position: 'relative',
    }}>
      <img
        src="/benprof.jpg"
        alt="Profile"
        style={{ width: 180, height: 180, borderRadius: '50%', border: '6px solid var(--accent)', objectFit: 'cover', marginBottom: 32, boxShadow: '0 4px 24px rgba(0,0,0,0.10)' }}
      />
      <h1 className="thurkle" style={{ fontSize: '3.2rem', marginBottom: '0.5rem', textAlign: 'center', letterSpacing: '0.04em' }}>Benjamin Tran</h1>
      <h2 style={{ fontWeight: 700, color: 'var(--accent)', marginBottom: '2rem', textAlign: 'center', fontSize: '1.5rem', letterSpacing: '0.02em' }}>
        Aspiring Cybersecurity Analyst and Consultant
      </h2>
      <p style={{ maxWidth: 600, textAlign: 'center', marginBottom: '2.5rem', fontSize: '1.15rem', color: 'var(--text)' }}>
        Welcome to my portfolio! Here you'll find my projects, experience, and a bit about me. Let's build something great together!
      </p>
      <a href="#about" style={{
        display: 'inline-block',
        marginTop: '2rem',
        color: 'var(--accent)',
        fontSize: '2.5rem',
        textDecoration: 'none',
        animation: 'bounce 2s infinite',
      }} aria-label="Scroll Down">↓</a>
    </section>
  );
}
export default Home; 