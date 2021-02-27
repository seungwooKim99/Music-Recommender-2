import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
`;

const TitleBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    margin: 0 0 20px 0;
    font-size: 16px;
    font-weight: 400;
`;

const Title = styled.span`
    font-size: 36px;
    font-weight: 600;
`;

const CaptionBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    text-align: center;
    margin: 30px;
    padding: 0 20px;
`;

const Caption = styled.span`
    font-size: 12px;
    font-weight: 400;
    margin: 1px 0;
`;

const ButtonBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    margin: 60px 0;
`;

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

const MusicListBox = styled.div`
    ${props => props.theme.greyBox};
    margin: 18px 24px;
    padding: 12px;
    display: flex;
    flex-direction: column;
`;

const MusicSearchBox = styled.div`
    display: flex;
    flex-direction: column;
`;

const MusicBox = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 4px 0;
`;

const InputBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const Input = styled.input`
    width: 100%;
    border: none;
    border-radius: 4px;
    margin: 0 26px;
    font-size: 18px;
`;


const Start = ({action, setAction}) =>{

    let musicList = {
        'Maroon5' : 'Sugar',
        'BTS' : 'Dynamite',
        'The Weeknd' : 'Save Your Tears'
    }

    const onSubmit = () => {
        setAction('search');
    };

    return (
        <Wrapper>
            <TitleBox>
                <Title>
                     음악 추천 서비스
                </Title>
            </TitleBox>
            <CaptionBox>
                <Caption>
                    평소 자주 듣고 좋아하던 노래를 알려주세요.
                </Caption>
                <Caption>
                    당신의 음악 취향을 분석하고 새로운 노래를 추천합니다!
                </Caption>
            </CaptionBox>
            <ButtonBox>
                 <form onSubmit={onSubmit}>
                    <Btn>시작하기</Btn>
                </form>
            </ButtonBox>
        </Wrapper>
    );
};

export default Start;