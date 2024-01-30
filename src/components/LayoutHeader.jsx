import React from "react";
import styled from "styled-components";

const Tilte = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const LayoutHeader = () => {
    return (
        <>
            <Tilte>
                <h1>todolist</h1>
                <p>react</p>
            </Tilte>
        </>
    );
};
