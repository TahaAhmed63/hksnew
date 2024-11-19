"use-client"
import Image from "next/image";
import React from "react";
import { Table, Button, Form, Container, Row, Col } from "react-bootstrap";
import Allpagebanner from "../assets/homepage-images/allpagebanner.jpg";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart, removeItem, incrementQuantity, decrementQuantity } from "../store/slice/cartslice";
import SinglePageHeader from "@/Components/singlepageheader/SinglePageHeader";
const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    const isOpen = useSelector((state) => state.cart.isOpen);
  
    const handleClose = () => {
      dispatch(toggleCart(false));
    };
  
    const handleRemoveItem = (id, variationId) => {
      dispatch(removeItem({ id, variationId }));
    };
  
    const handleIncrementQuantity = (id, variationId) => {
      dispatch(incrementQuantity({ id, variationId }));
    };
  
    const handleDecrementQuantity = (id, variationId) => {
      dispatch(decrementQuantity({ id, variationId }));
    };
  
    const calculateSubtotal = () => {
      return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };
  
  return (
    <>
      <SinglePageHeader  title={"cart page"} pagebanner={Allpagebanner}  />
    <Container className="my-5"  >
    <Row>
      <Col>
       <Table striped bordered hover responsive className="mt-4">
          <thead>
            <tr>
              <th></th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
          {cartItems ? cartItems?.map((cartitems,key)=>(
        <tr>
        <td>
          <Button variant="danger" size="sm"     onClick={() => handleRemoveItem(cartitems.id, cartitems.variationId)}>
            &times;
          </Button>
        </td>
        <td style={{display:"flex",gap:"33%",alignItems:"center"}}>
        <img
                  src={cartitems?.img?.src || cartitems?.img[0]}
                  alt={cartitems?.id}
                  width={80}
                  height={80}
                  className="rounded-lg object-cover"
                />
          <span>{cartitems?.name}</span>
        </td>
        <td>{cartitems?.price * cartitems?.quantity}</td>
        <td>
          <Button variant="outline-secondary" size="sm"                       onClick={() => handleDecrementQuantity(cartitems.id, cartitems.variationId)}
          >
            -
          </Button>
          <span className="mx-2">{cartitems.quantity}</span>
          <Button variant="outline-secondary" size="sm"      onClick={() => handleIncrementQuantity(cartitems.id, cartitems.variationId)}>
            +
          </Button>
        </td>
        <td> {cartitems.price * cartitems.quantity}.00</td>
      </tr>
)):null} 
        
          </tbody>
        </Table>

        <Form className="d-flex mt-3">
          <Form.Control
            type="text"
            placeholder="Coupon code"
            className="me-2"
          />
          <Button variant="warning">Apply coupon</Button>
        </Form>
        <Button variant="warning" className="update-basket-btn">
          Update basket
        </Button>
      </Col>
    </Row>

    <Row className="mt-4">
      <Col md={4} className="ms-auto">
        <div className="basket-totals">
          <h5>Basket totals</h5>
          <div className="d-flex">
            <span>Subtotal</span>
            <span>Rs {calculateSubtotal()}.00</span>
          </div>
          <div className="d-flex mt-2">
            <strong>Total</strong>
            <strong>Rs {calculateSubtotal()}.00</strong>
          </div>
          <Button variant="warning" className="proceed-to-checkout w-100">
            Proceed to checkout
          </Button>
        </div>
      </Col>
    </Row>
  </Container>
  </>
  )
}

export default Cart