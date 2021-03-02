import React from 'react';
import styled from 'styled-components';
import { Github, Instagram } from './Icons';


const Footer = styled.footer`
    width: 100%;
    background-color: ${props => props.theme.darkNavyColor};
    position: absolute;
    bottom: 0;
    padding: 16px 0;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    font-size: 12px;
    font-weight: 300;
    color: ${props => props.theme.whiteColor};
`;

const List = styled.ul`
    display: flex;
`;

const ListItem = styled.li`
    &:not(:last-child){
        margin-right: 16px;
    }
    display: flex;
    text-align: center;
    align-items: center;
`;

const Link = styled.a`
`;

const Copyright = styled.span`
    margin: 4px 0;
`;

const Caption = styled(Copyright)`
    color: "#696969";
    font-size: 10px;
    margin-bottom: 6px;
`;

export default () => {
    return (
        <Footer>
            <Caption>
                검색과 추천 알고리즘에서 사용된 데이터셋의 출처는 kaggle 입니다
            </Caption>
            <List>
                <ListItem>
                    <Link href="#"><Github /></Link>
                </ListItem>
                <ListItem>
                    <Link href="#"><Instagram /></Link>
                </ListItem>
                <ListItem>
                    <Link href="#">See Code</Link>
                </ListItem>
            </List>
            <Copyright>
                    Music Recommender {new Date().getFullYear()} &copy; Seungwoo Kim
            </Copyright>
        </Footer>
    )
}