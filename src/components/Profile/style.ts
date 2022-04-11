import styled from "styled-components";

export const Container = styled.div`
    padding: 40px 0;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center
`;
export const Content  = styled.div`
    display:flex;
    width: 400px;
    justify-content: center;
    align-items:center;
`;

export const Photo = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 10px;
    object-fit: cover;

`;
export const ContentLeft = styled.div`
    margin-right: 20px;
`;

export const ContentRight = styled.div``;

export const Name = styled.div`
    font-size: 17px;
    width: 250px;
`;

export const Tech = styled.div`
    font-size: 15px;
`;

export const Description = styled.div`
    font-size: 14px;
`;

export const WhatsappArea = styled.div`
    display:flex;
    justify-content:center;
    align-center;
    margin-left: 20px;
`;

export const WhatsappLink = styled.a`

`;

export const WhatsappImg = styled.img`
    width: 60px;
`;

export const Bold = styled.span`
    font-weight: bold;
`;