import React, { useContext, useState } from "react";
import { Button, Col, Dropdown, Form, FormControl, Modal, Row } from "react-bootstrap";
import { Context } from "../..";

const CreateDevice = ({ show, onHide }) => {
  const { device } = useContext(Context);
  const [info, setInfo] = useState([]);
  const addInfo = () => {
    setInfo([...info, { title: "", description: "", number: Date.now() }]);
  };
  const removeInfo = (number) => {
    setInfo(info.filter(i => i.number !== number ));
  };
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Create device
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>Choose Type</Dropdown.Toggle>
            <Dropdown.Menu>
              {device?.types.map((type) => (
                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>Choose Type</Dropdown.Toggle>
            <Dropdown.Menu>
              {device?.brands.map((brand) => (
                <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <FormControl placeholder="Enter device name" className="mt-3" />
          <FormControl
            placeholder="Enter device price"
            className="mt-3"
            type="number"
          />
          <FormControl
            placeholder="Write device name"
            className="mt-3"
            type="file"
          />
          <br />
          <Button variant={"outline-dark"} onClick={addInfo}>
            Add new configuration
          </Button>
          {
            info.map(i => 
                <Row className="mt-3" key={i.number}>
                    <Col md={4}>
                        <FormControl
                        placeholder="Enter config name"
                        />
                    </Col>
                    <Col md={4}>
                        <FormControl
                        placeholder="Enter config description"
                        />
                    </Col>
                    <Col>
                    <Button variant={'outline-danger'} onClick={()=>removeInfo(i.number)}>Delete</Button>
                    </Col>
                </Row>)
          }
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant={"outline-danger"} onClick={onHide}>
          Close
        </Button>
        <Button variant={"outline-success"} onClick={onHide}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateDevice;
