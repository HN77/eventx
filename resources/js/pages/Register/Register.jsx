import React, { useState } from "react";
import { router, usePage } from "@inertiajs/react";
import Navbar from "../../components/Navbar/Navbar";

const Register = () => {
    const { errors } = usePage().props;
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handlerSubmit = (e) => {
        e.preventDefault();
        try {
            router.post("/users", {
                name,
                email,
                password,
            });
        } catch (error) {
            error(error.message);
        }
    };

    return (
        <div className="register">
            <Navbar />
            <form onSubmit={handlerSubmit} className="register__form">
                <div className="register__title">Inscription</div>
                <div className="register__form-group">
                    <label className="register__label" htmlFor="username">
                        Username
                    </label>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="register__input"
                        type="text"
                        id="username"
                    />
                    <span className="register__error">{errors.name}</span>
                </div>
                <div className="register__form-group">
                    <label className="register__label" htmlFor="email">
                        Email
                    </label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="register__input"
                        type="email"
                        id="email"
                    />
                    <span className="register__error">{errors.email}</span>
                </div>
                <div className="register__form-group">
                    <label className="register__label" htmlFor="password">
                        Password
                    </label>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="register__input"
                        type="password"
                        id="password"
                    />
                    <span className="register__error">{errors.password}</span>
                </div>
                <button type="submit" className="register__btn">
                    Inscription
                </button>
            </form>
        </div>
    );
};

export default Register;
