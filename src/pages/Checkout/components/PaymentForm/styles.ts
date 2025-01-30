import styled from "styled-components";

export const PaymentFormContainer = styled.div`
    width: 100%;
    padding: 2.5rem;

    background-color: ${props => props.theme["base-card"]};

    border-radius: 6px;

    margin-top: 0.75rem;

    header{
        h3{
            svg{
                color: ${props => props.theme["purple"]};
            }
        }
    }

    footer{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 0.75rem;

        button{
            display: flex;
            align-items: center;
            gap: 0.5rem;

            background-color: ${props => props.theme["base-button"]};

            border: 1px solid transparent;
            border-radius: 6px;
            
            padding: 1rem;

            font-size: 0.75rem;
            color: ${props => props.theme["base-text"]};
            text-transform: uppercase;
            font-weight: 400;

            cursor: pointer;

            transition: background-color .2s, border .2s;

            svg{
                color: ${props => props.theme.purple};
            }

            &:hover{
                background-color: ${props => props.theme["base-hover"]};
            }

            &:focus{
                box-shadow: 0 0 0 2px ${props => props.theme.purple};
            }

            &.active{
                background-color: ${props => props.theme["purple-light"]};
                border-color: ${props => props.theme.purple};
            }
        }
    }
`