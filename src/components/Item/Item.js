import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Item = (props) => {
    const {name, price, image} = props.itemInfo;
    return (
        <Card className="m-3 shadow rounded border-0" style={{ width: '18rem' }}>
            <Card.Img className="img-fluid" variant="top" src={image} />
            <Card.Body>
                <div className="my-2">
                    <Card.Title>{name}</Card.Title>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <Card.Title className="d-inline text-danger">{price} Tk</Card.Title>
                    </div>
                    <Button onClick={()=> props.handleAddToCart(props.itemInfo)} variant="danger">Buy Now</Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default Item;