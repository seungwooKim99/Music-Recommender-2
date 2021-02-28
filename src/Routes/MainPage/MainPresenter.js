import React from 'react';
import styled from 'styled-components';
import Button from '../../Components/Button';
import MusicBox from '../../Components/MusicBox';

//Start Pade
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

/*
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
*/

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

/*
const MusicBox = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 4px 0;
`;
*/

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

//Search Page

const SelectedMusicBox =  styled.div`
    display: flex;
    flex-direction: column;
`;

const SelectedMusicList = styled.div`
    display: flex;
    margin: 0 24px;
`;

const SelectedMusic = styled.div`
    ${props => props.theme.greyBox};
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin: 2px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export default ({
    action,
    setAction,
    startSearch,
    musicL,
    setMusicL,
    handleSearchFormSubmit,
    songName,
    setSongName,
    handleValueChange
}) => {

    return (
        <Wrapper>
            {action === "start" && (
                <>
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
                    <form onSubmit={startSearch} >
                        <Button text='시작하기' />
                    </form>
                </ButtonBox>
                </>
            )}
            {action === "search" && (
                <>
                    {console.log(musicL)}
                    {musicL ? (
                        <>
                        <MusicSearchBox>
                            <TitleBox>음악 검색</TitleBox>
                            <InputBox>
                                <form onSubmit={handleSearchFormSubmit}>
                                    <Input 
                                        placeholder={'노래 제목'}
                                        type='text'
                                        name='songName'
                                        value={songName}
                                        onChange={handleValueChange}
                                    />
                                    <Button
                                        type='submit'
                                        text='검색'
                                    />
                                </form>
                            </InputBox>
                            <MusicListBox>
                                <div>temp</div>
                            </MusicListBox>
                        </MusicSearchBox>
                        <SelectedMusicBox>
                            <TitleBox>
                                선택한 노래
                            </TitleBox>
                            <SelectedMusicList>
                                <SelectedMusic>
                                    a
                                </SelectedMusic>
                                <SelectedMusic>
                                    b
                                </SelectedMusic>
                                <SelectedMusic>
                                    c
                                </SelectedMusic>
                                <SelectedMusic>
                                    d
                                </SelectedMusic>
                                <SelectedMusic>
                                    e
                                </SelectedMusic>
                            </SelectedMusicList>
                        </SelectedMusicBox>
                        <ButtonBox>
                            <form>
                                <Button text='결과보기' />
                            </form>
                        </ButtonBox>
                        </>
                    ) : (
                        <>
                        Loading Music List...
                        </>
                    )}
                </>
            )}
        </Wrapper>
    );
};