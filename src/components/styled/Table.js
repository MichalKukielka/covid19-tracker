import styled from 'styled-components';
import { TABLET_BREAKPOINT_MAX } from '../../utils/theme'

export const TableWrapper = styled.div`
    height: 50vh;
    color: ${props => props.currentTheme.secondaryTextColor};;
    overflow: scroll;

    @media (max-width: ${TABLET_BREAKPOINT_MAX}px) {
        height: 40vh;
    }
`;

export const TableHeader = styled.h3`
    margin-bottom: 20px;
    color: ${props => props.currentTheme.primaryTextColor};;
`;

export const TableRow = styled.div`
    display: flex;
    justify-content: space-between;
    padding: .7rem;

    :nth-of-type(odd){
        background-color: ${props => props.currentTheme.tableRowColor};;
    }
`;

export const TableCell = styled.div`

`;
