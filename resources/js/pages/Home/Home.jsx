import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import Events from "../../components/Events/Events";
import { usePage } from "@inertiajs/react";
import { toast } from "react-toastify";
import Navbar from "../../components/Navbar/Navbar";

const Home = ({ flash, user, events }) => {
    const { errors } = usePage().props;
    const { success } = flash;
    if (success) {
        toast.success(success);
    }
    if (errors) {
        toast.error(
            errors.title ||
                errors.start_date ||
                errors.location ||
                errors.description ||
                errors.image
        );
    }

    return (
        <div className="home">
            <Navbar user={user} />
            <Carousel />
            <Events />
        </div>
    );
};

export default Home;
