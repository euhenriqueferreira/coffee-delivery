import styled from "styled-components";

export const CheckoutContainer = styled.main`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto 15rem auto;

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

    & > div{
        flex: 1;
    }

    aside{
        width: 450px;
    }

    header{
        margin-bottom: 2rem;
        h3{
            font-size: 1rem;
            color: ${props => props.theme["base-subtitle"]};
            font-weight: 400;

            display: flex;
            align-items: center;
            gap: 0.5rem;

            font-family: 'Roboto';
        }
        
        p{
            font-size: 0.875rem;
            color: ${props => props.theme["base-text"]};
            font-weight: 400;

            padding-left: calc(22px + 0.5rem);
            margin-top: 0.25rem;
        }
    }
`

export const AddressFormContainer = styled.div`
    width: 100%;
    padding: 2.5rem;

    background-color: ${props => props.theme["base-card"]};

    border-radius: 6px;

    header{
        h3{
            svg{
                color: ${props => props.theme["yellow-dark"]};
            }
        }
    }

    form{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 1rem 2%;

        .input-wrapper{
            input{
                font-size: 0.875rem;
                font-weight: 400;
                color: ${props => props.theme["base-text"]};

                height: 2.5rem;

                border: 1px solid ${props => props.theme["base-button"]};
                border-radius: 4px;

                background-color: ${props => props.theme["base-input"]};

                padding-left: 0.5rem;
            }

            input::placeholder{
                color: ${props => props.theme["base-label"]};
            }

            input.error{
                border-color:rgb(239, 79, 79);
            }
        }

        .input-wrapper:nth-of-type(1), .input-wrapper:nth-of-type(2){
            width: 100%;

            input{width: 34%;}
        }

        .input-wrapper:nth-of-type(2){
            input{
                width: 100%;
            }
        }

        .input-wrapper:nth-of-type(3), .input-wrapper:nth-of-type(5){
            width: 34%;

            input{width: 100%;}
        }

        .input-wrapper:nth-of-type(4){
            width: 64%;

            input{width: 100%;}
        }

        .input-wrapper:nth-of-type(6){
            width: 53%;

            input{width: 100%;}
        }

        .input-wrapper:nth-of-type(7){
            width: 9%;

            input{width: 100%;}
        }

    }
`



