function Resume() {
  return (
    <section id="resume" style={{
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
        maxWidth: 600,
        width: '100%',
        margin: '0 auto',
        textAlign: 'center',
      }}>
        <h2 className="thurkle" style={{ fontSize: '2.2rem', marginBottom: '1.5rem', color: 'var(--accent)' }}>Resume</h2>
        <a href="/Resume vFinal.pdf" download style={{
          display: 'inline-block',
          background: 'var(--accent)',
          color: '#fff',
          padding: '0.75rem 2rem',
          borderRadius: 16,
          fontWeight: 700,
          fontSize: '1.1rem',
          textDecoration: 'none',
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          transition: 'background 0.2s',
          marginBottom: '2rem',
        }}>Download Resume</a>
        <h3 style={{ color: 'var(--accent)', marginBottom: '1rem', fontWeight: 700 }}>Experience</h3>
        <div style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
          <strong>Amazon</strong> — FC Associate / IT Assistant<br />
          <span style={{ fontSize: '0.98rem', color: '#aaa' }}>Chino, California | Sep 2020 – Jan 2022</span>
          <ul style={{ marginTop: 8, marginBottom: 0, paddingLeft: 20 }}>
            <li>Created Python scripts to construct a pipeline that retrieved performance data from the AWS cross-regional team</li>
            <li>Collaborated with IT teams to troubleshoot and resolve networking issues.</li>
            <li>Utilized various AWS resources such as Glue Crawlers, S3, Lambda, Redshift, and Quicksight to develop a dashboard displaying real time metrics.</li>
            <li>Utilized Microsoft Excel for data analysis and reporting, contributing to process optimization.</li>
          </ul>
        </div>
        <h3 style={{ color: 'var(--accent)', marginBottom: '1rem', fontWeight: 700 }}>Education</h3>
        <div style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
          <strong>California State Polytechnic University - Pomona</strong><br />
          M.S. in Computer Science (Expected Graduation, May 2026)
          <ul style={{ marginTop: 8, marginBottom: 0, paddingLeft: 20 }}>
            <li>Concentrations: Cybersecurity and Network Infrastructure</li>
            <li>Related Coursework: Data Structures & Algorithms, Objects & Design, Computer Organization & Programming, Object-Oriented Programming, Statistics & Applications, Computer Architecture, Operating Systems, and Software Engineering</li>
          </ul>
        </div>
        <h3 style={{ color: 'var(--accent)', marginBottom: '1rem', fontWeight: 700 }}>Certifications</h3>
        <ul style={{ textAlign: 'left', margin: '0 auto', maxWidth: 400, paddingLeft: 20 }}>
          <li>AWS Cloud Technical Essentials</li>
          <li>Google Cyber Security Professional</li>
          <li>AWS Fundamentals: Addressing Security Risk</li>
          <li>Building Modern .NET Applications on AWS</li>
          <li>Practical Data Science on the AWS Cloud</li>
          <li>Foundations of Cybersecurity by Google</li>
          <li>Tools of the Trade: Linux and SQL</li>
        </ul>
      </div>
    </section>
  );
}
export default Resume; 