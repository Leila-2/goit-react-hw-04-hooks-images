import React, { useState } from "react";
import Searchbar from "../Searchbar/Searchbar";
import ImageGallery from "../ImageGallery/ImageGallery";

export default function App() {
  const [value, setValue] = useState("")

  const handleFormSubmit = (value) => {
    setValue(value);
  };

  return (
    <div className="App">
      <Searchbar onSubmit={handleFormSubmit} />
      <ImageGallery value={value} />
    </div>
  );

}

