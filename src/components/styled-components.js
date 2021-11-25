import styled from "styled-components";

export const Aside = styled.aside`
  display: flex;
  position: fixed;
  flex-direction: column;
  float: left;
  width: 25%;
  height: 90vh;
  background-color: #235E52;
  border-radius: 1%;
  overflow: scroll;
  overflow-x: hidden;
`;

export const ProductsList = styled.main`
  background-color: #353846;
  color: #D1CBBC;
  position: fixed;
  display: flex;
  flex-direction: column;
  margin-left: 25%;
  width: 75%;
  max-height: 90vh;
  overflow: scroll;
  overflow-x: hidden;
  align-items: center;
`;

export const CartButton = styled.button`
  background-color: #D1CBBC;
  background-repeat: no-repeat;
  border: none;
  border-radius: 10%;
  font-size: 30px;
  cursor: pointer;
  overflow: hidden;
  outline: none;
`;

export const Product = styled.div`
  margin-left: 10px;
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #F8F4E4;
  border-radius: 1%;
`;