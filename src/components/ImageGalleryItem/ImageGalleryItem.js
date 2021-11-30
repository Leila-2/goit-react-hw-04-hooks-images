import React, { useState } from "react";
import s from "./ImageGalleryItem.module.css";
import Modal from "../Modal/Modal";

export default function ImageGalleryItem({ webformatURL, id, largeImageURL }) {
  const [showModal, setShowModal] = useState(false);


  const toggleModal = () => {
    setShowModal(!showModal);
  };



  return (
    <>
      <li
        key={id}
        className={s.ImageGalleryItem}
        onClick={toggleModal}>
        <img
          className={s.ItemImage}
          src={webformatURL}
          alt="" />
      </li>
      {showModal && <Modal onClose={toggleModal} url={largeImageURL} />}
    </>
  )
}

//export default ImageGalleryItem;
