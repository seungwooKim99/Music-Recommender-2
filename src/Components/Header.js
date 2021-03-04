import React from 'react';
import styled from 'styled-components';
import { CgMusic } from 'react-icons/cg';

const Header = styled.header`
    width: 100%;
    background-color: none;
    //position: absolute;
    //top: 0;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    padding: 12px 0;
    align-items: center;
    text-align: center;
`;

const Title = styled.span`
    font-size: 18px;
    font-weight: 600;
`;

const IconBox = styled.div`
    color: ${props=>props.theme.lightPurpleColor};
    margin: 0 4px;
    font-size: 18px;
`;


export default () => {

    return (
        <Header>
            <Title>Music Recommender</Title>
            <IconBox>
                <CgMusic />
            </IconBox>
        </Header>
    );
};