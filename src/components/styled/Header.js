import styled from 'styled-components';
import { Select } from '@material-ui/core';

export const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    justify-content: space-between;
    align-items: stretch;

    @media (max-width: 425px) {
        flex-direction: column;
    }

`;

export const ControlsWrapper = styled.div`
    display: flex;
    @media (max-width: 425px) {
        margin-top: 20px;
        flex-direction: row;
        justify-content: space-between;
    }
`;

export const AppTitle = styled.h1`

`;

export const SelectWrapper = styled.div`

`;

export const ThemeSwitchWrapper = styled.div`

`;

export const StyledSelect  = styled(Select)`
    background-color: white;
`;
