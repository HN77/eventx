import { useState } from "react";
import { DateRange } from "react-date-range";
import { FaCalendarAlt } from "react-icons/fa";
import { FaPersonHiking } from "react-icons/fa6";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";

const Search = ({ events }) => {
    console.log(events);
    const [isDateOpen, setIsDateOpen] = useState(false);
    const [title, setTitle] = useState("");

    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        },
    ]);

    const handleSearch = () => {
        router.post(
            "/search",
            { start_date, title },
            {
                onSuccess: (data) => {
                    setResults(data);
                },
            }
        );
    };

    return (
        <div className="search">
            <div className="search__text-search">
                <FaPersonHiking />
                <input
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Rechercher un évènment"
                    type="text"
                    className="search__input"
                />
            </div>
            <div className="search__date">
                <FaCalendarAlt />
                <div
                    className="search__date-search"
                    onClick={() => setIsDateOpen(!isDateOpen)}
                >
                    {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                        date[0].endDate,
                        "MM/dd/yyyy"
                    )}`}
                </div>
                {isDateOpen && (
                    <div className="search__date-range">
                        <DateRange
                            editableDateInputs={true}
                            onChange={(item) => setDate([item.selection])}
                            moveRangeOnFirstSelection={true}
                            ranges={date}
                            minDate={new Date()}
                        />
                    </div>
                )}
            </div>
            <button className="search__btn" onClick={handleSearch}>
                Recherche
            </button>
        </div>
    );
};

export default Search;

// import React, { useState } from "react";
// import { CiSearch } from "react-icons/ci";
// import { DateRange } from "react-date-range";
// import "react-date-range/dist/styles.css";
// import "react-date-range/dist/theme/default.css";

// const Search = () => {
//     const [date, setDate] = useState([
//         {
//             startDate: new Date(),
//             endDate: null,
//             key: "selection",
//         },
//     ]);
//     return (
//         <div className="search">
//             <div className="search__text-search">
//                 <input
//                     className="search__input"
//                     type="text"
//                     placeholder="Rechercher un événement"
//                 />
//             </div>
//             <div className="search__date-search">
//                 <DateRange
//                     editableDateInputs={true}
//                     onChange={(item) => setDate([item.selection])}
//                     moveRangeOnFirstSelection={false}
//                     ranges={date}
//                 />
//             </div>
//             <div className="search__icon">
//                 <CiSearch />
//             </div>
//         </div>
//     );
// };

// export default Search;
