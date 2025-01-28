import styled from "styled-components";

export const HomeContainer = styled.main`
    position: relative;
`

export const HeroSection = styled.section`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;

    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    gap: 3.5rem;
    padding: 6rem 0;

    img.background{
        width: 100%;
        height: 100%;
        object-fit: cover;

        position: absolute;
        left: 0;
        top: 0;
    }

    .hero-section__caption{
        h1{
            font-size: 3rem;
            line-height: 1.2;
            color: ${props => props.theme["base-title"]};
            font-weight: 800;
            font-family: "Baloo 2", sans-serif;
            margin-bottom: 1rem;
        }

        p{
            font-size: 1.25rem;
            color: ${props => props.theme["base-subtitle"]};
            line-height: 1.4;
            font-weight: 400;
            margin-bottom: 4rem;
        }

        ul{
            display: grid;
            grid-template-columns: repeat(2, auto);
            gap: 1.25rem 2.5rem;
        }
    }

    .hero-section__image{
        img{
            width: fit-content;
            height: 22.5rem;
        }
    }
`

export const CoffeeList = styled.section`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;

    h2{
        font-size: 2rem;
        color: ${props => props.theme["base-subtitle"]};
        font-weight: 800;
        font-family: "Baloo 2", sans-serif;
        margin-bottom: 2rem;
    }

    ul{
        display: grid;
        grid-template-columns: repeat(4, auto);
    }
`