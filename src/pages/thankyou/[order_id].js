import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { Baseurl } from '../../../BaseUrl';
import Allpagebanner from "./../../assets/homepage-images/allpagebanner.jpg";
import SinglePageHeader from '@/Components/singlepageheader/SinglePageHeader';

const ThankYouPage = () => {
  const router = useRouter();
  const { order_id } = router.query; // Access the dynamic order_id from the URL
  const [orderDetails, setOrderDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);



  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/order/${order_id}`);
        const data = await response.json();

        if (data.success) {
            setOrderDetails(data.order);
        } else {
          setError(data.message);
        }
      } catch (err) {
        setError("Failed to fetch order.");
      } finally {
        setLoading(false);
      }
    };

    if (order_id) {
      fetchOrder();
    }
  }, [order_id]);
  if (loading) {
    return <p>Loading order details...</p>;
  }



  return (
    <>
          <SinglePageHeader title={"Thankyou"} pagebanner={Allpagebanner} />

    <div className="thank-you-page container py-5">
      <h1 className="mb-4">Order Received</h1>
      <p>Thank you. Your order has been received.</p>

      <div className="order-summary mt-4">
        <h2>Order Details</h2>
        <table className="table">
          <tbody>
            <tr>
              <th>Order Number:</th>
              <td>{orderDetails?.id}</td>
            </tr>
            <tr>
              <th>Date:</th>
              <td>{new Date(orderDetails?.date_created).toLocaleDateString()}</td>
            </tr>
            <tr>
              <th>Email:</th>
              <td>{orderDetails?.billing.email}</td>
            </tr>
            <tr>
              <th>Total:</th>
              <td>Rs {orderDetails?.total}</td>
            </tr>
            <tr>
              <th>Payment Method:</th>
              <td>{orderDetails?.payment_method_title}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="order-items mt-4">
        <h2>Items</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {orderDetails?.line_items.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>Rs {item.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="billing-address mt-4">
        <h2>Billing Address</h2>
        <p>
          {orderDetails?.billing.first_name} {orderDetails?.billing.last_name}
          <br />
          {orderDetails?.billing.address_1}
          <br />
          {orderDetails?.billing.city}, {orderDetails?.billing.state} {orderDetails?.billing.postcode}
          <br />
          {orderDetails?.billing.country}
          <br />
          {orderDetails?.billing.email}
          <br />
          {orderDetails?.billing.phone}
        </p>
      </div>
    </div>
    </>
  );
};

export default ThankYouPage;
