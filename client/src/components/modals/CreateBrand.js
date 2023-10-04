import React from 'react'
import { Button, Form, FormControl, Modal } from 'react-bootstrap'

const CreateBrand = ({show,onHide}) => {
  return (
    <Modal
    show={show}
    onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Create type
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <FormControl
            placeholder='Enter Type name'>
                
            </FormControl>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant={'outline-danger'} onClick={onHide}>Close</Button>
        <Button variant={'outline-success'} onClick={onHide}>Add</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CreateBrand
