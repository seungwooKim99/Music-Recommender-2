import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
    width: 100%;
    background-color: none;
    position: absolute;
    bottom: 0;
    margin-top: 10px;
    padding: 12px 0;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    font-size: 12px;
    font-weight: 300;
`;

const List = styled.ul`
    display: flex;
`;

const ListItem = styled.li`
    &:not(:last-child){
        margin-right: 16px;
    }
`;

const Link = styled.a`
`;

const Copyright = styled.span`
`;

export default () => {
    return (
        <Footer>
            <Copyright>
                검색과 추천 알고리즘에서 사용된 데이터셋의 출처는 kaggle 입니다
            </Copyright>
            <List>
                <ListItem>
                    <Link href="#">Github</Link>
                </ListItem>
                <ListItem>
                    <Link href="#">Facebook</Link>
                </ListItem>
                <ListItem>
                    <Link href="#">Instagram</Link>
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