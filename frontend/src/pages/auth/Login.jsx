import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./login-register.css";
import { useState } from "react";
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import { login } from "../../JS/features/authSlice";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userToConnect, setUserToConnect] = useState({
    userName: "",
    password: "",
  });
  const handleChange = (e) => {
    setUserToConnect({ ...userToConnect, [e.target.name]: e.target.value });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(
      login({
        userName: userToConnect.userName,
        password: userToConnect.password,
        navigate,
      })
    );
   // navigate("/admin/dashboard");  ✖️
  };
  console.log(userToConnect)
  return (
    <div className="login">
      <h2>LOGIN</h2>
      <Form className="formulaire" onSubmit={handleLogin}>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Enter user name"
            name="userName"
            value={userToConnect.userName}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Password"
            name="password"
            value={userToConnect.password}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
