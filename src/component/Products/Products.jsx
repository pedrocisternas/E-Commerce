import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from "./Product/Product";

const products = [
    { id: 0, name: "shirt", description: "green polo shirt", price: "$10" },
    { id: 1, name: "jacket", description: "old brown jacket", price: "$55" },
    { id: 2, name: "jacket", description: "old brown jacket", price: "$55" },
    { id: 3, name: "jacket", description: "old brown jacket", price: "$55" },
    { id: 4, name: "jacket", description: "old brown jacket", price: "$55" },
    { id: 5, name: "jacket", description: "old brown jacket", price: "$55" },
    { id: 6, name: "jacket", description: "old brown jacket", price: "$55" },
]

const Products = () => (
    <main>
        <Container fluid style={{display: "flex"}}>
            <Row style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
            {products.map(product => (
                <Col xs={12} sm={6} md={4} lg={3} xl={2} key={product.id}>
                    <Product product={product}></Product>
                </Col>
            ))}
            </Row>
        </Container>
    </main>
);

export default Products;

