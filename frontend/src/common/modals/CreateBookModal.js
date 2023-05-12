import React, { useState } from "react";
import Modal from "react-modal";
import Dropzone from "react-dropzone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faUpload } from "@fortawesome/free-solid-svg-icons";
import { CREATE_BOOK } from "../../graphql/mutations";
import { useMutation } from "@apollo/client";

Modal.setAppElement("#root");

const CreateBookModal = ({ modalIsOpen, closeModal }) => {
  const [inputError, setInputError] = useState(false);
  const [createBook, { loading, error }] = useMutation(CREATE_BOOK);
  const [bookInput, setBookInput] = useState({
    title: "",
    author: "",
    published: "",
    coverImg: null,
    bookCollection: "",
    description: "",
  });

  const handleDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    setBookInput({
      ...bookInput,
      coverImg: file,
    });
  };

  const handleSubmit = (e) => {
    console.log({ bookInput });
    if (bookInput && bookInput.title === "") {
      setInputError(true);
    } else if (bookInput && bookInput.author === "") {
      setInputError(true);
    } else if (bookInput && bookInput.published === "") {
      setInputError(true);
    } else if (bookInput && bookInput.description === "") {
      setInputError(true);
    } else {
      setInputError(false);
    }
    if (!inputError) {
      createBook({
        variables: {
          title: bookInput.title,
          author: bookInput.author,
          published: bookInput.published,
          description: bookInput.description,
          coverImg: bookInput.coverImg,
        },
      })
        .then(({ data }) => {
          console.log(data);
          // if (data && data.book && data.book) {
          //   // closeModal(true)
          // }
        })
        .catch((err) => {
          console.log({ err });
        });
    }
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            marginTop: "3%",
            transform: "translate(-50%, -50%)",
          },
        }}
        contentLabel="Create Book Modal"
      >
        <form className="form-container">
          <div className="close-modal-icon">
            <button onClick={closeModal}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <h2 className="form-header">Create Book</h2>
          <div className="form-input-container">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className={
                inputError && bookInput.title === ""
                  ? "form-input w-100 form-input-error"
                  : "form-input w-100"
              }
              id="title"
              name="title"
              onChange={(e) =>
                setBookInput((prevState) => ({
                  ...prevState,
                  title: e.target.value,
                }))
              }
            />
          </div>

          <div className="form-input-container">
            <label htmlFor="author" className="form-label">
              Author
            </label>
            <input
              type="text"
              className={
                inputError && bookInput.author === ""
                  ? "form-input w-100 form-input-error"
                  : "form-input w-100"
              }
              id="author"
              name="author"
              onChange={(e) =>
                setBookInput((prevState) => ({
                  ...prevState,
                  author: e.target.value,
                }))
              }
            />
          </div>

          <div className="form-input-container">
            <label htmlFor="title" className="form-label">
              Published Date
            </label>
            <input
              type="date"
              className={
                inputError && bookInput.published === ""
                  ? "form-input w-100 form-input-error"
                  : "form-input w-100"
              }
              id="published"
              name="published"
              max={`${new Date().toISOString().split("T")[0]}`}
              onChange={(e) =>
                setBookInput((prevState) => ({
                  ...prevState,
                  published: e.target.value,
                }))
              }
            />
          </div>

          <div className="form-input-container">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              className={
                inputError && bookInput.description === ""
                  ? "form-input form-input-error"
                  : "form-input"
              }
              required
              onChange={(e) =>
                setBookInput((prevState) => ({
                  ...prevState,
                  description: e.target.value,
                }))
              }
            ></textarea>
          </div>

          <div className="form-input-container">
            <label htmlFor="coverImg" className="form-label">
              Cover Image
            </label>
            <Dropzone single onDrop={handleDrop}>
              {({ getRootProps, getInputProps }) => (
                <div
                  {...getRootProps()}
                  className={
                    inputError && bookInput.coverImg === null
                      ? "dropzone-container-error"
                      : "dropzone-container"
                  }
                >
                  <input {...getInputProps()} />
                  {bookInput && bookInput.coverImg ? (
                    <p>
                      <span>{bookInput.coverImg.name}</span>
                    </p>
                  ) : (
                    <p>
                      <FontAwesomeIcon icon={faUpload} /> Drag 'n' drop the book
                      cover image here, or click to select
                    </p>
                  )}
                </div>
              )}
            </Dropzone>
          </div>
          <button
            onClick={(e) => {
              handleSubmit(e);
            }}
            type="button"
            className="createbtn"
          >
            Create
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default CreateBookModal;
