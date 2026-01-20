import { useState } from "react";

export default function Home() {
  const [mensagem, setMensagem] = useState("");

  const testarBackend = async () => {
    try {
      const res = await fetch("https://lawflow-backend.onrender.com/api/ping");
      const data = await res.json();
      setMensagem(data.message);
    } catch (error) {
      setMensagem("Erro ao conectar com o backend");
      console.error(error);
    }
  };

  return (
    <main style={styles.main}>
      <h1 style={styles.title}>LawFlow AI</h1>
      <p style={styles.subtitle}>
        Automação jurídica inteligente para advogados
      </p>

      <button style={styles.button} onClick={testarBackend}>
        Testar conexão com backend
      </button>

      {mensagem && <p style={styles.response}>{mensagem}</p>}
    </main>
  );
}

const styles = {
  main: {
    backgroundColor: "#0B0D10",
    color: "#FFFFFF",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px"
  },
  title: {
    fontSize: "3rem"
  },
  subtitle: {
    color: "#9CA3AF"
  },
  button: {
    padding: "12px 20px",
    backgroundColor: "#2563EB",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer"
  },
  response: {
    marginTop: "10px",
    color: "#22C55E"
  }
};
