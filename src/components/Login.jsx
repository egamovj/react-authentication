/* eslint-disable no-unused-vars */
import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const ProceedLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div className="row">
      <div className="offset-lg-3 col-lg-6">
        <form className="container" onSubmit={ProceedLogin}>
          <div className="card">
            <div className="card-header">
              <h2>User Login</h2>
            </div>
            <div className="card-body">
              <div className="form-group">
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
