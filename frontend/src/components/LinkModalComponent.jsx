import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { FaTimes } from "react-icons/fa";

function LinkModalComponent({ isOpen, onClose }) {
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
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
      className={`fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 transition-all duration-300 pointer-events-none ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0"
      }`}
    >
      <div
        ref={modalRef}
        className={`bg-white p-6 rounded-lg shadow-lg w-80 relative transform transition-transform duration-300 ${
          isOpen ? "scale-100" : "scale-95"
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
        >
          <FaTimes className="text-xl" />
        </button>
        <h2 className="text-lg font-semibold mb-4">Add Link</h2>
        {/* Add your form or content here */}
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Link Name
            </label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              URL
            </label>
            <input
              type="url"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>,
    document.getElementById("root2")
  );
}

export default LinkModalComponent;
