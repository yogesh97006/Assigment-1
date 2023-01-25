import React, { useState } from 'react'
import './Content.css'
import Table from 'react-bootstrap/Table';
import { Button, Modal, Container, Row, Col } from 'react-bootstrap';

function Content() {
    const [Add,setAdd]=useState(false)
    const [Edit,setEdit]=useState(false)
  return (
    <div>
    <div className='content mar'>
        <div>
        <span className='b1 bg-light'><h4>Main</h4></span>
        <Container className='b2 bg-light'> 
        <button className='btn btn-success rounded-4 d-flex justify-content-start btn1' onClick={() => setAdd(true)}>Add</button>
       <Table responsive="md" className='tab' >
        <thead>
          <tr className='bg-primary'>
            <th className='mx-5'>Item Name</th>
            <th  className='mx-5'>Date of Service</th>
            <th className='mx-5'>Remaining Items</th>
            <th className='mx-5'></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='mx-5'>Ghee</td>
            <td className='mx-5'>20/10/2022</td>
            <td className='mx-5'>10</td>
            <td className='mx-5'>
            <Button  className='mx-1' variant='danger' size='sm' >Remove</Button>
            <Button className='mx-1'variant='primary' size='sm' onClick={() => setEdit(true)}>Edit</Button>
            </td>
          </tr>
          <tr>
          <td className='mx-5'>Ghee</td>
            <td className='mx-5'>20/10/2022</td>
            <td className='mx-5'>10</td>
            <td className='mx-5'>
            <Button className='mx-1' variant='danger' size='sm' >Remove</Button>
            <Button className='mx-1' variant='primary' size='sm' onClick={() => setEdit(true)}>Edit</Button>
            </td>
          </tr>
          <tr>
          <td>Ghee</td>
            <td>20/10/2022</td>
            <td>10</td>
            <td>
            <Button className='mx-1' variant='danger' size='sm' >Remove</Button>
            <Button className='mx-1' variant='primary' size='sm' onClick={() => setEdit(true)}>Edit</Button>
            </td>
          </tr>
        </tbody>
      </Table>
      </Container>
      <Modal
        show={Edit}
        onHide={() => setEdit(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title" className='text-primary text'>
          Edit
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Container>
        <Row className='d-flex '>
         <Col><label className='text-primary'>Item Name</label></Col>
         <Col><input type='text' className=' form-control  my-1' /></Col>
         </Row>
        <Row className='d-flex'>
         <Col><label className='text-primary'>Date of Service</label></Col>
         <Col><input type='text' className=' form-control my-1'  /></Col>
         </Row>
        <Row className='d-flex'>
         <Col><label className='text-primary'>Owner Name</label></Col>
         <Col><input type='text' className=' form-control my-1' /></Col>
         </Row>
        <Row className='d-flex'>
         <Col><label className='text-primary'>Vendor Name</label></Col>
         <Col><input type='text' className=' form-control my-1' /></Col>
         </Row>
        </Container>
        </Modal.Body>
        <div className='d-flex justify-content-center align-items-center m-2'>
        <Button variant='primary' className='btn2' >Submit</Button>
        </div>
        
      </Modal>
      <Modal
        show={Add}
        onHide={() => setAdd(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title" className='text-success text2'>
            Add
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Container>
        <Row className='d-flex '>
         <Col><label className='text-primary'>Item Name</label></Col>
         <Col><input type='text' className=' form-control  my-1' /></Col>
         </Row>
        <Row className='d-flex'>
         <Col><label className='text-primary'>Date of Service</label></Col>
         <Col><input type='text' className=' form-control my-1'  /></Col>
         </Row>
        <Row className='d-flex'>
         <Col><label className='text-primary'>Owner Name</label></Col>
         <Col><input type='text' className=' form-control my-1' /></Col>
         </Row>
        <Row className='d-flex'>
         <Col><label className='text-primary'>Vendor Name</label></Col>
         <Col><input type='text' className=' form-control my-1' /></Col>
         </Row>
        </Container>
        </Modal.Body>
        <div className='d-flex justify-content-center align-items-center m-2'>
        <Button variant='primary' className='btn2' >Submit</Button>
        </div>
      </Modal>
        </div>
    </div>
    </div>
  )
}

export default Content