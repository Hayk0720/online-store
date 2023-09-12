import React from 'react'
import { Card, Col, Image } from 'react-bootstrap'
import star from '../assets/sStar.png'
import { useNavigate } from 'react-router-dom';
import { DEVICE_ROUTE } from '../utils/consts';

function DeviceItem({device}) {
    const navigate = useNavigate()
    console.log("asdasd",navigate)
  return (
    <Col md = {3} onClick={() => navigate(DEVICE_ROUTE+'/'+ device.id)}>
      <Card style={{width:150, cursor:"pointer"}} border={'light'}>
<Image
width={150}
height={150}
src={device.img}/>
<div className='mt-1 d-flex justify-content-between' >
    <div>Samung ...</div>
    <div className='d-flex'>
        <div>{device.rating}</div>
        <Image className='mt-1' width={18} height={18} src={star}/>
        </div>
</div>
        <div>{device.name}</div>
      </Card>
    </Col>
  )
}

export default DeviceItem
