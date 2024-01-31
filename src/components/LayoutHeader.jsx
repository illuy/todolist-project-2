import React from "react";
import styled from "styled-components";

const Tilte = styled.header`
    background-color: royalblue;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-transform: uppercase;
    padding: 10px;
    margin-bottom: 10px;
    color: #fff;
`;
const Logo = styled.h1`
    font-size: 2rem;
`;
const MenuButton = styled.p`
    /* border: 1px solid red; */
    width: 40px;
    position: relative;
    cursor: pointer;
`;
const MenuButtonLine = styled.span`
    position: absolute;
    width: 100%;
    height: 3px;
    border-radius: 3px;
    background-color: #fff;
    top: ${(props) => props.top};
    transform: translateY(-50%);
`;

export const LayoutHeader = () => {
    return (
        <>
            <Tilte>
                <Logo>
                    <a href="./">todolist</a>
                </Logo>
                <MenuButton>
                    <MenuButtonLine top="20%" />
                    <MenuButtonLine top="50%" />
                    <MenuButtonLine top="80%" />
                </MenuButton>
            </Tilte>
        </>
    );
};
