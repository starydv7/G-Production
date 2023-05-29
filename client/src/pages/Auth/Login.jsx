import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../styles/AuthStyles.css";
import toast from "react-hot-toast";
const Login = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post("/api/v1/auth/login", {
          
          email,
          password
        });
        if (res && res.data.success) {
          toast.success(res.data && res.data.message);
          navigate("/");
        } else {
          toast.error(res.data.message);
        }
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong");
      }
    };
  return (
    <Layout title="Register - Gammavit Shop Now">
      <div className="register-page">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <h4 className="title">Login</h4>
           
            <div className="form-group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                placeholder="Email"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                placeholder="Password"
                required
              />
            </div>
           
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
