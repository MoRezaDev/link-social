import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { FaTimes } from "react-icons/fa";

function Modal({ isOpen, onClose, children, modalRef }) {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setShowContent(true), 10);
    } else {
      const timer = setTimeout(() => setShowContent(false), 10);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowContent(false);
        setTimeout(() => onClose(), 500);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      className={`fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 transition-all duration-300 pointer-events-none opacity-0 ${
        showContent ? "opacity-100 pointer-events-auto" : ""
      }`}
    >
      {children}
    </div>,
    document.getElementById("root2")
  );
}

export default Modal;
