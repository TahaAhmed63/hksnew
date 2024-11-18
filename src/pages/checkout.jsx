import React, { useState, useEffect } from 'react';
import SinglePageHeader from "@/Components/singlepageheader/SinglePageHeader";
import Allpagebanner from "../assets/homepage-images/allpagebanner.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const Checkout = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [orderItems, setOrderItems] = useState([
    
    // Example order items
    {
      name: 'MCO 20W40',
      price: 30.00,
      variation: '4L',
      totalPrice: 3000,
      image: 'https://staging.hksglobalpetroleum.com/wp-content/uploads/2024/10/MCO-20W40-0-7L-300x300.jpg',
    },

    {
      name: 'MCO 20W402',
      price: 30.00,
      variation: '4L',
      totalPrice: 5000,
      image: 'https://staging.hksglobalpetroleum.com/wp-content/uploads/2024/10/MCO-20W40-0-7L-300x300.jpg',
    }

    
    // You can add more items to the order here
  ]);

  // Automatically open the first accordion if there are order items
  useEffect(() => {
    if (orderItems.length > 0) {
      setActiveIndex(0); // Open the "Order Summary" accordion if there are items
    } else {
      setActiveIndex(null); // Keep it closed if no items
    }
  }, [orderItems]);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle accordion
  };

  return (
    <>
      <SinglePageHeader title={"CheckOut"} pagebanner={Allpagebanner} />
    
      <div className='checkoutpage-sec py-5' suppressHydrationWarning>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8'>
              <div className='cont-wrapper-checkout'>
                <div className='cont-inf'>
                  <h2> Contact information</h2>
                  <p className='py-2'>We'll use this email to send you details and updates about your order.</p>
                  <input type="email" className='form-control' id="email" autocapitalize="none" autocomplete="email" aria-label="Email address" required="" aria-invalid="false" title="" value="" />
                  <p>You are currently checking out as a guest.</p>
                </div>

                <div className='bill-address'>
                  <h2> Billing address</h2>
                  <p className='py-2'>Enter the billing address that matches your payment method.</p>
                  <select size="1" className="wc-blocks-components-select__select" id="billing-country" aria-invalid="false" autocomplete="country">
                    <option value="AF">Afghanistan</option>
                    {/* ... other options */}
                    <option value="ZW">Zimbabwe</option>
                  </select>

                  <div className="name-col">
                    <input type="text" className='form-control' id="billing-first_name" autocomplete="given-name" aria-label="First name" required="" placeholder="First name" />
                    <input type="text" className='form-control' id="billing-last_name" autocomplete="given-name" aria-label="Last name" required="" placeholder="Last name" />
                  </div>

                  <input type="email" className='form-control' id="billing-email" autocapitalize="none" autocomplete="email" aria-label="Email address" required="" value="" />
                  <span role="button" tabindex="0">+ Add flat, suite, etc.</span>

                  <div className="name-col">
                    <input type="text" className='form-control' id="billing-city" placeholder="City" />
                    <select size="1" className="form-control" id="billing-state" autocomplete="address-level1">
                      {/* States list */}
                      <option value="CA">California</option>
                      <option value="NY">New York</option>
                    </select>
                  </div>

                  <div className="name-col">
                    <input type="number" className='form-control' id="billing-postcode" placeholder="Postcode" />
                    <input type="number" className='form-control' id="billing-phone" placeholder="Phone" />
                  </div>
                </div>

                <div className='payment-op'>
                  <h2>Payment options</h2>

                  <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className=" payment-tabs m-3">
                    
                      <Tab eventKey="home" title="Cheque payments">
                       <p className="pb-3"> Please send a cheque to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                      </Tab>

                      <Tab eventKey="profile" title="Cash on delivery">
                      <p className="pb-3">  Pay with cash upon delivery.</p>
                      </Tab>
                      
                   </Tabs>

                 
                  <span>By proceeding with your purchase you agree to our Terms and Conditions and Privacy Policy</span>
                  <div className="place-order-btn py-3">
                    <button type="button"><span>Place Order</span></button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="checkout-cart">
                <div className="accordion" id="accordionExample">
                  {/* Accordion Item 1 (Order Summary) */}
                  <div className="accordion-item">
                    <h2 className="Order-header">
                      <button
                        className={`accordion-button ${activeIndex === 0 ? '' : 'collapsed'}`}
                        type="button"
                        onClick={() => handleToggle(0)}
                        aria-expanded={activeIndex === 0 ? 'true' : 'false'}
                        aria-controls="collapseOne"
                      >
                        Order Summary
                      </button>
                    </h2>

                    <div
                      id="collapseOne"
                      className={`accordion-collapse collapse ${activeIndex === 0 ? 'show' : ''}`}
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body-cart">
                        <div className="container">
                          {orderItems.length > 0 ? (
                            orderItems.map((item, index) => (
                              <div key={index} className="row checkout-cart-row mb-4">
                                <div className="col-12">
                                  <div className="item-cart-col">
                                    <div className="order-summary-item-image">
                                      <div className="order-summary-item_quantity">
                                        <span aria-hidden="true">1</span>
                                      </div>
                                      <img
                                        src={item.image}
                                        alt={item.name}
                                      />
                                    </div>
                                    <div className="item-title">
                                      <span><b>{item.name}</b></span>
                                      <span>Rs:{item.price}</span>
                                      <span>Variation: {item.variation}</span>
                                    </div>

                                    <div className="item-price">
                                      <span>Rs:{item.totalPrice}</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))
                          ) : (
                            <p>No items in the order summary.</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Accordion Item 2 (Coupon) */}
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button ${activeIndex === 1 ? '' : 'collapsed'}`}
                        type="button"
                        onClick={() => handleToggle(1)}
                        aria-expanded={activeIndex === 1 ? 'true' : 'false'}
                        aria-controls="collapseTwo"
                      >
                        Add a coupon
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className={`accordion-collapse collapse ${activeIndex === 1 ? 'show' : ''}`}
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <div className="coupon-field">
                          <input
                            type="text"
                            id="couponInput"
                            autoComplete="off"
                            aria-label="Enter code"
                            aria-invalid="false"
                            value=""
                          />
                          <button>
                            <span>Apply</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Order Summary Total */}
                <div className="subt-total">
                  <span>Subtotal</span>
                  <span>Rs:30000</span>
                </div>

                <div className="subt-total">
                  <span><b>Total</b></span>
                  <span><b>Rs:30000</b></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
