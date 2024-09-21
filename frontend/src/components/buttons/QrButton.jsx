import React, { useRef, useState } from "react";
import { BsQrCode } from "react-icons/bs";
import Modal from "../Modal";
import { QRCodeCanvas } from "qrcode.react";
import { FaTimes } from "react-icons/fa";

function QrButton({ link }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const modalRef = useRef();
  const qrRef = useRef(); // Reference for the QR code canvas

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const downloadQrCode = () => {
    const canvas = qrRef.current;
    const pngUrl = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = pngUrl;
    link.download = "qrcode.png"; // Default file name
    link.click();
  };
  return (
    <>
      <button onClick={openModal}>
        <BsQrCode className="text-[#00bbff] hover:text-blue-500 cursor-pointer" />
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal} modalRef={modalRef}>
        <div
          ref={modalRef}
          className="w-[80%] sm:w-full  sm:max-w-[500px] bg-white p-2 rounded-md flex flex-col items-center"
        >
          <div className="w-full flex flex-col gap-2">
            <div className="self-end">
              <button
                onClick={closeModal}
                className="bg-black rounded-full text-white p-1"
              >
                <FaTimes className="text-lg" />
              </button>
            </div>
            <QRCodeCanvas
              className="self-center"
              ref={qrRef} // Attach the ref to the QRCodeCanvas
              size={256} // Adjust the size as needed
              fgColor="#000000" // Foreground color
              bgColor="#ffffff" // Background color
              value={link}
            />
          </div>
          <button
            onClick={downloadQrCode}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all duration-300"
          >
            Download QR Code
          </button>
        </div>
      </Modal>
    </>
  );
}

export default QrButton;
