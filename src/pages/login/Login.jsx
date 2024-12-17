import { Link, Navigate } from 'react-router-dom';
import "./Login.scss";
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';

const Login = () => {
  const { currentUser, login } = useContext(AuthContext);

  if(currentUser) { 
    return <Navigate to= "/"/>
  }

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1> Hello World</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit" onClick={() => login()}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
