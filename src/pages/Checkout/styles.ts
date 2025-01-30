import styled from "styled-components";

export const CheckoutContainer = styled.main`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;

    display: flex;
    align-items: flex-start;
    gap: 2rem;

    h2{
        font-size: 1.125rem;
        font-weight: 700;

        color: ${props => props.theme["base-subtitle"]};
        
        font-family: 'Baloo 2', sans-serif;

        margin-bottom: 1rem;
    }

    div{
        flex: 1;
    }

    aside{
        width: 450px;
    }
`


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