import React, { useEffect, useState } from "react";
import { router } from "@inertiajs/react";
import { AiOutlineClose } from "react-icons/ai";

const Edit = ({ setEditModalIsOpen, event }) => {
    const [title, setTitle] = useState(event.title);
    const [start_date, setStart_date] = useState(event.start_date);
    const [location, setLocation] = useState(event.location);
    const [description, setDescription] = useState(event.description);

    const updatePost = async (e) => {
        e.preventDefault();

        router.put(`/events/${event.id}`, {
            title: title,
            start_date: start_date,
            location: location,
            description: description,
        });
        setEditModalIsOpen(false);
    };

    return (
        <div className="modal">
            <form
                onSubmit={updatePost}
                className="modal__form"
                action={`/events/${event.id}`}
                encType="multipart/form-data"
            >
                <h1 className="modal__title">Modifier un événement</h1>
                <div className="modal__form-group">
                    <label htmlFor="title">Titre</label>
                    <input
                        name="title"
                        className="modal__input"
                        placeholder="Titre de l'événement"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="modal__form-group">
                    <label htmlFor="start_date">Start Date</label>
                    <input
                        name="start_date"
                        className="modal__input"
                        placeholder="Date de l'événement"
                        type="date"
                        value={start_date}
                        onChange={(e) => setStart_date(e.target.value)}
                    />
                </div>
                <div className="modal__form-group">
                    <label htmlFor="location">Localisation</label>
                    <input
                        name="location"
                        className="modal__input"
                        placeholder="Localisation de l'événement"
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </div>
                <div className="modal__form-group">
                    <label htmlFor="description">Description</label>
                    <input
                        name="description"
                        className="modal__input"
                        placeholder="Description de l'événement"
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                <div className="modal__close-icon">
                    <AiOutlineClose onClick={() => setEditModalIsOpen(false)} />
                </div>
                <div className="modal__close-icon">
                    <AiOutlineClose onClick={() => setEditModalIsOpen(false)} />
                </div>
                <button type="submit" className="modal__btn">
                    Modifier
                </button>
            </form>
        </div>
    );
};

export default Edit;

// import React, { useEffect } from "react";
// import { useForm, router, Link } from "@inertiajs/react";
// import { AiOutlineClose } from "react-icons/ai";

// const Edit = ({ setEditModalIsOpen, event }) => {
//     const { data, setData, put } = useForm({
//         title: event.title || "",
//         start_date: event.start_date || "",
//         location: event.location || "",
//         description: event.description || "",
//         image: event.image || null,
//     });

//     useEffect(() => {
//         setData("title", event.title || "");
//         setData("start_date", event.start_date || "");
//         setData("location", event.location || "");
//         setData("description", event.description || "");
//     }, [event]);

//     function submit(e) {
//         e.preventDefault();
//         const formData = new FormData();
//         formData.append("title", data.title);
//         formData.append("start_date", data.start_date);
//         formData.append("location", data.location);
//         formData.append("description", data.description);
//         if (data.image) {
//             formData.append("image", data.image);
//         }
//         router.put(`/events/${event.id}`, formData);
//     }

