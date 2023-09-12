import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FiEdit } from "react-icons/fi";
import Navbar from "../../components/Navbar/Navbar";
import Delete from "../../components/Form/Delete";
import Edit from "../../components/Form/Edit";

const Event = ({ event, user }) => {
    const [editModalIsOpen, setEditModalIsOpen] = useState(false);
    return (
        <div className="event">
            <Navbar user={user} />
            <div className="event__content">
                <div className="event__img">
                    <img
                        className="event__img"
                        src={`/storage/${event.image}`}
                        alt="Event image"
                    />
                </div>
                <div className="event__info">
                    <div className="event__title">{event.title}</div>
                    <div className="event__date">
                        L'événement à venir le: {event.start_date}
                    </div>
                    <div className="event__location">
                        <span>
                            <CiLocationOn />
                        </span>
                        {event.location}
                    </div>
                    <div className="event__description">
                        {event.description}
                    </div>
                    <div className="event__actions">
                        <div className="event__edit">
                            {editModalIsOpen && (
                                <Edit
                                    setEditModalIsOpen={setEditModalIsOpen}
                                    event={event}
                                />
                            )}
                            <FiEdit onClick={() => setEditModalIsOpen(true)} />
                        </div>
                        <div className="event__delete">
                            <Delete event={event} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Event;
