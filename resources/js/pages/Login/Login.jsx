import React, { useState } from "react";
import { router, usePage } from "@inertiajs/react";
import Navbar from "../../components/Navbar/Navbar";

const Login = ({ user }) => {
    const { errors } = usePage().props;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handlerSubmit = (e) => {
        e.preventDefault();
        try {
            router.post("/login/authenticate", {
                email,
                password,
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="login">
            <Navbar />
            <form onSubmit={handlerSubmit} className="login__form">
                <div className="login__title">Connexion</div>
                <div className="login__form-group">
                    <label className="login__label" htmlFor="email">
                        Email
                    </label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="login__input"
                        type="email"
                        id="email"
                    />
                    <span className="login__error">{errors.email}</span>
                </div>
                <div className="login__form-group">
                    <label className="login__label" htmlFor="password">
                        Password
                    </label>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="login__input"
                        type="password"
                        id="password"
                    />
                    <span className="login__error">{errors.password}</span>
                </div>
                <button type="submit" className="login__btn">
                    Se connecter
                </button>
            </form>
        </div>
    );
};

export default Login;
