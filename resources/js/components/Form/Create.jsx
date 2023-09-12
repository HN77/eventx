import React from "react";
import { useForm } from "@inertiajs/react";
import { Link } from "@inertiajs/react";
import { AiOutlineClose } from "react-icons/ai";

const Create = ({ setModalIsOpen }) => {
    const { data, setData, post } = useForm({
        title: "",
        start_date: "",
        location: "",
        description: "",
        image: null,
    });

    function submit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("start_date", data.start_date);
        formData.append("location", data.location);
        formData.append("description", data.description);
        formData.append("image", data.image);
        post("/events", formData);
        setModalIsOpen(false);
    }

    return (
        <div className="modal">
            <form
                onSubmit={submit}
                className="modal__form"
                action="/your-endpoint"
                method="POST"
                encType="multipart/form-data"
            >
                <h1 className="modal__title">Créer un évenement</h1>
                <div className="modal__form-group">
                    <label htmlFor="title">Titre</label>
                    <input
                        id="title"
                        className="modal__input"
                        placeholder="Titre de l'évenement"
                        type="text"
                        value={data.title}
                        onChange={(e) => setData("title", e.target.value)}
                    />
                </div>
                <div className="modal__form-group">
                    <label htmlFor="start_date">Start Date</label>
                    <input
                        id="start_date"
                        className="modal__input"
                        placeholder="Date de l'évenement"
                        type="date"
                        value={data.start_date}
                        onChange={(e) => setData("start_date", e.target.value)}
                    />
                </div>
                <div className="modal__form-group">
                    <label htmlFor="location">Localisation</label>
                    <input
                        id="location"
                        className="modal__input"
                        placeholder="Localisation de l'évenement"
                        type="text"
                        value={data.location}
                        onChange={(e) => setData("location", e.target.value)}
                    />
                </div>
                <div className="modal__form-group">
                    <label htmlFor="description">Description</label>
                    <input
                        id="description"
                        className="modal__input"
                        placeholder="Description de l'évenement"
                        type="text"
                        value={data.description}
                        onChange={(e) => setData("description", e.target.value)}
                    />
                </div>
                <div className="modal__form-group">
                    <label htmlFor="image">Image</label>
                    <input
                        id="image"
                        className="modal__input-image"
                        type="file"
                        onChange={(e) => setData("image", e.target.files[0])}
                    />
                </div>

                <div className="modal__close-icon">
                    <Link href="/">
                        <AiOutlineClose onClick={() => setModalIsOpen(false)} />
                    </Link>
                </div>
                <button type="submit" className="modal__btn">
                    Envoyer
                </button>
            </form>
        </div>
    );
};

export default Create;
