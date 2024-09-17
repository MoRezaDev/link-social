import React, { useState } from "react";
import { FaPlus } from "react-icons/fa"; // Example icon, you can choose any icon you like

import LinkModalComponent from "../components/LinkModalComponent"; // Import the modal component

function MaterialButton() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <button
        onClick={openModal}
        className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition-all duration-300"
      >
        <FaPlus className="mr-2 text-xl" />
        <span>Add Link</span>
      </button>
      <LinkModalComponent isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}

function Links() {
  return (
    <section className="p-2">
      <MaterialButton />
    </section>
  );
}

export default Links;
