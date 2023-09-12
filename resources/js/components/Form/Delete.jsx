import React from "react";
import { Link, router } from "@inertiajs/react";
import { CiTrash } from "react-icons/ci";

const Delete = ({ event }) => {
    const handleDelete = () => {
        router.delete(`/events/${event.id}`);
    };

    return (
        <form onClick={handleDelete}>
            <Link to={`/events/${event}`}>
                <span className="delete">
                    <CiTrash />
                </span>
            </Link>
        </form>
    );
};

export default Delete;
