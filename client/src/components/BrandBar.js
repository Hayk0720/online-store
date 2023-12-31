import React, { useContext } from 'react'
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Card, Row } from 'react-bootstrap';



const  BrandBar = observer(() => {
    const { device } = useContext(Context);

  return (
    <div className="d-flex">
      {device.brands.map(brand => 
        <Card
        key = {brand.id}
        style={{cursor:"pointer"}}
        onClick={() => device.setSelectedBrand(brand)}
        border = {brand.id === device.selectedBrand.id ? "danger" : "light"}
        className='p-3'>
            {brand.name}
        </Card>)}
    </div>
  )
})

export default BrandBar
