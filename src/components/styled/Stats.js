import styled from 'styled-components';

export const StatsWrapper = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 425px) {
        flex-direction: column;
    }
`;

