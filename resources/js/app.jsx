import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../../resources/js/components/Navbar/Navbar";
import Footer from "../../resources/js/components/Footer/Footer";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

createInertiaApp({
    resolve: (name, page) => {
        const pages = import.meta.glob("./Pages/**/*.jsx", {
            eager: true,
        });
        return pages[`./Pages/${name}.jsx`];
    },
    setup({ el, App, props }) {
        createRoot(el).render(
            <>
                <ToastContainer />
                <App {...props} />
                <Footer />
            </>
        );
    },
});
