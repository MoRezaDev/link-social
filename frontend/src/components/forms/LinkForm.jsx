import React, { useState } from "react";
import Select from "react-select";
import { FaTimes } from "react-icons/fa";
import useUser from "../../hooks/useUser";
import toast from "react-hot-toast";

function LinkForm({ modalRef, onClose, user }) {
  const [linkType, setLinkType] = useState("URL");
  const [linkName, setLinkName] = useState("");
  const [urlValue, setUrlValue] = useState(
    linkType === "URL" ? "https://" : ""
  );
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const { users } = useUser();

  const options = [
    { value: "URL", label: "URL" },
    { value: "Email", label: "Email" },
    { value: "Phone", label: "Phone" },
    { value: "Whatsapp", label: "Whatsapp" },
    { value: "Telegram", label: "Telegram" },
  ];

  const handleLinkTypeChange = (selectedOption) => {
    setLinkType(selectedOption.value);

    // Set the initial value for URL type, or clear it for others
    if (selectedOption.value === "URL") {
      setUrlValue("https://");
    } else {
      setUrlValue("");
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const userLink = {
      type: linkType,
      name: linkName,
      url: urlValue,
    };
    const usersTemp = users;
    const userIndex = usersTemp.findIndex((us) => us.id === user.id);
    if (userIndex !== -1) {
      usersTemp[userIndex] = {
        ...users[userIndex],
        links: [...usersTemp[userIndex].links, userLink],
      };
      console.log(usersTemp);
      localStorage.setItem("users", JSON.stringify(usersTemp));

      setIsButtonDisabled(true);
      toast.success("Successfully updated and saved to local storage!");
      setTimeout(() => location.reload(), 1000);
    }
  };

  const handleInputChange = (e) => {
    const newValue = e.target.value;

    if (linkType === "URL" && !newValue.startsWith("https://")) {
      return;
    }

    setUrlValue(newValue);
  };

  const linkTypePlaceholder =
    linkType === "URL"
      ? "Type Url (ex: https://www.mehrgan.com/user)"
      : linkType === "Email"
      ? "Type Email (ex: mehrgan@gmail.com)"
      : linkType === "Phone"
      ? "Enter phone number"
      : linkType === "Whatsapp"
      ? "Enter Whatsapp number"
      : linkType === "Telegram"
      ? "Enter just username(ex: user12)"
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
            value={linkName}
            onChange={(e) => setLinkName(e.target.value)}
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
            type="text"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            value={urlValue}
            onChange={handleInputChange}
          />
        </div>

        <button
          disabled={isButtonDisabled ? true : false}
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
