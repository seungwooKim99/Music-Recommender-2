import styled from 'styled-components';
import FatText from '../Components/FatText';
import Header from '../Components/Header';
import SearchPage from '../Components/SearchPage';
import Start from '../Components/Start';
import React, { useState } from 'react';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
`;

export default () => {

    const [action, setAction] = useState('start');

    return(
        <Wrapper>
            <Header />
            {action == 'start' ? 
                <Start action={action} setAction={setAction} /> :
                <SearchPage />
            }
        </Wrapper>
    )
};
