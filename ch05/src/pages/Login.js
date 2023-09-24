import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const Login = ({ authenticated, login }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleClick = () => {
        try {
        login({ email, password });
        } catch (e) {
        alert("Failed to login");
        setEmail("");
        setPassword("");
        }
    };
    if (authenticated) return <Navigate to="/login" replace={true} />;
    return (
        <div className="text-center">
            <h1>Login</h1>
            <div className="my-3">
                <div class="row justify-content-md-center">
                    <div class="col-md-auto col-lg-5">
                        <input
                            value={email}
                            onChange={({ target: { value } }) => setEmail(value)}
                            type="text"
                            placeholder="email"
                            className="form-control"
                        />
                    </div>
                </div>
                <div class="row justify-content-md-center mt-2">
                    <div class="col-md-auto col-lg-5">
                        <input
                            value={password}
                            onChange={({ target: { value } }) => setPassword(value)}
                            type="password"
                            placeholder="password"
                            className="form-control"
                        />
                    </div>
                </div>
            </div>
            <button className="btn btn-primary" onClick={handleClick}>Login</button>
        </div>
    );
};

export default Login;