import { useContext } from "react";
import { AuthContext } from "../context/AuthenthicationContext";

function useAuth() {
  return useContext(AuthContext);
}

export default useAuth;
