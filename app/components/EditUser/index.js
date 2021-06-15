import React from 'react';
import { Form, Field, SubmissionError } from 'react-final-form';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import FormWrap from './FormWrap';
import { inputField } from '../../utils/FormFields';
import { createUser, updateUser } from '../../containers/UserPage/api';

function EditUser({ isOpen, onClose, mode, user }) {
  const onSubmit = async values => {
    let res;
    try {
      if (mode === 'add') {
        res = await createUser(values);
        onClose();
      } else {
        res = await updateUser(user.id, values);
        onClose();
      }
    } catch (error) {
      throw new SubmissionError({
        _error: e.message,
      });
    }
  };
  return (
    <>
      <Modal isOpen={isOpen} toggle={onClose} backdrop="static">
        <ModalHeader>{mode === 'add' ? 'Add User' : 'Edit User'}</ModalHeader>
        <ModalBody>
          <Form
            onSubmit={onSubmit}
            initialValues={{
              username: user && user.username ? user.username : '',
              phone: user && user.phone ? user.phone : '',
            }}
            render={({ handleSubmit, form }) => (
              <FormWrap onSubmit={handleSubmit}>
                <div>
                  <label>User Name</label>
                  <Field
                    name="username"
                    component={inputField}
                    type="text"
                    placeholder="User Name"
                  />
                </div>
                <div>
                  <label>Phone</label>
                  <Field
                    name="phone"
                    component={inputField}
                    type="text"
                    placeholder="Phone"
                  />
                </div>
                <ModalFooter>
                  <Button color="primary" type="submit">
                    Submit
                  </Button>
                  <Button
                    color="secondary"
                    type="button"
                    onClick={() => {
                      form.reset;
                      onClose();
                    }}
                  >
                    Cancel
                  </Button>
                </ModalFooter>
              </FormWrap>
            )}
          />
        </ModalBody>
      </Modal>
    </>
  );
}

EditUser.propTypes = {};

export default EditUser;
