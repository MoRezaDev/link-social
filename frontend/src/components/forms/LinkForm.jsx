import React, { useState } from "react";
import Select from "react-select";
import { FaTimes } from "react-icons/fa";

function LinkForm({ modalRef, onClose, user }) {
  const [linkType, setLinkType] = useState("URL");

  const options = [
    { value: "URL", label: "URL" },
    { value: "Email", label: "Email" },
    { value: "Phone", label: "Phone" },
  ];

  const handleLinkTypeChange = (selectedOption) => {
    setLinkType(selectedOption.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e);
  };

  const linkTypePlaceholder =
    linkType === "URL"
      ? "Type Url (ex: https://www.mehrgan.com/user)"
      : linkType === "Email"
      ? "Type Email (ex: mehrgan@gmail.com)"
      : linkType === "Phone"
      ? "Enter phone number"
      : "";

  return (
    <div
      ref={modalRef}
      className={`bg-white p-6 max-w-[600px] flex-1 rounded-lg shadow-lg w-80 relative transform transition-transform duration-300`}
    >
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
      >
        <FaTimes className="text-xl" />
      </button>
      <h2 className="text-lg font-semibold mb-4">Add Link</h2>

      <form onSubmit={submitHandler}>
        {/* Link Type Dropdown using react-select */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Link Type
          </label>
          <Select
            value={options.find((option) => option.value === linkType)}
            onChange={handleLinkTypeChange}
            options={options}
            className="mt-1"
          />
        </div>

        {/* Link Name Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Link Name
          </label>
          <input
            type="text"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        {/* URL Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            {linkType}
          </label>
          <input
            placeholder={linkTypePlaceholder}
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
  );
}

export default LinkForm;
