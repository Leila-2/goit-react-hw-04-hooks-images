import React, { useState } from "react";
import Searchbar from "../Searchbar/Searchbar";
import ImageGallery from "../ImageGallery/ImageGallery";

export default function App() {
  const [value, setValue] = useState("")
  // state = {
  //   showModal: false,
  //   value: "",
  // };
  // toggleModal = () => {
  //   this.setState(({ showModal }) => ({
  //     showModal: !showModal,
  //   }));
  // };
  console.log(value);

  const handleFormSubmit = (value) => {
    setValue(value);
  };


  //const handleFormSubmit = this.handleFormSubmit;
  return (
    <div className="App">
      <Searchbar onSubmit={handleFormSubmit} />
      <ImageGallery value={value} />
    </div>
  );

}

// export default App;

// class App extends Component {
//   state = {
//     showModal: false,
//     value: "",
//   };
//   // toggleModal = () => {
//   //   this.setState(({ showModal }) => ({
//   //     showModal: !showModal,
//   //   }));
//   // };
//   handleFormSubmit = (value) => {
//     console.log(value);
//     this.setState({ value: value });
//   };
//   render() {
//     const handleFormSubmit = this.handleFormSubmit;
//     return (
//       <div className="App">
//         <Searchbar onSubmit={handleFormSubmit} />
//         <ImageGallery value={this.state.value} />
//       </div>
//     );
//   }
// }

// export default App;
