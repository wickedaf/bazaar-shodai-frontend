import React, { useEffect, useState } from 'react';
import { Button, Container, Form, FormControl } from 'react-bootstrap';
import Header from '../Header/Header';
import Item from '../Item/Item';

const Home = () => {

    const [ cart, setCart ] = useState([]);
    const [ items, setItems] = useState([]);

    useEffect(() => {
      fetch('http://localhost:4200/allItems')
        .then(res => res.json())
        .then(data => setItems(data));
    }, []);
    
    
    const handleAddToCart = (item) => {
        const sameItem = cart.find(itm => itm._id === item._id);
        let count;
        let newCart;
        if(sameItem){
          count = sameItem.quantity + 1;
          sameItem.quantity = count;
          const otherItem = cart.filter(itm => itm.id === item.id);
          newCart = [ ...otherItem, sameItem];
        }else{
          newCart = [...cart, item];
        }
        setCart(newCart);
    }
    
    return (
        <Container >
            <Header></Header>
            <div className="d-flex justify-content-center py-4">
                <Form inline>
                    <FormControl type="text" placeholder="Search Item" className="border-0 bg-light rounded-0" />
                    <Button className="rounded-0" variant="danger">Search</Button>
                </Form>
            </div>
                    <h1 className="text-center">Item Added: {cart.length}</h1>
            <div className="d-flex flex-wrap justify-content-center">
                {
                    items.map(item => <Item key={item._id} cart={cart} handleAddToCart={handleAddToCart} itemInfo={item}></Item>)
                }
            </div>
        </Container>
    );
};

export default Home;