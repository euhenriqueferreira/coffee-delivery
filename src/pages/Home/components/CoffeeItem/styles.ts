import styled from "styled-components";

export const CoffeeItemContainer = styled.div`
    position: relative;

    padding: 1.25rem 1.5rem;
    text-align: center;
    max-width: 256px;
    width: 100%;

    img{
        width: 7.5rem;
        height: auto;
        aspect-ratio: 2 / 2;
        object-fit: contain;
        position: relative;
    }

    .traits{
        margin-top: 0.75rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 0.25rem;
        position: relative;
        span{
            font-size: 0.625rem;
            font-weight: 700;
            text-transform: uppercase;

            padding: 0.25rem 0.5rem;

            border-radius: 9999px;
            
            background-color: ${props => props.theme["yellow-light"]};
            color: ${props => props.theme["yellow-dark"]};
        }
    }

    h3{
        font-size: 1.25rem;
        font-weight: 700;

        color: ${props => props.theme["base-subtitle"]};
        text-align: center;

        font-family: 'Baloo 2';

        margin-top: 1rem;
        position: relative;
    }

    p{
        font-size: 0.875rem;
        font-weight: 400;

        color: ${props => props.theme["base-label"]};
        text-align: center;

        margin-top: 0.5rem;
        position: relative;
    }

    footer{
        margin-top: 2rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;

        span.price{
            flex: 1;
            text-align: left;
            font-size: 0.875rem;
            color: ${props => props.theme["base-text"]};

            strong{
                font-size: 1.5rem;
                font-weight: 800;

                font-family: 'Baloo 2';

                margin-left: 0.25rem;
            }
        }

        .counter{
            display: flex;
            align-items: center;

            width: 4.5rem;
            height: 2.25rem;

            border-radius: 6px;
            padding: 0 0.3rem;

            background-color: ${props => props.theme["base-button"]};

            button{
                height: 100%;
                width: 33%;

                cursor: pointer;

                background-color: transparent;
                border: 0;

                svg{
                    color: ${props => props.theme.purple};
                }
            }

            span{
                flex: 1;
            }
        }

        button.cart{
            width: 2.25rem;
            height: auto;
            aspect-ratio: 2 / 2;

            cursor: pointer;
            
            border: 0;
            border-radius: 6px;
            
            display: flex;
            align-items: center;
            justify-content: center;
            
            background-color: ${props => props.theme["purple-dark"]};
            
            margin-left: 0.5rem;

            transition: .2s;

            svg{
                color: ${props => props.theme["white"]};
            }

            &:hover{
                background-color: ${props => props.theme["purple"]};
            }
        }
    }

    &::before{
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;

        width: 100%;
        height: calc(100% - 2.5rem);
        
        background-color: ${props => props.theme["base-card"]};
        
        border-radius: 6px 36px 6px 36px;
    }
`