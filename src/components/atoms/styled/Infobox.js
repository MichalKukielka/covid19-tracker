import styled from 'styled-components';
import { Card, CardContent, Typography } from '@material-ui/core';
import { PHONE_BREAKPOINT_MAX, TABLET_BREAKPOINT_MIN } from '../../../utils/theme'

export const StyledInfobox = styled(Card)`
    flex: 1;
    cursor: pointer;
    box-sizing: border-box;

    background-color: ${props => props.currentTheme.elementBackgroundColor} !important;
    
    ${(props) => !props.active && `
        border-top: 5px solid rgba(0,0,0,0);
    `}

    ${(props) => props.active && props.type === 'cases' && `
        border-top: 5px solid #cc1034;
    `}

    ${(props) => props.active && props.type === 'recovered' && `
        border-top: 5px solid #B9CC95;
    `}

    ${(props) => props.active && props.type === 'deaths' && `
        border-top: 5px solid #A2DCEE;
    `}

    @media (min-width: ${TABLET_BREAKPOINT_MIN}px) {
        :not(:last-child) {
            margin-right: 15px;
        }
    }
    
    @media (max-width: ${PHONE_BREAKPOINT_MAX}px) {
        :not(:last-child) {
            margin-bottom: 15px;
        }
    }
`;

export const InfoboxContent = styled(CardContent)`

    background-color: ${props => props.currentTheme.elementBackgroundColor} !important;

`;

export const Title = styled(Typography)`
    color: ${props => props.currentTheme.primaryTextColor}AA !important;
    font-weight: 700 !important;
    font-size: 1.5rem !important;
    margin-top: 5px !important;
`;

export const Total = styled(Typography)`
    color: ${props => props.currentTheme.primaryTextColor}AA !important;
`;

export const AmountHeader = styled.h2`
    font-weight: 600;
    font-size: 1.75rem;
    margin-bottom: 0.5rem;

    ${(props) => props.type === 'cases' && `
        color: #cc1034;
    `}

    ${(props) => props.type === 'recovered' && `
        color: #B9CC95;
    `} 

    ${(props) => props.type === 'deaths' && `
        color: #A2DCEE;
    `}
`;

