import styled from 'styled-components';
import { PHONE_BREAKPOINT_MAX } from '../../utils/theme'

export const StatsWrapper = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: ${PHONE_BREAKPOINT_MAX}px) {
        flex-direction: column;
    }
`;

