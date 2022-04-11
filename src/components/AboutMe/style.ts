import styled from "styled-components";

export const Container = styled.div`
    padding: 40px 0;
    background-color:#F5F5F5;
`

export const Text = styled.p`
    font-size: 15px;
    text-align:center;
    max-width: 600px;
    margin: 0 auto;

    @media (max-width: 600px) {
        padding: 0 10px;
    }
`
