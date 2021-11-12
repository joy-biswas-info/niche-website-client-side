import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleProducts from './SingleProducts';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://vast-escarpment-72434.herokuapp.com/products')
            .then(res => res.json())
            .then(data=>setProducts(data))
    },[])
    return (
        <Container id="spot" className="my-4">
            <h2 className="text-center fw-bold fs-1 my-4 text-warning">All products</h2>
            <Row className="row">
            {
                products.map(product=><SingleProducts product={product} key={product._id}></SingleProducts>)
            }
            </Row>
        </Container>
    );
};

export default Products;