import React, { useState } from 'react'
import { Button, Form, FormControl, Modal } from 'react-bootstrap'
import {createType} from "../../http/deviceAPI"

export const CreateType = ({show,onHide}) => {
  const [value,setValue] = useState('')
  const addType = () => {
    createType({name:value}).then(data => setValue(''))
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
            value={value}
            onChange={(e)=>setValue(e.target.value)}
            placeholder='Enter Type name'>
                
            </FormControl>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant={'outline-danger'} onClick={onHide}>Close</Button>
        <Button variant={'outline-success'} onClick={addType}>Add</Button>
      </Modal.Footer>
    </Modal>
  )
}
