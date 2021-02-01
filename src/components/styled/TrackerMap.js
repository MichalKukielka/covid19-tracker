import styled from 'styled-components';
import { Popup } from 'react-leaflet';

import { TABLET_BREAKPOINT_MAX } from '../../utils/theme'

export const MapWrapper = styled.div`
    margin-top: 20px;
    height: 72vh;
    background-color: ${props => props.currentTheme.elementBackgroundColor};
    border-radius: 5px;
    box-shadow: 0px 2px 6px 1px rgba(0, 0, 0, 0.3);
    padding: 1rem;

    .leaflet-container {
        height: 100%;
        border-radius: 5px;
    }

    @media (max-width: ${TABLET_BREAKPOINT_MAX}px) {
        height: 40vh;
    }
`;

export const PopupFlag = styled.div`
    height: 80px;
    width: 100%;
    background-size: cover;
    border-radius: 5px;
    img {
        width: 100px;
        border-radius: 5px;
    }
`;

export const PopupName = styled.div`
    font-size: 16px;
    font-weight: 600;
    margin-top: 5px;
`;

export const PopupCases = styled.div`
    font-size: 12px;
    margin-top: 5px;
    background-color: #E984A255 !important;
    padding: 0.15rem;
`;

export const PopupRecovered = styled.div`
    font-size: 12px;
    margin-top: 5px;
    background-color: #B9CC9555 !important;
    padding: 0.15rem;
`;

export const PopupDeaths = styled.div`
    font-size: 12px;
    margin-top: 5px;
    background-color: #A2DCEE55 !important;
    padding: 0.15rem;
`;

export const StyledPopup = styled(Popup)`
    & > .leaflet-popup-content-wrapper {
        background-color: ${props => props.currentTheme.elementBackgroundColor} !important;
    }
`;