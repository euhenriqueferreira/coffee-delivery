import styled from "styled-components";

export const BenefitContainer = styled.li<{ highlightColor: string }>`
    list-style: none;
    display: flex;
    align-items: center;
    gap: 0.75rem;

    div{
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${props => props.theme[props.highlightColor]};

        svg{
            color: ${props => props.theme.white};
        }
    }

    span{
        font-size: 1rem;
        color: ${props => props.theme["base-text"]};
        font-weight: 400;
    }
`