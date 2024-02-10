/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("uzbekistan");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("male");

  const navigate = useNavigate();
  const isValidate = () => {
    let isProceed = true;
    let errorMsg = "Please enter the value in ";
    if (id === null || id === "") {
      isProceed = false;
      errorMsg += " Username";
    }
    if (name === null || name === "") {
      isProceed = false;
      errorMsg += " Fullname";
    }
    if (password === null || password === "") {
      isProceed = false;
      errorMsg += " Password";
    }
    if (email === null || email === "") {
      isProceed = false;
      errorMsg += " Email";
    }
    if (!isProceed) {
      toast.warning(errorMsg);
    } else {
      if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) { /* empty */ } else {
        isProceed = false;
        toast.warning('Please enter the valid email');
      }
    }
    return isProceed;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let regobj = {
      id,
      name,
      password,
      email,
      phone,
      country,
      address,
      gender,
    };
    if (isValidate()) {
      fetch("http://localhost:8000/user", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(regobj),
      })
        .then((res) => {
          toast.success("Registered Successfully.");
          navigate("/login");
        })
        .catch((err) => {
          toast.error("Failed :" + err.message);
        });
    }
  };

  return (
    <div>
      <div className="offset-lg-3 col-lg-6">
        <form className="container" onSubmit={handleSubmit}>
          <div className="card">
            <div className="card-header">
              <h1>User Registration</h1>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      User Name <span className="errmsg">*</span>
                    </label>
                    <input
                      value={id}
                      onChange={(e) => setId(e.target.value)}
                      type="text"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
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
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Full Name <span className="errmsg">*</span>
                    </label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Email <span className="errmsg">*</span>
                    </label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Phone <span className="errmsg">*</span>
                    </label>
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      type="tel"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Country <span className="errmsg">*</span>
                    </label>
                    <select
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      name=""
                      id=""
                      className="form-control"
                    >
                      <option value="uzbekistan">Uzbekistan</option>
                      <option value="saudiarabia">Saudi Arabia</option>
                      <option value="palestine">Palestine</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Address</label>
                    <textarea
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="form-control"
                    ></textarea>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Gender</label>
                    <br></br>
                    <input
                      checked={gender === "male"}
                      onChange={(e) => setGender(e.target.value)}
                      type="radio"
                      name="gender"
                      value="male"
                      className="app-check"
                    ></input>
                    <label>Male</label>
                    <input
                      checked={gender === "female"}
                      onChange={(e) => setGender(e.target.value)}
                      type="radio"
                      name="gender"
                      value="female"
                      className="app-check"
                    ></input>
                    <label>Female</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
              <a href="" className="btn btn-danger">
                Back
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
