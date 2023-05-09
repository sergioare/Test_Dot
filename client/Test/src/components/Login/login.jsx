import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [user, setUser] = useState({ 
        email: "",
        password: "",
      });
    const [isRegistering, setIsRegistering] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    
  return (
    <div>login</div>
  )
}

export default Login;
