import styled from "styled-components";
import { Logo } from "../Hero/styles";
import { colors } from "../../../styles";

export const FooterContainer = styled.div`
    width: 100%;
    align-items: center;
    display: flex;
    flex-direction: column;
    background-color: ${colors.lightOrange};
`

export const SecondaryLogo = styled(Logo)`
    padding-top: 40px;
    padding-bottom: 32px;
`

export const MediasContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 8px;
    padding-bottom: 80px;
`

export const Text = styled.p`
    color: ${colors.orange};
    font-size: 10px;
    line-height: 12px;
    font-weight: 400;
    padding-bottom: 40px;
    text-align: center;
    width: 480px;
`