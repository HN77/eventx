import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "@inertiajs/react";

const EventCard = ({ event }) => {
    return (
        <div className="event-card">
            <Link href={`/events/${event.id}`}>
                <img
                    src={`/storage/${event.image}`}
                    className="event-card__image"
                    alt="Event image"
                />
            </Link>
            <div className="event-card__group">
                <div className="event-card__title">{event.title}</div>
            </div>
            <div className="event-card__info">
                <span className="event-card__start-date">
                    {event.start_date}
                </span>
                <div className="event-card__location">
                    <span>
                        <CiLocationOn />
                    </span>
                    <span>{event.location}</span>
                </div>
            </div>
        </div>
    );
};

export default EventCard;
