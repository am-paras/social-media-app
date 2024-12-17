import { Link } from 'react-router-dom';
import "./Login.scss";
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';

const Login = () => {
  const { login } = useContext(AuthContext);

  const handleLoginClick = () => {
    // Login function have hard-coded user data, so login will be successful always.
    login();
    // window.location.href = '/';
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
            <button type="submit" onClick={handleLoginClick}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
