import styled from "styled-components";

export const SuccessContainer = styled.main`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto 15rem auto;

    margin-top: 5rem;

    h1{
        font-size: 2rem;
        color: ${props => props.theme["yellow-dark"]};
        font-weight: 800;

        font-family: 'Baloo 2';
    }

    p{
        font-size: 1.25rem;
        font-weight: 400;
        color: ${props => props.theme["base-subtitle"]};
    }

    section{
        margin-top: 2.5rem;

        display: flex;
        gap: 6.5rem;

        div.infos-wrapper{
            width: 526px;

            padding: 1px;
            border-radius: 6px 36px 6px 36px;
            background: linear-gradient(135deg, rgba(219,172,44,1) 0%, rgba(128,71,248,1) 100%);
            
            & > ul{
                height: 100%;
                background-color: ${props => props.theme.white};
                border-radius: inherit;

                padding: 2.5rem;

                display: flex;
                flex-direction: column;
                justify-content: center;
                gap: 2rem;

                li{
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;

                    list-style: none;

                    & > div{
                        width: 2rem;
                        height: 2rem;
                        border-radius: 9999px;

                        display: flex;
                        align-items: center;
                        justify-content: center;

                        svg{
                            color: ${props => props.theme.white};
                        }
                    }

                    &:nth-of-type(1){
                        & > div{
                            background: ${props => props.theme.purple};
                        }
                    }

                    &:nth-of-type(2){
                        & > div{
                            background: ${props => props.theme.yellow};
                        }
                    }
                    
                    &:nth-of-type(3){
                        & > div{
                            background: ${props => props.theme["yellow-dark"]};
                        }
                    }

                    p{
                        font-size: 1rem;
                        color: ${props => props.theme["base-text"]};
                        font-weight: 400;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 0.15rem;
                    }
                }
            }
        }
    }

 

    
`