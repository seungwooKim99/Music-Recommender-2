import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
    background-color: ${props => props.theme.darkBlueColor};
    border-radius: 4px;
    font-size: 12px;
    border: none;
    outline: none;
    cursor: pointer;
    color: ${props => props.theme.lightBlueColor};
    padding: 10px;
`;

export default ({text}) => {
    return (
        <Btn>{text}</Btn>
    );
};