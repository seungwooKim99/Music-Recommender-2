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
    padding: 20px;
    justify-content: center;
    text-align: center;
`;

const Title = styled.span`
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    margin: 12px;
`;

const Caption = styled.span`
    font-size: 10px;
    font-weight: 400;
    margin: 4px 0;
`;

const MusicFeatListBox = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px 0;
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

const MusicListBox = styled.div`
    ${props => props.theme.greyBox};
    margin: 20px 0;
    display: flex;
    flex-flow: column;
    padding: 10px;
`;

const MusicList = styled.ul`

`;

const MusicInfo = styled.li`
    padding: 7px;
    margin: 1px;
    border: 1px solid ${props => props.theme.darkNavyColor};
    border-radius: 4px;
`;

export default ({
    isResultFetched,
    setIsResultFetched
}) => {
    
    return (
        <Wrapper>
            <Container>
                <Title>당신의 음악 취향</Title>
                <Caption>'songName'의 음악 특징을 이용해 당신의 취향을 분석했습니다</Caption>
                <MusicFeatListBox>
                    <MusicFeat>Energetic</MusicFeat>
                    <MusicFeat>Dance</MusicFeat>
                    <MusicFeat>Fast</MusicFeat>
                    <MusicFeat>Loud</MusicFeat>
                </MusicFeatListBox>
            </Container>
            <Container>
                <Title>당신을 위한 추천 리스트</Title>
                <Caption>추천곡을 클릭해서 바로 유튜브에서 들어보세요!</Caption>
                <MusicListBox>
                    <MusicList>
                        <MusicInfo>
                            The Weeknd - Reminder
                        </MusicInfo>
                        <MusicInfo>
                            The Weeknd - Save Your Tears
                        </MusicInfo>
                        <MusicInfo>
                            Dua Lipa - Fever
                        </MusicInfo>
                        <MusicInfo>
                            Ariana Grande - Motive
                        </MusicInfo>
                        <MusicInfo>
                            Ariana Grande - Touch It
                        </MusicInfo>
                        <MusicInfo>
                            The Weeknd - Heartless
                        </MusicInfo>
                        <MusicInfo>
                            DEAN - Instagram
                        </MusicInfo>
                        <MusicInfo>
                            Maroon5 - One More Night
                        </MusicInfo>
                    </MusicList>
                </MusicListBox>
            </Container>
        </Wrapper>
    );
};