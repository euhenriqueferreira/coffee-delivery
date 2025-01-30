import styled from "styled-components";

export const CartContainer = styled.div`
    background-color: ${props => props.theme["base-card"]};
    padding: 2.5rem;

    ul{
        .divisor{
            margin: 1.5rem 0;
            width: 100%;
            height: 1px;
            background-color: ${props => props.theme["base-button"]};
        }
    }

    footer.footer{
        div{
            display: flex;
            align-items: center;
            justify-content: space-between;

            margin-top: 0.75rem;

            span{
                color: ${props => props.theme["base-text"]};
            }

            span:first-child{
                font-size: 0.875rem;
            }

            span:last-child{
                font-size: 1rem;
            }
        }

        div:last-of-type{
            span{
                font-size: 1.25rem;
                font-weight: 700;
            }
        }

        button.confirm{
            margin-top: 1.5rem;

            font-size: 0.875rem;
            color: ${props => props.theme.white};
            font-weight: 600;
            text-transform: uppercase;

            background-color: ${props => props.theme["yellow"]};

            border: 0;
            border-radius: 6px;

            width: 100%;
            height: 2.75rem;

            cursor: pointer;
        }
    }
`