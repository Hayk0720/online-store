import React, { useState } from 'react'
import { Button, Form, FormControl, Modal } from 'react-bootstrap'
import {createBrand} from '../../http/deviceAPI'

const CreateBrand = ({show,onHide}) => {
  const [value,setValue] = useState('')
  const addBrand = () => {
    createBrand({name:value}).then(data => setValue(''))
    onHide()
  }
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
            placeholder='Enter Type name'
            value={value}
            onChange={(e) => setValue(e.target.value)}
            >
            </FormControl>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant={'outline-danger'} onClick={onHide}>Close</Button>
        <Button variant={'outline-success'} onClick={addBrand}>Add</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CreateBrand
