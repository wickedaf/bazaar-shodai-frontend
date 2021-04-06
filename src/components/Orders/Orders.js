import React, { useContext, useEffect, useState } from 'react';
import { Button, Spinner, Table } from 'react-bootstrap';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import Tablerow from '../Tablerow/Tablerow';

const Orders = () => {
    const {userInfo, cartInfo} = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = userInfo;
    const [ cart, setCart ] = cartInfo;
    const [cartItem, setCartItem] = useState([]);

  
    useEffect(() => {
        let cartData = {
            user: loggedInUser, 
            item: cart,
            date: new Date()
        };
        if(cartData.item.length !== 0 && loggedInUser.isSignedIn === true){
            fetch('https://bazaar-shodai.herokuapp.com/addCart', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(cartData),
              })
              .then(res=> res.json())
              .then(data => {
                console.log('Success: Cart Data Pushed to Server', data);
                setCart([]);
              })
              .catch((error) => {
                console.error('Error:', error);
            }); 

        }
        
    }, [cart, loggedInUser, setCart]);
    

    useEffect(() => {
        fetch('https://bazaar-shodai.herokuapp.com/userCart?mail='+loggedInUser.email)
        .then(res => res.json())
        .then(data => {
            // Merging all item from the cart of an User into a single array 
            const totalItem = data.map(item => item.item).reduce((pre, curr) => pre.concat(curr));
            setCartItem(totalItem);
            console.log(totalItem);
           
        });
    }, [loggedInUser.email, cart]);

    //Calculating item price and quantity then setting this item property as itemTotal. Using reduce() method finally summed up the Grand Total.
    const grandTotal = cartItem?.map(itm => {
        const itemTotal = itm.price * itm.quantity;
        itm.itemTotal = itemTotal;
        return itm.itemTotal;
    }).reduce((prev, curr) => prev + curr, 0);




    return (
        <div className="container">
            <Header></Header>
            <h1 className="my-5">Checkout</h1>

            <Table striped hover className="shadow rounded-lg border-0">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>     
                    {
                        cartItem?.map(itm => <Tablerow key={itm._id} itmInfo={itm}></Tablerow>)
                    }
                    <tr className="bg-white">
                        <td colSpan="2"><h4>Total</h4></td>
                        <td><h4>{grandTotal}</h4></td>
                    </tr>
                </tbody>
            </Table>
            <div className="d-flex justify-content-end my-4">
                <Button className="rounded-lg shadow" variant="danger">Checkout</Button>
            </div>
        </div>
    );
};

export default Orders;