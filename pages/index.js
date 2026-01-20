import { useState } from "react";

export default function Home() {
  const [mensagem, setMensagem] = useState("");

  async function testarBackend() {
    try {
      const response = await fetch(
        "https://lawflow-backend.onrender.com/test"
      );

      const data = await response.json();

      if (data.success) {
        setMensagem("Backend conectado com sucesso ✅");
      }
    } catch (error) {
      setMensagem("Erro ao conectar com o backend ❌");
    }
  }

  return (
    <main style={styles.main}>
      <h1>LawFlow</h1>

      <button onClick={testarBackend} style={styles.button}>
        Testar conexão com backend
      </button>

      {mensagem && <p>{mensagem}</p>}
    </main>
  );
}

const styles = {
  main: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
  },
  button: {
    padding: "12px 20px",
    fontSize: "16px",
    cursor: "pointer",
  },
};
