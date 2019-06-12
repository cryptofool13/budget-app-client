import React from "react";

const Modal = ({ children, show, handleClose }) => {
  const classNames = show ? "modal display-block" : "modal display-none";
  return (
    <div className={classNames}>
      <div className="modal-main">
        {children}
        <br />
        <button onClick={() => handleClose()}>close</button>
      </div>
    </div>
  );
};

export default Modal;
