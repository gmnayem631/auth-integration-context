import React from "react";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const profile = { email: "potato@alu.com" };
  return <AuthContext value={profile}>{children}</AuthContext>;
};

export default AuthProvider;
