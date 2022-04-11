import styled from "styled-components";

export const Container = styled.div`
    padding: 40px 0;
`;
export const Content = styled.div`
    max-width: 960px;
    margin: 0 auto;
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
`;

export const ProjectItem = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items:center;
`;

export const ProjectItemImage = styled.img`
    width: 100%;
    height: 170px;
    object-fit: contain;
    object-position: center;
    margin-bottom: 20px;
    padding: 15px;

`;

export const ProjectItemLegend = styled.span`
    font-size: 16px;
    text-align:center
`;

export const ProjectItemButton = styled.a`
    display: block;
    padding: 10px 15px;
    background-color:#000;
    color:#fff;
    text-decoration:none;
    margin-top: 10px;
    border-radius: 5px;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: bold;
    &:hover {
        background-color: #555;
    }
`;