import React, { useRef, useState } from "react";
import { FaPlus } from "react-icons/fa"; // Example icon, you can choose any icon you like

import Modal from "../Modal";
import LinkForm from "../forms/LinkForm";

function AddLinksButton() {
  const [isModalOpen, setModalOpen] = useState(false);

  const modalRef = useRef();

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
      <Modal isOpen={isModalOpen} onClose={closeModal} modalRef={modalRef}>
        <LinkForm modalRef={modalRef} onClose={closeModal} />
      </Modal>
    </>
  );
}

export default AddLinksButton;
