import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function Conformation({ message, onClose, isOpen }) {
  return (
    <>
      <Modal isOpen={isOpen} toggle={onClose} backdrop="static">
        <ModalHeader>Conformation</ModalHeader>
        <ModalBody>{message}</ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            type="button"
            onClick={() => {
              onClose(true);
            }}
          >
            Delete
          </Button>
          <Button
            color="secondary"
            type="button"
            onClick={() => {
              onClose(false);
            }}
          >
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

Conformation.propTypes = {};

export default Conformation;
