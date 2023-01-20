import React from 'react'
import Product from "../components/Product"
import products from "../products"
import {Row, Col} from "react-bootstrap"

const HomeScreen = () => {
  return (
    <>
    <h1>LATEST PRODUCTS</h1>
        <Row>
            {products.map((product) => (
               <Col sm={12} md={6} lg={4} xl={3} >
                    <Product product={product} /> 
               </Col> 
            ))}
        </Row>
      
    </>
  )
}

export default HomeScreen