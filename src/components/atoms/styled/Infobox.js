import styled from 'styled-components';
import { Card, CardContent, Typography } from '@material-ui/core';

export const StyledInfobox = styled(Card)`
    flex: 1;
    cursor: pointer;

    background-color: ${props => props.currentTheme.elementBackgroundColor} !important;


    ${(props) => props.active && props.type === 'cases' && `
        border-top: 5px solid #cc1034;
    `}

    ${(props) => props.active && props.type === 'recovered' && `
        border-top: 5px solid #B9CC95;
    `}

    ${(props) => props.active && props.type === 'deaths' && `
        border-top: 5px solid #A2DCEE;
    `}

    @media (min-width: 426px) {
        :not(:last-child) {
            margin-right: 15px;
        }
    }
    
    @media (max-width: 425px) {
        :not(:last-child) {
            margin-bottom: 15px;
        }
    }
`;

export const InfoboxContent = styled(CardContent)`

    background-color: ${props => props.currentTheme.elementBackgroundColor} !important;

`;

export const Title = styled(Typography)`
    color: #6c757d;
    font-weight: 700 !important;
    font-size: 1.5rem !important;
    margin-top: 5px !important;
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

