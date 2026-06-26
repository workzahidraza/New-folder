import { createContext, useState } from "react";

export const Authcontext = createContext();

export const AuthProvider = ({ childrens }) => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <Authcontext.Provider value={{ user, setUser, loading, setLoading }}>
      {childrens}
    </Authcontext.Provider>
  );
};
