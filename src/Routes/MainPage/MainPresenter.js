import React from 'react';
import styled from 'styled-components';
import Button from '../../Components/Button';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import Input from '../../Components/Input';
import MusicBox from '../../Components/MusicBox';

//Start Pade
const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    height: 100%;
`;

/*
const TitleBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    margin: 0 0 20px 0;
    font-size: 16px;
    font-weight: 400;
`;
*/

const MainTitle = styled.span`
    font-size: 36px;
    font-weight: 600;
`;

const Title = styled.span`
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    margin: 12px;
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

/*
const ButtonBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    margin: 60px 0;
`;
*/
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
    border-radius: 4px;
    &:hover {
        background-color: ${props => props.theme.darkNavyColor};
    }
`;

const MusicSearchBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 20px;
`;

/*
const MusicBox = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 4px 0;
`;
*/

//Search Page

const InputBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

/*
const Input = styled.input`
    width: 100%;
    border: none;
    border-radius: 4px;
    margin: 0 26px;
    font-size: 18px;
`;
*/

const SelectedMusicBox =  styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 20px;
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

//

const SearchBtn = styled(Input)`

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
    handleValueChange,
    changeStateToSearch,
    handleSelectedMusic,
    selectedSongId,
    handleResultFormSubmit,
    analysisData,
    recommendData
}) => {
    return (
        <Wrapper>
            {action === "start" && (
                <>
                <MainTitle>
                        음악 추천 서비스
                </MainTitle>
                <CaptionBox>
                    <Caption>
                        평소 자주 듣고 좋아하던 노래를 알려주세요.
                    </Caption>
                    <Caption>
                        당신의 음악 취향을 분석하고 새로운 노래를 추천합니다!
                    </Caption>
                </CaptionBox>
                <form onSubmit={changeStateToSearch} >
                    <Button onClick={changeStateToSearch} text='시작하기' />
                </form>
                </>
            )}
            {action === "search" && (
                <>
                <MusicSearchBox>
                    <Title>음악 검색</Title>
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
                    {musicL === '' ?
                    <div>No results</div> : 
                    <MusicListBox>
                        <MusicList>
                        {musicL.map(music => (
                                <MusicInfo 
                                    key={music.id}
                                    id={music.song_id}
                                    onClick={handleSelectedMusic}
                                >
                                    {music.artists} - {music.name}
                                </MusicInfo>
                            ))}
                        </MusicList>
                    </MusicListBox>
                    }
                    {selectedSongId === '' ?
                    <div></div> :
                    <>
                    <Title>선택한 곡</Title>
                    <span>{selectedSongId}</span>
                    </>
                    }
                </MusicSearchBox>
                <form onSubmit={handleResultFormSubmit}>
                    <Button text='결과보기' />
                </form>
                {analysisData === '' ? 
                <>
                <span>nothing</span>
                </> : 
                <>
                <div>{Object.keys(analysisData).length}</div>
                </>
                }
                </>
            )}
        </Wrapper>
    );
};