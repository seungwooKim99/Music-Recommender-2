import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 6px 0;
    border: 1px solid ${props => props.theme.darkNavyColor};
    border-radius: 4px;
`;

export default ({
    id,
    artists,
    songName
}) => {
    console.log(songName);
    return (
        <Container>
            <span>{artists}</span>
            <span>{songName}</span>
        </Container>
    );
};