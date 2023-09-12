import { useState } from "react";
import { Link, router } from "@inertiajs/react";
import { CiLogin } from "react-icons/ci";
import { BsFillPersonPlusFill } from "react-icons/bs";
import Create from "../Form/Create";

const Navbar = ({ user }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleLogout = () => {
        router.post("/logout");
    };

    return (
        <div className="navbar">
            <div className="navbar__logo">
                <Link href="/">EventX</Link>
            </div>
            {user ? (
                <>
                    <div className="navbar__username">
                        <div className="navbar__text">
                            Bonjour <span>{user.name}</span>
                        </div>
                    </div>
                    <div className="navbar__logout">
                        <div className="navbar__text">
                            <div onClick={handleLogout}>Se déconnecter</div>
                        </div>
                        <div className="navbar__icon">
                            <CiLogin />
                        </div>
                    </div>
                    <div className="navbar__modal">
                        <div
                            className="navbar__text"
                            onClick={() => setModalIsOpen(true)}
                        >
                            Créer un événement
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className="navbar__signin">
                        <div className="navbar__text">
                            <Link href="/login">Connexion</Link>
                        </div>
                        <div className="navbar__icon">
                            <CiLogin />
                        </div>
                    </div>
                    <div className="navbar__signup">
                        <div className="navbar__text">
                            <Link href="/register">Inscription</Link>
                        </div>
                        <div className="navbar__icon">
                            <BsFillPersonPlusFill />
                        </div>
                    </div>
                </>
            )}
            {modalIsOpen && <Create setModalIsOpen={setModalIsOpen} />}
        </div>
    );
};

export default Navbar;
