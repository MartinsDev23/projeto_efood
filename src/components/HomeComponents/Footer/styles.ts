import styled from "styled-components";
import { Logo } from "../Hero/styles";

export const FooterContainer = styled.div`
    max-width: 1366px;
    margin: 0 auto;
    align-items: center;
    display: flex;
    flex-direction: column;
    background-color: #ffebd9;
`

export const LogoSecundario = styled(Logo)`
    padding-top: 40px;
    padding-bottom: 32px;
`

export const MediasContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 8px;
    padding-bottom: 80px;
`

export const Texto = styled.p`
    color: #E66767;
    font-size: 10px;
    line-height: 12px;
    font-weight: 400;
    padding-bottom: 40px;
    text-align: center;
    width: 480px;
`