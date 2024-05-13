import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { NewEventForm } from "./NewEventForm";

export default function ModalComponent({ addEvent }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpenModal(true)} className="mt-5">Add New Event</Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Add New Event</Modal.Header>
        <Modal.Body>
          <NewEventForm addEvent={addEvent}/>
        </Modal.Body>
      </Modal>
    </div>
  )
}
