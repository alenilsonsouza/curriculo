import styled from "styled-components";

type props = {
    color: string;
}

export const Title = styled.h2<props>`
    color: ${props => props.color};
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 30px;
`;