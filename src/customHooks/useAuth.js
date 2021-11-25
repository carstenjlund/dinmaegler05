import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

function useAuth() {
    return useContext(AuthContext);
  }