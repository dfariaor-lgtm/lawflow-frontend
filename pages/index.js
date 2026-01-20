export default function Home() {
  return (
    <main style={styles.main}>
      <h1 style={styles.title}>LawFlow AI</h1>
      <p style={styles.subtitle}>
        Automação jurídica inteligente para advogados
      </p>
    </main>
  );
}

const styles = {
  main: {
    backgroundColor: '#0B0D10',
    color: '#FFFFFF',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: '48px',
    marginBottom: '16px'
  },
  subtitle: {
    fontSize: '18px',
    opacity: 0.8
  }
};
