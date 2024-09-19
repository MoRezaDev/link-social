import React, { useRef, useState } from "react";
import { FaUserEdit } from "react-icons/fa"; // Example icon, you can choose any icon you like

import Modal from "../Modal";
import UserEditForm from "../forms/UserEditForm";

function EditUserButton({ user }) {
  const [isModalOpen, setModalOpen] = useState(false);

  const modalRef = useRef();

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <button
        onClick={openModal}
        className="text-[#00bbff] hover:text-blue-500"
        title="Edit User"
      >
        <FaUserEdit size={18} />
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal} modalRef={modalRef}>
        <UserEditForm modalRef={modalRef} onClose={closeModal} user={user} />
      </Modal>
    </>
  );
}

export default EditUserButton;
