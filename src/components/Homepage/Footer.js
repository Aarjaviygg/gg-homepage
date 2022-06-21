import React from 'react';
import styled from 'styled-components';
import img1 from "../../assets/logo.jpeg";

const Box = styled.div`
  padding: 10px 10px;
  background: #333333;
  ${'' /* position: absolute; */}
  bottom: 0;
  width: 100%;
  @media (max-width: 1000px) {
    padding: 30px 30px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 50px;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 10px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

const Flinks = styled.a`
  color: white;
  margin-bottom: 5px;
  font-size: 12px;
  text-decoration: none;
  &:hover {
    color: green;
    transition: 200ms ease-in;
  }
`;

const Heading = styled.p`
  font-size: 18px;
  color: white;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
             <div>
              <img src ={img1} width={120 } height={50}/>
             </div>
          </Column>
          <Column>
            <Heading>Quick Links</Heading>
            <Flinks>Guzelgiy official site</Flinks>
            <Flinks>Discover</Flinks>
            <Flinks>Catalog</Flinks>
            <Flinks>All products</Flinks>
          </Column>
          <Column>
            <Heading>Need Help</Heading>
            <Flinks>Contact Us</Flinks>
            <Flinks>Track Order</Flinks>
            <Flinks>Refund policies</Flinks>
            <Flinks>FAQs</Flinks>
          </Column>
          <Column>
            <Heading>Company</Heading>
            <Flinks>About</Flinks>
            <Flinks>Gift Vouchers</Flinks>
            <Flinks>Catalog</Flinks>
            <Flinks>All products</Flinks>
          </Column>
          
          <Column>
          
            <Heading>Social Media</Heading>
            <Flinks href='#'>
                <i class="fa-brands fa-facebook">
                <span style={{ marginLeft: '10px' }}>Facebook</span>
              </i>
            </Flinks>
            <Flinks href='#'>
              <i className='fa-brands fa-instagram'>
                <span style={{ marginLeft: '10px' }}>Instagram</span>
              </i>
            </Flinks>
            <Flinks href='#'>
              <i className='fa-brands fa-twitter'>
                <span style={{ marginLeft: '10px' }}>Twitter</span>
              </i>
            </Flinks>
            <Flinks href='#'>
              <i className='fa-brands fa-youtube'>
                <span style={{ marginLeft: '10px' }}>Youtube</span>
              </i>
            </Flinks>
          </Column>
        </Row>
        <Row>
        <Flinks>© 2022, guzelgiy Powered by Shopify</Flinks>
        </Row>
        <Row>
          <Flinks>© 2022, guzelgiy Powered by Shopify</Flinks>
          </Row>
      </Container>
    </Box>
  );
};
export default Footer;

