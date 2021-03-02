import React, { useState } from 'react';
import styled from 'styled-components';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    height: 100%;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 20px;
    justify-content: center;
`;

const Title = styled.span`
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    margin: 12px;
`;

const MusicFeatListBox = styled.div`
    display: flex;
    justify-content: center;
`;

const MusicFeat = styled.div`
    ${props => props.theme.greyBox};
    width: 70px;
    height: 70px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    margin: 3px;
`;

const MusicList = styled.div`
    ${props => props.theme.greyBox};
    margin: 0 20px;
    display: flex;
    flex-flow: column;
`;

export default ({}) => {
    
    return (
        <Wrapper>
            <Header />
            <Container>
                <Title>당신의 음악 취향</Title>
                <MusicFeatListBox>
                    <MusicFeat>Energetic</MusicFeat>
                    <MusicFeat>Dance</MusicFeat>
                    <MusicFeat>Fast</MusicFeat>
                    <MusicFeat>Loud</MusicFeat>
                </MusicFeatListBox>
            </Container>
            <Container>
                <Title>새로운 추천곡</Title>
                <MusicList>
                    <div>a</div>
                    <div>b</div>
                    <div>c</div>
                    <div>d</div>
                </MusicList>
            </Container>
            <Footer />
        </Wrapper>
    );
};