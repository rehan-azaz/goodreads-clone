import React, { useState } from "react";
import Modal from "react-modal";
import Dropzone from "react-dropzone";

Modal.setAppElement("#root");

const CreateBookModal = ({ modalIsOpen, closeModal }) => {
  const [bookInput, setBookInput] = useState({
    title: "",
    author: "",
    data: Date.now(),
    coverImg: null,
    bookCollection: "",
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
            transform: "translate(-50%, -50%)",
          },
        }}
        contentLabel="Create Book Modal"
      >
        <button onClick={closeModal}>close</button>

        <form>
          <h1>Create Book</h1>
          <div>
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className={"form-control w-100"}
              id="email"
              name="email"
              onChange={(e) =>
                setBookInput((prevState) => ({
                  ...prevState,
                  title: e.target.value,
                }))
              }
            />
          </div>
          <Dropzone onDrop={handleDrop}>
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <p>
                  Drag 'n' drop the book cover image here, or click to select
                </p>
              </div>
            )}
          </Dropzone>

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
