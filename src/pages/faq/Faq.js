import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import Helmet from '../../components/helmet/Helmet';

const Faq = () => {
  return (
    <>
      <Helmet title="FAQ" />

      <div className="container mt-5">
        <h2>Frequently Asked Questions</h2>

        <Accordion defaultActiveKey="0" flush>
          {/* Question 1 */}
          <Accordion.Item eventKey="0">
            <Accordion.Header> How can I request to buy a shelter for my car or bike?</Accordion.Header>
            <Accordion.Body>
              To request to buy a shelter for your car or bike, you can click on the "Request to Buy" button and choose from the following contact options:
              <ul>
                <li>Call: [Your contact number]</li>
                <li>Email: [Your email address]</li>
                <li>WhatsApp: [Your WhatsApp number]</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          {/* Question 2 */}
          <Accordion.Item eventKey="1">
            <Accordion.Header>  Do you provide customized shelters for specific car models like Jeepsy Soft Hood, Tata Maruti Soft Top Hood, etc.?</Accordion.Header>
            <Accordion.Body>
              Yes, we provide customized shelters for various car models, including Jeepsy Soft Hood, Tata Maruti Soft Top Hood, and more. Please contact us through the "Request to Buy" button or the contact options mentioned above to discuss your requirements.
            </Accordion.Body>
          </Accordion.Item>

          {/* Question 3 */}
          <Accordion.Item eventKey="2">
            <Accordion.Header>  What are the delivery charges for shelter products all over India?</Accordion.Header>
            <Accordion.Body>
              The delivery charges for shelter products vary depending on your location and the size of the product. We offer delivery services all over India, and the shipping cost will be calculated based on these factors. Please contact us to get a precise quote for your order.
            </Accordion.Body>
          </Accordion.Item>

          {/* Question 4 */}
          <Accordion.Item eventKey="3">
            <Accordion.Header>  Can I track the status of my shelter order after purchase?</Accordion.Header>
            <Accordion.Body>
              Yes, you will receive a tracking ID after your order is dispatched. You can use this tracking ID to monitor the status and location of your shelter during transit. Our team will also provide you with regular updates on the delivery status to keep you informed.
            </Accordion.Body>
          </Accordion.Item>

          {/* Question 5 */}
          <Accordion.Item eventKey="4">
            <Accordion.Header>  What is the estimated delivery time for customized shelters?</Accordion.Header>
            <Accordion.Body>
              The estimated delivery time for customized shelters may vary depending on the complexity of the design and the materials used. We strive to deliver your customized shelter as soon as possible without compromising on quality. Our team will provide you with an estimated delivery time when you place your order.
            </Accordion.Body>
          </Accordion.Item>

        </Accordion>
      </div>
    </>
  );
};

export default Faq;
