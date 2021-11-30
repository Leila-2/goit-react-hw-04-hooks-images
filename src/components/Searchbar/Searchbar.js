import s from "./Searchbar.module.css";
import React, { useState } from "react";
import { toast } from "react-toastify";

export default function Searchbar({ onSubmit }) {
  const [value, setValue] = useState("")


  const onChange = (e) => {
    setValue(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(value);
    setValue("");
    if (value.trim() === "") {
      toast("Введите тему для картинки :)", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
  };


  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={s.Button}>
          <span className={s.ButtonLabel}>Search</span>
        </button>

        <input
          className={s.Input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={onChange}
          value={value}
        />
      </form>
    </header>
  );
}


