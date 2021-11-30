import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import s from "../ImageGallery/ImageGallery.module.css";

export default function LoaderComponent(props) {
  return (
    <Loader
      type="Puff"
      color="#00BFFF"
      height={80}
      width={80}
      timeout={3000}
      className={s.Loader}
    />
  );
}
