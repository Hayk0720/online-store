import React from 'react'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'
import star from '../assets/bStar.png'

function DevicePage() {
         const device = {id:1, name:'S22', price: 25000, rating: 5, img:""}
         const description = [
          {id:1, title:"Operation system",description:'5gb'},
          {id:2, title:"Camera",description:'12mp'},
          {id:3, title:"Processor",description:'AMD 8'},
          {id:4, title:"Cors",description:'5'},
          {id:5, title:"Battery",description:'500'}
         ]
  return (
    <Container className='mt-3'>
      <Row>
      <Col md={4}>
        <Image width={300} height={300} src={device.img}/>
      </Col>
      <Col md={4}>
        <div className='d-flex flex-column align-items-center'>
          <h2>{device.name}</h2>
          <div 
          className='d-flex justify-content-center align-items-center'
          style={{background:`url(${star}) no-repeat center center`, width:240, height:240,backgroundSize:'cover',fontSize:64}}>
            {device.rating}
          </div>
        </div>
      </Col>
      <Col md={4}>
    <Card
    className='d-flex flex-column align-items-center justify-content-around'
    style={{width:300, height:300, fontSize:32, border:'5px solid lightgray'}}>
      <h3>{device.price}</h3>
      <Button variant={'outline-dark'}>Add to busket</Button>
    </Card>
      </Col>
      </Row>
      <Row className='d-flex flex-column m-3'>
        <h1>Configuration</h1>
        {description.map((info,index) => 
          <div style={{backgroundColor:index % 2 === 0 ? 'lightgray' : 'transparent', padding:10}} key={info.id}>
            {info.title}:{info.description}
          </div>)}
      </Row>
    </Container>
  )
}

export default DevicePage
