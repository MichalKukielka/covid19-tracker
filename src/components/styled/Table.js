import styled from 'styled-components';

export const TableWrapper = styled.div`
    margin-top: 20px;
    height: 50vh;
    color: grey;
    overflow: scroll;

    @media (max-width: 990px) {
        height: 40vh;
    }
`;

export const TableRow = styled.div`
    display: flex;
    justify-content: space-between;
    padding: .7rem;

    :nth-of-type(odd){
        background-color: #f3f2f8;
    }
`;

export const TableCell = styled.div`

`;
