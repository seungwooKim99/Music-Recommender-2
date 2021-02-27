import styled from 'styled-components';
import React from 'react';
import Input from './Input';
import MusicBox from './MusicBox';

const Wrapper = styled.div`
    width: 100%;
`;

const MusicSearchBox = styled.div`
    display: flex;
    flex-direction: column;
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

const MusicListBox = styled.div`
    ${props => props.theme.greyBox};
    margin: 18px 24px;
    padding: 12px;
    display: flex;
    flex-direction: column;
`;

const InputBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

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

class SearchPage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            musicL: ''
        }
    }

    callApi = async () => {
        const response = await fetch('/api/musicL');
        const body = await response.json();
        return body;
    }

    componentDidMount() {
        this.callApi()
            .then(res => this.setState({musicL : res}))
            .catch(err => console.log(err));
    }

    musicList = {
        'Maroon5' : 'Sugar',
        'BTS' : 'Dynamite',
        'The Weeknd' : 'Save Your Tears'
    }

    render() {
        return (
            <Wrapper>
                {this.state.musicL ? 
                    <>
                    <MusicSearchBox>
                    <TitleBox>
                        음악 검색
                    </TitleBox>
                    <InputBox>
                        <Input placeholder={'노래 제목'} />
                    </InputBox>
                    <MusicListBox>
                        {this.state.musicL.map(music => (
                            <MusicBox 
                                id={music.id} 
                                key={music.id}
                                artists={music.artists}
                                name={music.name}
                            />
                        ))}
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
                        <Btn>추천받기</Btn>
                    </form>
                </ButtonBox>
                </>
                 : <div>Loading</div>
                }
            </Wrapper>
        );
    }
};

export default SearchPage;