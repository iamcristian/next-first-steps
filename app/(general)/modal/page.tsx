"use client";

import Modal from "@/components/Modal";
import { useState } from "react";

const ModalPage = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <button
        className="bg-blue-800 text-white p-2 rounded-md"
        onClick={() => setOpenModal(true)}
      >
        Open Modal
      </button>
      <Modal open={openModal} closeModal={() => setOpenModal(false)} />
    </div>
  );
};

export default ModalPage;
