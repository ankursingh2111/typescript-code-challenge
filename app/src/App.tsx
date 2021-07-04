import React, { useState } from 'react';
import styled from 'styled-components';
import { CustomerGrid } from './Grid/customerGrid';
import { OrderGrid } from './Grid/orderGrid';
import Button from '@material-ui/core/Button';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

export const FlexBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const StyledButtonDiv = styled.div`
  align-self: center;
  display: flex;
  padding-top: '20px';
`;

export const StyledGridDiv = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

function App() {
  const [buttonVal, setButtonVal] = useState<string>('');

  const onHandleButton = (buttonVal: string) => {
    setButtonVal(buttonVal);
  };

  return (
    <FlexBoxContainer>
      <StyledButtonDiv>
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => {
            onHandleButton('customers');
          }}
        >
          Customers
        </Button>
        <span style={{ width: '20px' }}></span>
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => {
            onHandleButton('orders');
          }}
        >
          Orders
        </Button>
      </StyledButtonDiv>
      <br />
      <StyledGridDiv>
        {buttonVal !== '' ? (
          buttonVal === 'customers' ? (
            <CustomerGrid buttonVal={buttonVal} />
          ) : (
            <OrderGrid buttonVal={buttonVal} />
          )
        ) : null}
      </StyledGridDiv>
    </FlexBoxContainer>
  );
}

export default App;
