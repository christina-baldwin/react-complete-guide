import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

// this is a side effect, need to synchornise a vaue to a DOM API
function Modal({ open, children, onClose }) {
  const dialog = useRef();

  // this code has dependencies becuase can change from false to true and vice versa, so open needs to be a dependency as the modalIsOpen function which sets true or false is attached to this
  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);

  // dont need this anymore
  // useImperativeHandle(ref, () => {
  //   return {
  //     open: () => {
  //       dialog.current.showModal();
  //     },
  //     close: () => {
  //       dialog.current.close();
  //     },
  //   };
  // });

  return createPortal(
    <dialog className="modal" ref={dialog} onClose={onClose}>
      {/* to make sure timeout timer is not set immediately */}
      {open ? children : null}
    </dialog>,
    document.getElementById("modal")
  );
}

export default Modal;
