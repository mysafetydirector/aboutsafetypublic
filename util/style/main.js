import css from 'styled-jsx/css';

export default css`
  html {
    text-size-adjust: 100%;
    font-size: 10px;
    tap-highlight-color: transparent;
    margin: 0;
    padding: 0;
  }
  * {
    box-sizing: border-box;
    font-weight: 300;
  }
  body {
    line-height: 3rem;
    font-size: 1.6rem;
    font-family: 'Roboto', sans-serif;
  }
  button {
    line-height: 2.6rem;
    background: none;
    border: 1px solid #ccc;
    box-shadow: none;
    padding: 0.6rem;
    color: inherit;
    border-radius: 5px;
    padding: 7px 25px;
    border: 0;
  }
  .visually-hidden,
  legend {
    position: absolute !important;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px);
  }
  a,
  a:visited {
    color: #333;
  }
  img {
    max-width: 100%;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  td {
    text-align: left;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: 'Vollkorn', sans-serif;
    text-align: center;
    margin: 0;
    padding: 0;
  }

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2rem;
  }

  p {
    margin: 0 0 1rem 0;
  }

  hr {
    border: 0;
    border-top: 2px solid #ddd;
  }
  input,
  textarea {
    font-size: 1.6rem;
    border: 1px solid #ccc;
    padding: 0.6rem;
    width: 100%;
    max-width: 100%;
    min-height: 40px;
  }
`;
