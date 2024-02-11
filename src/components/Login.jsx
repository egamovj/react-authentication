/* eslint-disable no-unused-vars */
import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";



const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const usenavigate = useNavigate();

  const ProceedLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      fetch("http://localhost:8000/user/" + username)
        .then((res) => {
          return res.json();
        })
        .then((resp) => {
          //console.log(resp);
          if(Object.keys(resp).length===0){
            toast.error('Please enter valid username');
          } else {
            if(resp.password ===password) { 
              toast.success('Success')
              usenavigate('/')
            } else {
              toast.error('Please enter valid credentials');
            }
          }
        })
        .catch((err) => {
          toast.error("Login Failed due to :" + err.message);
        });
    }
  };

  const validate = () => {
    let result = true;
    if (username === "" || username === null) {
      result = false;
      toast.warning("Please enter Username");
    }
    if (password === "" || password === null) {
      result = false;
      toast.warning("Please enter Password");
    }
    return result;

  const ProceedLogin = (e) => {
    e.preventDefault();

  };

  return (
    <div className="row">

      <div className="offset-lg-3 col-lg-6" style={{ marginTop: "100px" }}>

      <div className="offset-lg-3 col-lg-6">

        <form className="container" onSubmit={ProceedLogin}>
          <div className="card">
            <div className="card-header">
              <h2>User Login</h2>
            </div>
            <div className="card-body">
              <div className="form-group">

                <label>
                  User Name <span className="errmsg">*</span>
                </label>
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>
                  Password <span className="errmsg">*</span>
                </label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className="form-control"
                />
              </div>
            </div>
            <div className="card-footer">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
              <Link to={"/register"} className="btn btn-success">
                New User
              </Link>
            </div>

                <label>User Name <span>*</span></label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="card-footer"></div>

          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
