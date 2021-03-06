import React, { useState, useEffect } from "react";
import s from "./ImageGallery.module.css";
import Loader from "../Loader/LoaderComp";
import Button from "../Button/Button";

import { ToastContainer } from "react-toastify";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import "react-toastify/dist/ReactToastify.css";
import imgFinder from "../../servises/api";

export default function ImageGallery({ value }) {

  const [imgInfo, setImgInfo] = useState([])
  const [error, setError] = useState(null)
  const [page, setPage] = useState(1)
  const [status, setStatus] = useState("idle")

  useEffect(() => {
    if (!value)
      return

    setStatus("pending")
    setPage(1)
    setImgInfo([])

    imgFinder
      .fetchImg(value, 1)

      .then((imgInfo) => {
        if (imgInfo.length === 0) {
          setStatus("rejected")
          setError(new Error())
          return Promise.reject(new Error(`Нет фото на тему ${value}`));
        }
        setImgInfo(imgInfo)
        setStatus("resolved")
      })

      .catch((error) => setError(error));
  }, [value])

  useEffect(() => {
    if (!value) return

    imgFinder.fetchImg(value, page)
      .then((imgInfo) => {
        if (imgInfo.length === 0) {
          setStatus("rejected")
          setError(new Error())
          return Promise.reject(new Error(`Нет фото на тему ${value}`));
        }
        setImgInfo((prevImg) => [...prevImg, ...imgInfo])
        setStatus("resolved")

      })

      .catch((error) => setError(error));

  }, [page])



  const loadMore = () => {
    setPage(prev => prev + 1);
  };


  if (status === "idle") {
    return <ToastContainer position="top-right" autoClose={5000} />;
  }

  if (status === "pending") {
    return <Loader />;
  }

  if (status === "rejected") {
    return <p>{error.message}</p>;
  }

  if (status === "resolved") {
    return (
      <>
        <ul className={s.ImageGallery}>
          {imgInfo.map(({ webformatURL, id, largeImageURL }) => (
            <ImageGalleryItem
              webformatURL={webformatURL}
              key={id}
              largeImageURL={largeImageURL}
            />
          ))}
        </ul>

        <Button onClick={loadMore} />
      </>
    );
  }
}

// export default class ImageGallery extends Component {
//   state = {
//     imgInfo: null,
//     error: null,
//     page: 1,
//     status: "idle",
//   };

//   componentDidUpdate(prevProps, prevState) {
//     const newValue = this.props.value;
//     const oldValue = prevProps.value;
//     const newPage = this.state.page;
//     const prevPage = prevState.page;

//     if (oldValue !== newValue) {
//       this.setState({ status: "pending" });
//       imgFinder
//         .fetchImg(newValue, newPage)

//         .then((imgInfo) => {
//           if (imgInfo.length === 0) {
//             this.setState({ status: "rejected", error: new Error() });
//             return Promise.reject(new Error(`Нет фото на тему ${newValue}`));
//           }
//           this.setState({ imgInfo, status: "resolved" });
//         })

//         .catch((error) => this.setState({ error }));
//     }

//     if (prevPage !== newPage) {
//       imgFinder
//         .fetchImg(newValue, newPage)
//         .then((imgInfo) => {
//           if (imgInfo.length === 0) {
//             this.setState({ status: "rejected", error: new Error() });
//             return Promise.reject(new Error(`Нет фото на тему ${newValue}`));
//           }
//           this.setState((prevState) => ({
//             imgInfo: [...prevState.imgInfo, ...imgInfo],
//             status: "resolved",
//           }));
//         })

//         .catch((error) => this.setState({ error }));
//     }
//   }

//   loadMore = () => {
//     this.setState((prevState) => ({ page: prevState.page + 1 }));
//   };

//   render() {
//     const { status, imgInfo, error } = this.state;

//     if (status === "idle") {
//       return <ToastContainer position="top-right" autoClose={5000} />;
//     }

//     if (status === "pending") {
//       return <Loader />;
//     }

//     if (status === "rejected") {
//       return <p>{error.message}</p>;
//     }

//     if (status === "resolved") {
//       return (
//         <>
//           <ul className={s.ImageGallery}>
//             {imgInfo.map(({ webformatURL, id, largeImageURL }) => (
//               <ImageGalleryItem
//                 webformatURL={webformatURL}
//                 key={id}
//                 largeImageURL={largeImageURL}
//               />
//             ))}
//           </ul>

//           <Button onClick={this.loadMore} />
//         </>
//       );
//     }
//   }
// }
