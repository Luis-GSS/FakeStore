import React, { useState } from "react";

export const Login = ({ token, setToken }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const loginHandle = async () => {
    setError("");
    setPassword("");
    setUserName("");
    try {
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: userName,
          password: password,
        }),
      });
      if (!response.ok) {
        // Manejar errores aquí si es necesario
        setError("Password or username incorrect");
      }

      const data = await response.json();
      setToken(data.token);
      localStorage.setItem("userToken", data.token);
    } catch (error) {
      console.error("Error during POST request:", error);
    }
  };
  return (
    <div className="container mt-6 bg-dark-subtle w-50 rounded-4 shadow">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <ul
            className="nav nav-pills nav-justified mb-3"
            id="ex1"
            role="tablist"
          >
            <li
              className="nav-item mt-3 fw-bold fs-4 bg-dark p-2 text-white"
              role="presentation"
            >
              <p className="mt-2">FakeStore Login</p>
            </li>
          </ul>

          <div className="tab-content">
            <div className="text-center mb-4">
              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="loginName"
                  className="form-control"
                  placeholder="Username"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
                <label
                  className="form-label d-flex flex-wrap"
                  htmlFor="loginName"
                >
                  username <p className="fw-lighter ml-2">(mor_2314)</p>
                </label>
              </div>

              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="loginPassword"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label
                  className="form-label d-flex flex-wrap"
                  htmlFor="loginPassword"
                >
                  Password <p className="fw-lighter ml-2">(83r5^_)</p>
                </label>
                {error && (
                  <small className="text-danger fw-bold">
                    Error {error} Place
                  </small>
                )}
              </div>

              <button
                className="btn btn-outline-dark mb-4"
                onClick={loginHandle}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