//     return (
//         <div className="modal">
//             <form
//                 onSubmit={submit}
//                 className="modal__form"
//                 action={`/events/${event.id}`}
//                 encType="multipart/form-data"
//                 method="PUT"
//             >
//                 <h1 className="modal__title">Modifier un évenement</h1>
//                 <div className="modal__form-group">
//                     <label htmlFor="title">Titre</label>
//                     <input
//                         name="title"
//                         className="modal__input"
//                         placeholder="Titre de l'évenement"
//                         type="text"
//                         value={data.title}
//                         onChange={(e) => setData("title", e.target.value)}
//                     />
//                 </div>
//                 <div className="modal__form-group">
//                     <label htmlFor="start_date">Start Date</label>
//                     <input
//                         name="start_date"
//                         className="modal__input"
//                         placeholder="Date de l'évenement"
//                         type="date"
//                         value={data.start_date}
//                         onChange={(e) => setData("start_date", e.target.value)}
//                     />
//                 </div>
//                 <div className="modal__form-group">
//                     <label htmlFor="location">Localisation</label>
//                     <input
//                         name="location"
//                         className="modal__input"
//                         placeholder="Localisation de l'évenement"
//                         type="text"
//                         value={data.location}
//                         onChange={(e) => setData("location", e.target.value)}
//                     />
//                 </div>
//                 <div className="modal__form-group">
//                     <label htmlFor="description">Description</label>
//                     <input
//                         name="description"
//                         className="modal__input"
//                         placeholder="Description de l'évenement"
//                         type="text"
//                         value={data.description}
//                         onChange={(e) => setData("description", e.target.value)}
//                     />
//                 </div>
//                 <div className="modal__form-group">
//                     <label htmlFor="image">Image</label>
//                     <input
//                         name="image"
//                         className="modal__input-image"
//                         type="file"
//                         onChange={(e) => setData("image", e.target.files[0])}
//                     />
//                 </div>
//                 <div className="modal__close-icon">
//                     <AiOutlineClose onClick={() => setEditModalIsOpen(false)} />
//                 </div>
//                 <button type="submit" className="modal__btn">
//                     Modifier
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default Edit;

// import React from "react";
// import { Link, useForm, usePage } from "@inertiajs/react";
// import { AiOutlineClose } from "react-icons/ai";

// const Edit = ({ setEditModalIsOpen }) => {
//     const { event } = usePage().props;
//     const { data, setData, put, errors } = useForm({
//         title: event.title || "",
//         start_date: event.start_date || "",
//         location: event.location || "",
//         description: event.description || "",
//         image: event.image || "",
//     });

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         put(route("events.update", event.id));
//     };

//     return (
//         <div className="modal">
//             <form
//                 onSubmit={handleSubmit}
//                 className="modal__form"
//                 encType="multipart/form-data"
//             >
//                 <h1 className="modal__title">Modifier un événement</h1>
//                 <div className="modal__form-group">
//                     <label htmlFor="title">Titre</label>
//                     <input
//                         type="text"
//                         name="title"
//                         value={data.title}
//                         errors={errors.title}
//                         className="modal__input"
//                         placeholder="Titre de l'événement"
//                         onChange={(e) => setData("title", e.target.value)}
//                     />
//                 </div>
//                 <div className="modal__form-group">
//                     <label htmlFor="start_date">Date de début</label>
//                     <input
//                         type="date"
//                         name="start_date"
//                         value={data.start_date}
//                         errors={errors.start_date}
//                         className="modal__input"
//                         placeholder="Date de l'événement"
//                         onChange={(e) => setData("start_date", e.target.value)}
//                     />
//                 </div>
//                 <div className="modal__form-group">
//                     <label htmlFor="location">Localisation</label>
//                     <input
//                         type="text"
//                         name="location"
//                         value={data.location}
//                         errors={errors.location}
//                         className="modal__input"
//                         placeholder="Localisation de l'événement"
//                         onChange={(e) => setData("location", e.target.value)}
//                     />
//                 </div>
//                 <div className="modal__form-group">
//                     <label htmlFor="description">Description</label>
//                     <input
//                         type="text"
//                         name="description"
//                         value={data.description}
//                         errors={errors.description}
//                         className="modal__input"
//                         placeholder="Description de l'événement"
//                         onChange={(e) => setData("description", e.target.value)}
//                     />
//                 </div>
//                 <div className="modal__form-group">
//                     <label htmlFor="image">Image</label>
//                     <input
//                         type="file"
//                         name="image"
//                         value={data.image}
//                         errors={errors.image}
//                         className="modal__input"
//                         placeholder="Image de l'événement"
//                         onChange={(e) => setData("image", e.target.files[0])}
//                     />
//                 </div>
//                 <div className="modal__close-icon">
//                     <Link href="/">
//                         <AiOutlineClose
//                             onClick={() => setEditModalIsOpen(false)}
//                         />
//                     </Link>
//                 </div>
//                 <button type="submit" className="modal__btn">
//                     Mettre à jour
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default Edit;
