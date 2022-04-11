import styled from "styled-components";

export const Container = styled.div`
    padding: 40px 0;
    background-color:#1C1C1C;
`

export const Title = styled.h2`
    color: #FFF;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 30px;
`;

export const Grid = styled.div`
    display:grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 30px;
    max-width: 800px;
    margin: 0 auto;
`;