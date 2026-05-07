import { register, login, getUser, logout } from "../Services/auth.api.js";
import { useContext } from "react";
import { AuthContext } from "../Auth.context.jsx";

export const useAuth = () => {
  const context = useContext(AuthContext);
  const { user, loading, setUser, setLoading } = context;

  async function handleRegister({ username, email, password }) {
    setLoading(true);
    const data = await register({ username, email, password });
    setUser(data.user);
    setLoading(false);
  }

  async function handleLogin({ username, email, password }) {
    setLoading(true);
    const data = await login({ username, email, password });
    setUser(data.user);
    setLoading(false);
  }

  async function handleGetUser() {
    setLoading(true);
    const data = await getUser();
    setUser(data.user);
    setLoading(false);
  }

  async function handleLogout() {
    setLoading(true);
    await logout();
    setUser(null);
    setLoading(false);
  }

  return {
    user,
    loading,
    handleRegister,
    handleLogin,
    handleGetUser,
    handleLogout,
  };
};
