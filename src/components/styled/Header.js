import styled from 'styled-components';
import { Select, MenuItem } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PHONE_BREAKPOINT_MAX } from '../../utils/theme';

export const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    justify-content: space-between;
    align-items: center;

    @media (max-width: ${PHONE_BREAKPOINT_MAX}px) {
        flex-direction: column;
        align-items: stretch;
    }

`;

export const ControlsWrapper = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: ${PHONE_BREAKPOINT_MAX}px) {
        margin-top: 20px;
        flex-direction: row;
        justify-content: space-between;

    }
`;

export const AppTitle = styled.h1`
    color: ${props => props.currentTheme.primaryTextColor};
`;

export const SelectWrapper = styled.div`

`;

export const ThemeSwitchWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

`;

export const StyledSelect = styled(Select)`
    color: ${props => props.currentTheme.primaryTextColor} !important;
    background-color: ${props => props.currentTheme.element} !important;
    box-sizing: border-box;
    border: 1px solid ${props => props.currentTheme.primaryTextColor}30 !important;

`;

export const StyledMenuItem = styled(MenuItem)`

`;

export const StyledIcon = styled(FontAwesomeIcon)`
    
`;
