import styled from 'styled-components';
import { Card } from '@material-ui/core';

export const AppContainer = styled.div`
    background-color: #f5fbfa;
    height: 100vh;
`;

export const AppWrapper = styled.div` 
    display: flex;
    justify-content: space-evenly;
    padding: 20px;

    @media (max-width: 990px) {
        flex-direction: column;
    }
`;

export const MainWrapper = styled.div`
    flex: 0.9;
`;

export const SideWrapper = styled(Card)`
    @media (max-width: 990px) {
        margin-top: 20px;
    }
`;

