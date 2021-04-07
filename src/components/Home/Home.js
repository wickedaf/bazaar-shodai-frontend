import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { Button, Container, Form, FormControl, Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../App";
import Header from "../Header/Header";
import Item from "../Item/Item";

const Home = () => {
  const [items, setItems] = useState([]);
  const { userInfo, cartInfo } = useContext(UserContext);
  const [loggedInUser, setLoggedInUser] = userInfo;
  const [cart, setCart] = cartInfo;

  useEffect(() => {
    fetch("https://bazaar-shodai.herokuapp.com/allItems")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  let history = useHistory();
  const handleAddToCart = (item) => {
    if (loggedInUser.isSignedIn === true) {
      const sameItem = cart?.find((itm) => itm._id === item._id);
      let count;
      let newCart;
      if (sameItem) {
        count = sameItem.quantity + 1;
        sameItem.quantity = count;
        const otherItem = cart?.filter((itm) => itm._id !== item._id);
        newCart = [...otherItem, sameItem];
      } else {
        newCart = [...cart, item];
      }
      setCart(newCart);
    } else {
        history.push("/orders");
        setCart(item);
    }
  };
 

  return (
    <Container className="mx-auto">
      <Header></Header>
      <div>
        <Form className="justify-content-center py-4" inline>
          <div className="bg-light p-2">
            <FontAwesomeIcon className="mx-2" icon={faSearch} />
          </div>
          <FormControl
            type="text"
            placeholder="Search Item"
            className="w-50 border-0 bg-light rounded-0"
          />
          <Button className="rounded-0" variant="danger">
            Search
          </Button>
        </Form>
      </div>
      <h1 className="text-center">Item Added: {cart.length}</h1>

      <div className="d-flex flex-wrap justify-content-center">
        {items.length ? (
          items.map((item) => (
            <Item
              key={item._id}
              cart={cart}
              handleAddToCart={handleAddToCart}
              itemInfo={item}
            ></Item>
          ))
        ) : (
          <Spinner className="my-5" animation="grow" />
        )}
      </div>
    </Container>
  );
};

export default Home;
