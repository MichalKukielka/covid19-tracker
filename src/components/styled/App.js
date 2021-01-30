import styled from 'styled-components';
import { Card, CardContent } from '@material-ui/core';
import { TABLET_BREAKPOINT_MAX } from '../../utils/theme'


export const AppContainer = styled.div`
    background-color: ${props => props.currentTheme.bodyBackgroundColor};
    height: 100vh;
`;

export const AppWrapper = styled.div`
    background-color: ${props => props.currentTheme.bodyBackgroundColor};
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
    background-color: ${props => props.currentTheme.elementBackgroundColor} !important;

    @media (max-width: ${TABLET_BREAKPOINT_MAX}px) {
        margin-top: 20px;
    }
`;

export const SideContent = styled(CardContent)`
    background-color: ${props => props.currentTheme.elementBackgroundColor} !important;
`;

export const ChardTitle = styled.h3`
    margin: 20px 0px;
`;