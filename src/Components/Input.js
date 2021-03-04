import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.input`
    border: none;
    border-radius: 4px;
    margin: 0 8px;
    padding: 0px 15px;
    height: 36px;
`;

const Input = ({ placeholder, required=true, value, onChange, type='text', className }) => (
    <Container 
        className={className}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        type={type}
    />
);

export default Input;