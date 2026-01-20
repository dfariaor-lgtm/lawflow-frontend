import axios from 'axios';

export default function Login() {
  async function handleLogin() {
    const response = await axios.post(
      'https://SUA_API_AQUI/auth/login',
      {
        email: 'teste@email.com',
        password: '123456'
      }
    );

    localStorage.setItem('token', response.data.token);
    alert('Login realizado');
  }

  return (
    <div style={styles.container}>
      <h1>Login</h1>
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
}

const styles = {
  container: {
    background: '#0B0D10',
    color: '#fff',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  }
};
