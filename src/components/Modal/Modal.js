import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import s from "./Modal.module.css";

// const modalRoot = document.querySelector("#modal-root");
// export default class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener("keydown", this.closeHandler);
//   }

//   componentWillUnmount() {
//     window.removeEventListener("keydown", this.closeHandler);
//   }

//   closeHandler = (e) => {
//     if (e.code === "Escape") {
//       console.log("ESC :)");
//       this.props.onClose();
//     }
//   };

//   backdropHandler = (event) => {
//     if (event.currentTarget === event.target) {
//       this.props.onClose();
//     }
//   };

//   render() {
//     return createPortal(
//       <div className={s.Overlay} onClick={this.backdropHandler}>
//         <div className={s.Modal}>
//           <img src={this.props.url} alt="" />
//         </div>
//       </div>,
//       modalRoot
//     );
//   }
// }

const modalRoot = document.querySelector("#modal-root");
//console.log(modalRoot)
export default function Modal({ onClose, url }) {

  useEffect(() => {
    const closeHandler = (e) => {
      if (e.code === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", closeHandler);

    return (() => { window.removeEventListener("keydown", closeHandler) });
  }, [onClose]);



  const backdropHandler = (event) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };


  return createPortal(
    <div className={s.Overlay} onClick={backdropHandler}>
      <div className={s.Modal}>
        <img src={url} alt="" />
      </div>
    </div>,
    modalRoot,
  );
}
