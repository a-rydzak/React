import React from 'react';
import styled from 'styled-components';

const styleHeader =  {
    width: '80%',
    margin:'auto',
    'text-align': 'center'
  }

const StyledButton = styled.button`
    background-color: ${props=>props.color};
    font: inherit;
    border: 1px solid blue;
    padding: 8px;
    cursor: pointer;
  `


export {styleHeader, StyledButton}