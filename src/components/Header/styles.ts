import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 0;

    img{
        height: 2.5rem;
        object-fit: scale-down;
    }

    nav{
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }

    div{
        display: flex;
        align-items: center;
        gap: 0.25rem;

        padding: 0.5rem;
        background-color: ${props => props.theme["purple-light"]};
        border-radius: 6px;
        
        font-size: 0.875rem;
        color: ${props => props.theme["purple-dark"]};
        font-weight: 400;

        svg{
            color: ${props => props.theme.purple};
        }
    }

    button{
        display: flex;
        background: ${props => props.theme["yellow-light"]};
        border-radius: 6px;
        padding: 0.5rem;
        border: 0;

        position: relative;

        cursor: pointer;

        svg{
            color: ${props => props.theme["yellow-dark"]};
            line-height: 0;
        }

        span{
            display: flex;
            align-items: center;
            justify-content: center;

            width: 1.25rem;
            height: 1.25rem;
            border-radius: 50%;

            position: absolute;
            right: calc((1.25rem / 3) * -1);
            top: calc((1.25rem / 3) * -1);

            background-color: ${props => props.theme["yellow-dark"]};
            color: ${props => props.theme.white};

            font-size: 0.875rem;
            font-weight: 700;
        }
    }
`