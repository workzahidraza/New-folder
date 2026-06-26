import { useContext } from "react";
import { Authcontext } from "../auth.context";
import { register, login, getUser } from "../services/auth.api";

export const useAuth = () => {
  const context = useContext(Authcontext);
  const { user, setUser, loading, setLoading } = context;

  const handleRegister = async (userName, userEmail, userPassword) => {
    setLoading(true);
    const response = await register(userEmail, userName, userPassword);
    setUser(response.data);
    setLoading(false);
  };

  const handleLogin = async (userName, userPassword) => {
    setLoading(true);
    const response = await login(userName, userPassword);
    setUser(response.data);
    setLoading(false);
  };

  const handleGetUser = async () => {
    setLoading(true);
    const response = await getUser();
    setUser(response.data);
    setLoading(false);
  };

  return {
    user,
    loading,
    handleRegister,
    handleLogin,
    handleGetUser,
  };
};
