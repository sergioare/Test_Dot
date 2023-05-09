import { useState } from "react";
import Login from "../Login/login";

function Register() {
    const [isRegistering, setIsRegistering] = useState(true);

    const [user, setUser] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [error, setError] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError({})
    }
    const changeHandler = (event) => {
        const property = event.target.name            
        const value = event.target.value
   
        setUser({
          ...user, 
          [property]: value})
      }

  return (
    <>
    {isRegistering?
      <div className="register">
      <form
        onSubmit={handleSubmit}
        >
              <h1>SIGN UP</h1>

        <div className="email">
          <label
            htmlFor="email"
            >Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={changeHandler}
            className="input"
            placeholder="Email@****.com"
          />
          {error.email && 
          <p className='warning'>{error.email}</p>}
        </div>

        <div className="pass">
          <label
            htmlFor="password"
          >Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={user.password}
            onChange={changeHandler}
            className="input"
            placeholder="*******"
            autoComplete="on"
          />
          {error.password && 
          <p className='warning'>{error.password}</p>}
        </div>

        <div className="pass">
          <label
            htmlFor="password"
          >Verify Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            onChange={changeHandler}
            className='input'
            placeholder="*******"
            autoComplete="on"

          />
          {error.confirmPassword && 
          <p className='warning'>{error.confirmPassword}</p>}
        </div>
        

        <button type="submit" className="btn"> Sign Up </button>
      <p>Already have an Account?  <span onClick={()=> setIsRegistering(!isRegistering)} className='link'>Login</span></p>
      </form>
    </div>
        :<Login/>
    }
    </>
  )
}

export default Register