import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    try {
      const res = await fetch(
        "https://lawflow-backend.onrender.com/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ email, password })
        }
      );

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.error || "Erro no login");
        return;
      }

      // salva token
      localStorage.setItem("lawflow_token", data.token);
      setMessage("Login realizado com sucesso 🚀");
    } catch (err) {
      setMessage("Erro de conexão com o backend");
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>LawFlow AI</h1>

      <input
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <br /><br />

      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <br /><br />

      <button onClick={handleLogin}>Entrar</button>

      <p>{message}</p>
    </div>
  );
}
