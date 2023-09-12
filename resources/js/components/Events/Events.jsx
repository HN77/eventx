import React from "react";
import EventCard from "../EventCard/EventCard";
import Search from "../Search/Search";
import { Link, usePage } from "@inertiajs/react";

const Events = () => {
    const { links, events } = usePage().props;

    return (
        <div className="events">
            <Search />
            <div className="events__content">
                {events.data.map((event) => (
                    <EventCard key={event.id} event={event} />
                ))}
            </div>

            <div className="events__paginate">
                {events.links.map((link, index) => (
                    <span key={index} className="events__paginate-item">
                        {link.url ? (
                            <Link href={link.url}>{link.label}</Link>
                        ) : (
                            <span className="active">{link.label}</span>
                        )}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Events;
