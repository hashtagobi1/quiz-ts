import styled, { createGlobalStyle } from "styled-components";
// @ts-ignore
import BGImage from "./imgs/jaanus-jagomagi.jpg";

export const GlobalStyle = createGlobalStyle`
html{
    height:100%
}

body{
    background-image:url(${BGImage});
    background-size:cover;
    margin:0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
    /* filter: blur(1px); */
    /* filter: grayscale(90%); */
    /* filter: drop-shadow(1px 1px 1px ) */
    
}

*{
    box-sizing:border-box;
    font-family: 'Hind Siliguri', sans-serif;
}

`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
  }

  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }

  h1 {
    color: black;
    font-weight: 600;
    /* background-image: linear-gradient(to right, #d8a56b, #9a2e07); */
    background-size: 100%;
    background-clip: text;
    --webkit-background-clip: text;
    --webkit-text-fill-color: transparent;
    filter: drop-shadow(1px 1px 1px #f9e173);
    font-size: 70px;
    text-align: center;
    margin: 20px;
  }

  .start,
  .next {
    font-size:1rem;
    cursor: pointer;
    background: linear-gradient(180deg, #fff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px regba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }

  .start {
    max-width: 200px;
  }
`;
